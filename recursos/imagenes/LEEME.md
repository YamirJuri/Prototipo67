# Moldes para imágenes

No hay fotos de ejemplo ni imágenes de otras instituciones. Completar `js/publico/01-configuracion.js`.

- Logo: reemplazar el bloque `.logo-mould` de `index.html` por `<img src="recursos/imagenes/logo-oficial.png" alt="Logo del Superior 67">`. Se conserva un molde hasta disponer del archivo oficial.
- Galería: cinco entradas `gallery`, con `src: null`. Copiar `galeria-1.webp` a `galeria-5.webp`, asignar las rutas y escribir un `alt` descriptivo. Sugerido: 1920×720, mismo encuadre para las cinco.
- `images.community`, `images.spaces`, `images.enrollment`: espacios de comunidad, novedades e ingreso. Usar 900×1100 para retratos; optimizar peso y evitar texto incrustado.
- `careers[].image`: una imagen por carrera. Usar sólo material autorizado.

No crear archivos vacíos con extensión de imagen: las rutas null muestran moldes honestos. Los fallos de carga vuelven al molde. No publicar fotos de estudiantes sin autorización correspondiente.

## Galería lateral vertical (versión 5)

`config.portraitGallery` tiene cinco moldes independientes de la galería principal. Colocar `vertical-1.webp` a `vertical-5.webp` y asignar cada ruta a `src`; completar `alt` y `caption`. Recomendado: fotos 3:4, aproximadamente 900×1200 px, optimizadas. El avance desplaza hacia arriba; las cinco líneas laterales muestran el progreso. Tiene pausa y selección manual. No bloquear el gesto vertical nativo de desplazamiento en teléfonos.
