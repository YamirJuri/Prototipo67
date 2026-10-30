# Verificación de la versión 4

Fecha: 30/10/2026. Son simulaciones de tareas, no pruebas con personas reales ni un estudio de usabilidad. El alcance es el sitio público previo al campus. Se usaron datos ficticios y no se enviaron correos ni solicitudes al Instituto.

## Resultados automatizados

- `validaciones.test.cjs`: 37 comprobaciones aprobadas; nombre, correo, teléfono, longitudes, consentimiento, campo trampa, IDs, escape HTML, URLs permitidas y cantidad/tamaño/tipo/firma de PDF.
- `recorridos.test.cjs`: 24 comprobaciones aprobadas; generación de páginas, carrera/tema preseleccionados, recursos pendientes honestos, calendario bisiesto, materias escapadas, inscripción única al final y controladores PHP sin éxito ficticio.
- 10 módulos JavaScript: sintaxis válida con `node --check`.
- HTML inicial: 67 IDs únicos; referencias locales CSS/JS presentes.
- Plantilla Excel: exportada, inspeccionada y renderizada; no contiene horarios ficticios.

## Recorridos comprobados en navegador

| Persona/situación | Acción y resultado esperado | Resultado |
|---|---|---|
| Madre que acompaña a una ingresante | Propuestas → Terciarios → Enfermería → Inscripción; conserva carrera e informa que consultar no confirma vacante | Aprobado |
| Joven que no sabe cómo empezar | Ayuda → primera pregunta; respuesta comprensible y botón hacia carreras | Aprobado; acordeón abre con animación |
| Persona que necesita consultar | CONTACTO en cabecera abre formulario en su propia sección | Aprobado; sin salto al footer |
| Consulta incompleta | Preparar formulario vacío muestra errores junto a campos y resumen con foco | Aprobado |
| Edición del borrador | Modificar el mensaje elimina el borrador previo y solicita prepararlo nuevamente | Aprobado; evita enviar texto desactualizado |
| Consulta válida ficticia | Nombre/correo/tema/mensaje/consentimiento genera borrador y aclara que no fue recibido | Aprobado; no se pulsó enviar correo |
| Estudiante desde teléfono | Menú → Estudiantes → Presentar homologaciones | Aprobado; submenú táctil y formulario accesibles |
| Persona con materias aprobadas | Homologaciones explica evaluación, documentación opcional, límites PDF y contacto | Revisado en móvil; validadores PDF probados automáticamente |
| Estudiante que organiza sus fechas | Calendario cambia octubre → noviembre de 2026 y distingue fechas pendientes | Aprobado; además probado febrero bisiesto por código |
| Estudiante que busca el Excel | Cronograma muestra documento pendiente y contacto, sin descarga oficial falsa | Aprobado |
| Visitante de la portada | Galería avanza sola, tiene cinco moldes y barras sin texto numérico | Aprobado; se observó cambio y progreso |
| Visitante que pausa la galería | Pausa congela progreso; selección quinta → siguiente vuelve a primera | Aprobado |
| Persona que mueve el botón | Arrastre conserva scroll, limita botón al borde de pantalla y permite clic posterior para subir | Aprobado |
| Persona que usa teclado | Mayús + flecha desplaza botón; salto al contenido conserva sección y enfoca main | Aprobado |
| Vista móvil de 390 px | Categoría y homologaciones sin desbordamiento horizontal | Aprobado; 375 px útiles = scrollWidth 375 |

## Revisión de implementación y límites

- Hover de escritorio implementado con pointerenter y salida/foco; alternativa por teclado/clic y táctil comprobadas. No se automatizó un movimiento de mouse sin clic aislado.
- Preferencia de movimiento reducido: revisión de CSS/JS; no se cambió la preferencia del navegador durante esta prueba. Desactiva animaciones y el avance automático inicial, permitiendo control manual.
- Se corrigieron el enlace de salto al contenido y la recuperación del foco en las flechas del calendario. El foco del calendario se comprobó nuevamente en navegador después de la corrección. No se realizó una auditoría completa de lectores de pantalla.
- No se ejecutó envío SMTP, persistencia PHP, antivirus, autorización de documentos ni pruebas de carga. El entorno no dispone de PHP CLI; los ejemplos PHP requieren ejecución e integración en servidor.
- No se probó una carga real mediante el selector de archivos del navegador; los límites, metadatos y firma PDF se probaron con archivos simulados en las funciones correspondientes.
- El campus preservado utiliza demostración local. No se certifica autenticación ni seguridad del sistema completo.
- No se contó con fechas, planes ni lista oficial de profesorados. Los espacios pendientes son deliberados y deben completarse con información institucional aprobada.

## Antes de habilitar envíos reales

Implementar el contrato de `INTEGRACION_PHP.md` y probar sesión/CSRF, peticiones adulteradas, arrays donde se esperan textos, límites de carga, archivos maliciosos, reintentos/duplicados, caídas de red y autorización. Confirmar disponibilidad de contacto, documentos y política de datos. Realizar pruebas con personas reales y de capacidad en el alojamiento elegido antes de atender usuarios reales.
