<?php
/** GET /api/csrf.php. Servir en el mismo origen, con HTTPS. */
require __DIR__.'/_validaciones.php';
if (($_SERVER['REQUEST_METHOD']??'')!=='GET') reply(405,['ok'=>false]);
$_SESSION['csrf']??=bin2hex(random_bytes(32));
reply(200,['token'=>$_SESSION['csrf']]);
