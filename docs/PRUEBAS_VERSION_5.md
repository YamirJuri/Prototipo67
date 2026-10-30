# Casos de prueba · versión 5

Fecha local: 29/10/2026. Alcance: cambios públicos de esta versión. Se simularon recorridos de ingresantes y estudiantes; no se realizaron entrevistas de usabilidad, auditoría completa de accesibilidad ni pruebas de carga. Los formularios siguen en modo borrador.

## Pruebas automatizadas

| Archivo | Comprobaciones aprobadas |
|---|---:|
| `tests/validaciones.test.cjs` | 37 |
| `tests/recorridos.test.cjs` | 24 |
| `tests/cronograma.test.cjs` | 16 |
| **Total** | **77** |

También se verificaron sintaxis de los 11 módulos JS, IDs únicos y referencias CSS/JS locales. Los filtros se probaron con un fixture separado y explícitamente ficticio: tres años, dos comisiones y otra carrera. No se cargó esa información en la configuración del sitio real.

## Casos funcionales en navegador

| CP | Situación / acciones | Evidencia y resultado |
|---|---|---|
| V5-01 | Abrir inicio y recorrer orientación → novedades → ingreso | Sin franja de ayuda ni mini títulos de sección. Ayuda permanece disponible desde menú, orientación y footer. |
| V5-02 | Avance manual y automático de galería vertical | Cambio `translateY(-100%)` → `translateY(-400%)`; cinco posiciones, imágenes vacías distintas, controles al costado. Pausa cambia a Reanudar. |
| V5-03 | Revisar indicadores | Barras sin texto numérico; relleno, punto de avance, variación de tamaño y pulso. Respeta movimiento reducido por CSS/JS. |
| V5-04 | Inscripción → selector → Terciarios → Higiene y Seguridad → preparar consulta ficticia | Grupo separado de Profesorados. El borrador contiene la carrera correcta; no se envió correo. El input mantiene `name=carrera` para PHP. |
| V5-05 | Planes de estudio → abrir categorías | Secciones desplegables separadas. Profesorados informa oferta pendiente; no inventa carreras. |
| V5-06 | Revisar tarjeta con animación de aparición aplicada | Estilo calculado conserva `background-color 0.95s` y `color 0.95s`. Se eliminó el conflicto con la transición reveal. |
| V5-07 | Cronograma → Enfermería → primer año con teclado → comisión B | Sólo materia B, martes 19:00–21:00 en fixture. El archivo común del primer año sigue disponible. |
| V5-08 | Cambios de carrera/año, IDs desconocidos y archivo ausente | Verificados por 16 comprobaciones del cronograma. Sin mezcla de carreras ni links null; filtros inválidos se restablecen. |
| V5-09 | Menú de estudiantes abierto en teléfono de 320 px | Detectado desborde de ~5 px, corregido. Repetición: menú izquierda 0, derecha 320; body y scrollWidth 320. |
| V5-10 | Tabla de horarios con contenido en móvil | Tabla de 760 px dentro de contenedor de 274/329 px con overflow-x auto; no ensancha el documento. |
| V5-11 | Mapa en los cinco tamaños | Fila propia con dirección y Cómo llegar. Altura 315–330 px y ancho hasta ~776 px en el viewport de 1440. |
| V5-12 | Selector con teclado | Flecha abajo abre y enfoca opciones; Flecha abajo + Enter selecciona primer año y devuelve foco al control. Escape implementado y revisado en código. |

## Matriz responsive

Se comprobaron **25 combinaciones**: cinco páginas × cinco anchos de iframe. Las medidas son del viewport de prueba; el espacio útil puede descontar la barra de desplazamiento. Además se abrieron los selectores en cada ancho y los menús móviles en 320, 390 y 768 px.

| Ancho probado | Ancho útil del body | Inicio | Inscripción | Planes | Cronograma | Contacto |
|---|---:|---|---|---|---|---|
| 320 | 320 | OK | OK | OK | OK | OK |
| 390 | 375 | OK | OK | OK | OK | OK |
| 768 | 753 | OK | OK | OK | OK | OK |
| 1024 | 1009 | OK | OK | OK | OK | OK |
| 1440 | 1425 | OK | OK | OK | OK | OK |

En todas estas mediciones el scrollWidth del body coincide con su ancho útil. Después se corrigió el caso adicional de menú abierto en 320 y se repitió específicamente. No se afirma compatibilidad exhaustiva con todos los dispositivos, navegadores, niveles de zoom o lectores de pantalla.

### Horarios con tabla de prueba

| Viewport | Body / scrollWidth | Contenedor de tabla | Contenido de tabla | Resultado |
|---|---:|---:|---:|---|
| 320 | 320 / 320 | 274 | 760 | Scroll interno |
| 390 | 375 / 375 | 329 | 760 | Scroll interno |
| 768 | 753 / 753 | 693 | 760 | Scroll interno |
| 1024 | 1009 / 1009 | 949 | 949 | Sin scroll extra |
| 1440 | 1425 / 1425 | 1160 | 1160 | Sin scroll extra |

## Límites y datos pendientes

Los horarios oficiales, documentos y fotos se mantienen pendientes. La página muestra estados vacíos explicativos. Las pruebas de tabla usaron una página de QA aislada que no forma parte de la entrega. PHP, envío, almacenamiento y autenticación del campus no se modificaron ni se certificaron en esta iteración. Ver la guía de integración para habilitar envíos reales.
