# Superior 67 · Yapeyú

Versión 5 del sitio público, con el campus de demostración preservado en módulos separados. Abrir `index.html` o servir esta carpeta con `python3 -m http.server 8000` y visitar `http://localhost:8000`. No requiere compilación ni instalación de paquetes. Montserrat, Font Awesome y el mapa necesitan conexión; el contenido principal y los formularios en modo borrador funcionan sin servidor PHP.

## Qué incluye

- Cabecera más amplia, marca a la izquierda, tipografía Montserrat, navegación blanca y acceso al campus en una pastilla blanca con texto e icono legibles.
- Inicio con cinco moldes de galería horizontal y otros cinco verticales en el lateral, avance automático cada seis segundos, indicadores animados, pausa, flechas y selección manual. No se muestran números bajo las barras.
- Una sola llamada a inscripción, sin numeración, al final del inicio y en una banda a todo el ancho. Exámenes y materias quedan en el menú de estudiantes/campus.
- Propuestas centradas y grandes; tarjetas rectas con transición gradual. Azul tinta para salud/prevención y coral para formación docente. Otros trámites usan sus propias bandas y los botones dejan de ser todos verdes.
- Fichas de carreras, planes desplegables por Terciarios y Profesorados, tabla por año y moldes para documentos todavía no publicados. Selección de opciones con categorías separadas.
- Ayuda con preguntas y respuestas desde el menú, contacto visible y formulario separado de consultas; sin la antigua franja de ayuda del inicio. Contacto abre su sección; no desplaza al footer.
- Calendario mensual y cronograma filtrable por carrera, año y comisión, con archivos Excel separados y tabla de días/horarios.
- Presentación de consultas de homologación con selección de PDF y validaciones.
- Mapa grande en una fila propia, dirección y Cómo llegar; selección de texto rosa y barra de desplazamiento violeta con progreso de lectura.
- Botón redondo de regreso al inicio, arrastrable y acotado a la pantalla. Mayús + flechas lo mueve; Escape restablece su posición.
- Menús por hover/foco en escritorio y por toque en móvil. Animaciones con alternativa `prefers-reduced-motion`.

## Dónde editar

| Archivo/carpeta | Responsabilidad |
|---|---|
| `index.html` | Cabecera, inicio, footer y contenedores del campus |
| `css/publico67.css` | Diseño público, numerado por componentes y responsive |
| `css/styles.css`, `css/unificado.css` | Base e integración del campus heredado |
| `js/publico/01-configuracion.js` | Datos de contacto, imágenes, carreras, PDFs, fechas, Excel y transporte |
| `02-utilidades.js` | Escape, URLs y validaciones puras |
| `03-paginas.js` | Propuestas, fichas, planes, calendario, cronograma y ayuda |
| `04-formularios.js` | Formularios comentados campo por campo y contrato PHP |
| `05-navegacion.js` | Rutas, foco y menús |
| `06-galeria.js` | Carrusel y reloj de progreso |
| `07-boton-flotante.js` | Arrastre, límites y alternativa de teclado |
| `08-controles.js` | Selectores agrupados, teclado y desplazamiento |
| `09-inicio.js` | Arranque, animaciones y accesibilidad |
| `js/campus/` | Campus de demostración conservado |
| `recursos/` | Instrucciones y moldes de imágenes, planes, calendario y cronograma |
| `php-ejemplo/` | Puntos de integración de servidor, todavía sin persistencia |
| `docs/` | Integración, fuentes y resultados de pruebas |
| `tests/` | 77 comprobaciones automatizadas de validación y recorridos |

## Cargar el contenido institucional

Completar `01-configuracion.js`. Los `null` y las listas vacías son intencionales: el sitio muestra que el contenido está pendiente en lugar de inventar planes, fechas o inscripciones abiertas. Hay cinco posiciones horizontales y otras cinco verticales para imágenes y espacios en inicio, novedades, ingreso y cada carrera. `recursos/cronogramas/plantilla-cronograma.xlsx` es una plantilla de edición, no un cronograma oficial y no se ofrece como descarga institucional al alumno.

Las referencias públicas de terciarios son Enfermería, Higiene y Seguridad en el Trabajo y Administración de la Salud. No prueban que una cohorte esté abierta actualmente ni que todas se dicten en la misma sede. No se recibió una lista oficial de profesorados: la categoría permanece disponible para consulta, sin carreras inventadas. Ver `docs/FUENTES_Y_CONTENIDO.md`.

## Formularios y límites del prototipo

El modo actual es **borrador**. Se valida la consulta y se permite abrir el correo, copiar o descargar su texto. El Instituto no la recibe hasta que la persona la envía. Los PDF no se suben ni se adjuntan automáticamente. Los borradores no se persisten al salir de la sección. No se confirma una matrícula, vacante ni homologación.

Ver `docs/INTEGRACION_PHP.md` para conectar el servidor. Los ejemplos PHP devuelven 501 hasta implementar almacenamiento. No cambiar el modo a `php` sólo por copiar los ejemplos. El campus heredado sigue siendo demostración local; no usar cuentas ni expedientes reales. La validación de interfaz no constituye una auditoría de seguridad ni de capacidad para 9000 usuarios concurrentes.

## Verificación

Desde esta carpeta:

```
node tests/validaciones.test.cjs
node tests/recorridos.test.cjs
node tests/cronograma.test.cjs
```

77 comprobaciones aprobadas. Navegación, formulario, galería, calendario, ayuda y botón flotante revisados también en navegador. Matriz responsive: inicio, inscripción, planes, cronograma y contacto en 320, 390, 768, 1024 y 1440 px. Se corrigió el desborde del menú de estudiantes en 320. Casos y medidas en `docs/PRUEBAS_VERSION_5.md`; pruebas previas en `docs/CASOS_DE_PRUEBA.md`. PHP no se ejecutó porque el entorno no tiene PHP CLI.
