<?php
/** POST /api/contacto.php · Ver docs/INTEGRACION_PHP.md. */
require __DIR__.'/_validaciones.php';
$datos=validate_request('contacto');
// TODO: persistir con consultas parametrizadas y transacción; registrar un identificador.
// En homologación, guardar documentos sólo después de los controles del servidor.
// TODO: notificar con biblioteca SMTP, remitente fijo y sin interpolar cabeceras.
// Responder {"ok":true,"reference":"ID_REAL"} ÚNICAMENTE tras confirmar la persistencia.
reply(501,['ok'=>false,'message'=>'La integración de almacenamiento todavía no está implementada.']);
