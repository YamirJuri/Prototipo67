<?php
/** EJEMPLO DE INTEGRACIÓN, PHP 8.1+. No registra solicitudes todavía.
 * Copiar a /api sólo después de completar persistencia y revisión de despliegue.
 * Nunca usar la validación del navegador como control de seguridad del servidor.
 */
declare(strict_types=1);
ini_set('session.use_strict_mode', '1');
session_set_cookie_params(['httponly'=>true,'secure'=>!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS']!=='off','samesite'=>'Lax','path'=>'/']);
session_start();
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
function reply(int $status, array $body): never { http_response_code($status); echo json_encode($body, JSON_UNESCAPED_UNICODE); exit; }
function value(string $key, int $max=2500): string {
 $raw=$_POST[$key]??'';
 if (!is_string($raw) || !mb_check_encoding($raw,'UTF-8') || mb_strlen($raw)>$max) reply(422,['ok'=>false,'message'=>'Campo inválido.']);
 return trim($raw);
}
function validate_request(string $kind): array {
 if (($_SERVER['REQUEST_METHOD']??'')!=='POST') reply(405,['ok'=>false]);
 // Limitar también post_max_size, upload_max_filesize y tamaño de petición en el servidor web.
 if ((int)($_SERVER['CONTENT_LENGTH']??0)>17*1024*1024) reply(413,['ok'=>false]);
 $token=value('csrf_token',128);
 if (!$token || !isset($_SESSION['csrf']) || !hash_equals($_SESSION['csrf'],$token)) reply(403,['ok'=>false,'message'=>'Sesión inválida.']);
 if (value('sitio_web',200)!=='') reply(422,['ok'=>false]);
 if (value('tipo',30)!==$kind) reply(422,['ok'=>false]);
 // Control básico por sesión. Agregar limitación por IP/recurso en el proxy antes de producción.
 $recent=array_values(array_filter($_SESSION['requests']??[],fn($v)=>$v>time()-600));
 if (count($recent)>=5) reply(429,['ok'=>false]);
 $recent[]=time();$_SESSION['requests']=$recent;
 $d=['nombre'=>value('nombre',90),'correo'=>value('correo',120),'telefono'=>value('telefono',22),'mensaje'=>value('mensaje',2500)];
 if (mb_strlen($d['nombre'])<2 || !preg_match('/\p{L}/u',$d['nombre']) || preg_match('/[<>\x00-\x1f]/u',$d['nombre'])) reply(422,['ok'=>false]);
 if (!filter_var($d['correo'],FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/',$d['correo'])) reply(422,['ok'=>false]);
 if ($d['telefono']!=='' && !preg_match('/^[+\d\s()-]{6,22}$/',$d['telefono'])) reply(422,['ok'=>false]);
 if (mb_strlen($d['mensaje'])<10 || preg_match('/[\x00-\x08\x0b\x0c\x0e-\x1f]/',$d['mensaje'])) reply(422,['ok'=>false]);
 if (value('acepta',1)!=='1') reply(422,['ok'=>false]);
 if ($kind==='contacto') {
  $d['tema']=value('tema',30);
  if (!in_array($d['tema'],['ingreso','campus','cursado','examenes','documentacion','otra'],true)) reply(422,['ok'=>false]);
 } else {
  // Sustituir por consulta parametrizada al catálogo de carreras habilitadas del Instituto.
  $d['carrera']=value('carrera',50);
  if (!in_array($d['carrera'],['enfermeria','higiene','administracion-salud'],true)) reply(422,['ok'=>false]);
 }
 if ($kind==='homologacion') {
  $d['institucion_origen']=value('institucion_origen',150);$d['materias_origen']=value('materias_origen',1000);
  if (mb_strlen($d['institucion_origen'])<3 || mb_strlen($d['materias_origen'])<3) reply(422,['ok'=>false]);
  validate_pdfs();
 }
 return $d;
}
function validate_pdfs(): void {
 if (!isset($_FILES['documentos'])) return;
 $files=$_FILES['documentos'];
 if (!is_array($files['error']??null) || !is_array($files['name']??null) || !is_array($files['size']??null) || !is_array($files['tmp_name']??null)) reply(422,['ok'=>false]);
 if (count($files['error'])>3) reply(422,['ok'=>false]);
 $finfo=new finfo(FILEINFO_MIME_TYPE);
 foreach($files['error'] as $i=>$error) {
  if ($error===UPLOAD_ERR_NO_FILE) continue;
  $name=$files['name'][$i]??null;$size=$files['size'][$i]??null;$tmp=$files['tmp_name'][$i]??null;
  if (!is_string($name)||!is_int($size)||!is_string($tmp)||$error!==UPLOAD_ERR_OK||$size<=0||$size>5*1024*1024||!is_uploaded_file($tmp)) reply(422,['ok'=>false]);
  if (strtolower(pathinfo($name,PATHINFO_EXTENSION))!=='pdf'||$finfo->file($tmp)!=='application/pdf') reply(422,['ok'=>false]);
  $handle=fopen($tmp,'rb');$signature=$handle?fread($handle,5):'';if ($handle) fclose($handle);
  if ($signature!=='%PDF-') reply(422,['ok'=>false]);
  // TODO: antivirus/sandbox, nombre aleatorio, almacenamiento fuera de webroot,
  // descarga autenticada como attachment, autorización y política de conservación.
  // La extensión, el MIME y la firma no garantizan que un PDF sea inocuo.
 }
}
