# Conectar los formularios con PHP

La versión entregada usa `transport: 'borrador'`. Valida y prepara texto para correo; no envía, no guarda consultas y no adjunta archivos. La matrícula nunca se confirma por preparar una consulta.

## Archivos y contrato

`js/publico/04-formularios.js` contiene los formularios, comentarios PHP junto a cada campo y el transporte. `01-configuracion.js` declara los endpoints. Los ejemplos de `php-ejemplo/` requieren PHP 8.1+, mbstring, fileinfo y sesiones. Son puntos de integración, no un backend terminado: devuelven 501 hasta implementar almacenamiento. No fueron ejecutados: PHP CLI no está instalado en este entorno.

1. Implementar los controladores en `/api` con HTTPS y mismo origen. No habilitar CORS abierto.
2. GET `csrf.php`: responder JSON `{"token":"TOKEN_ALEATORIO"}` y cookie de sesión HttpOnly, Secure en HTTPS, SameSite.
3. POST `contacto.php`, `inscripcion.php` o `homologacion.php`: multipart/form-data. Revalidar todos los campos, CSRF, límites y catálogo de carreras.
4. Persistir con consultas preparadas, transacción e identificador único. Gestionar duplicados/reintentos. Los controles del navegador no sustituyen el servidor.
5. Sólo después de confirmar el registro, responder 2xx `{"ok":true,"reference":"IDENTIFICADOR_REAL"}`. Errores 4xx/5xx: `{"ok":false}`. No devolver trazas, SQL ni datos personales.
6. Cambiar `transport` a `php` y probar éxito real, fallo de red, sesión vencida, duplicados, límites y recepción antes de publicar.

| Campo | Formularios | Regla |
|---|---|---|
| tipo | todos | contacto, inscripcion u homologacion según endpoint |
| nombre | todos | 2–90 caracteres; sin controles ni etiquetas |
| correo | todos | correo válido, hasta 120; sin CR/LF |
| telefono | todos | opcional; 6–22 caracteres permitidos |
| mensaje | todos | 10–2500 caracteres; texto, escapar al mostrar |
| acepta | todos | valor 1; autorización de respuesta, no matrícula |
| sitio_web | todos | vacío; trampa antispam |
| csrf_token | todos | vinculado a sesión y verificado en servidor |
| tema | contacto | ingreso, campus, cursado, examenes, documentacion, otra |
| carrera | ingreso/homologación | ID permitido del catálogo institucional |
| institucion_origen | homologación | 3–150 caracteres |
| materias_origen | homologación | 3–1000 caracteres |
| documentos[] | homologación | opcional; hasta 3 PDF, 5 MB cada uno |

## Documentación y seguridad antes de producción

Limitar petición total y uploads en servidor/proxy. Verificar errores de subida, `is_uploaded_file`, tamaño, MIME real con finfo y firma PDF. Esto no equivale a análisis antimalware. Guardar con nombres aleatorios fuera del directorio público, escanear y servir descargas autorizadas como adjuntos. Definir acceso de Secretaría, retención y eliminación. No incluir documentos en logs. Usar remitente fijo y una biblioteca SMTP; nunca concatenar cabeceras con datos del usuario. Agregar rate limit por IP/recurso, monitoreo sin contenido personal, respaldo y pruebas de autorización.

El campus preservado usa cuentas y almacenamiento de demostración en el navegador. No tiene autenticación segura de servidor ni es apto para expedientes reales. Esta entrega no certifica seguridad del sistema completo.

## Selectores de la versión 5

Los controles de carrera y tema usan disclosures y botones; cada uno actualiza un input oculto con el mismo `name`. PHP sigue recibiendo `carrera` y `tema` en POST. No confiar en el valor oculto: verificar IDs y listas permitidas de nuevo en el servidor.
