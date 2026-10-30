# Cronograma de cursado · datos por carrera, año y comisión

`plantilla-cronograma.xlsx` es una plantilla vacía de edición, no un horario oficial. No se ofrece al alumno como si fuera un cronograma aprobado.

## Publicar archivos

Guardar los Excel aprobados aquí y completar `scheduleDocuments` en `js/publico/01-configuracion.js`. Un registro por archivo, carrera, año y comisión:

```js
{
  careerId: 'enfermeria',
  year: 1,
  commission: 'todas',
  label: 'Cronograma del primer año',
  file: 'recursos/cronogramas/enfermeria-1.xlsx',
  updated: 'FECHA DE REVISIÓN INSTITUCIONAL'
}
```

Este ejemplo define la estructura; no afirma que ese año, archivo o comisión existan. Usar los años reales de la carrera. `commission: 'todas'` indica que el archivo cubre todas las comisiones de ese año. Para archivos individuales, usar el código real de comisión (por ejemplo A o B). Los filtros derivan las opciones de las filas/documentos cargados; admiten cualquier cantidad de años y comisiones. Al cambiar carrera se restablecen año y comisión; al cambiar año se restablece la comisión.

## Mostrar materias, días y horas en pantalla

Completar `scheduleRows` con filas revisadas:

```js
{
  careerId: 'ID_DEL_CATALOGO',
  year: 1,
  commission: 'CODIGO_REAL',
  subject: 'NOMBRE_OFICIAL',
  day: 'DIA_REAL',
  start: 'HH:MM',
  end: 'HH:MM',
  room: 'AULA_REAL',
  teacher: 'DOCENTE'
}
```

La interfaz estática no lee el contenido de un Excel automáticamente: el servidor debe convertirlo a esta estructura o el equipo puede cargar las filas manualmente. Si sólo se cargan documentos, se ofrecen los archivos filtrados sin inventar materias. Si faltan documentos y filas, se informa que el cronograma aún no está publicado.

`tests/cronograma-fixture.json` contiene datos ficticios para probar los filtros. No cargarlos en la configuración institucional ni publicarlos como horarios reales.
