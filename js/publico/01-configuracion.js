/*
 * 01 · CONTENIDO Y RECURSOS
 * Editar este archivo para incorporar imágenes, planes, Excel y fechas oficiales.
 * No colocar fechas o requisitos de otras instituciones como si fueran del ISP 67.
 */
window.ISP67 = window.ISP67 || {};
ISP67.config = {
  email: 'institutosuperior67@gmail.com',
  phone: '(0342) 482-7200',
  phoneHref: 'tel:+543424827200',
  address: 'Av. 12 de Octubre 9300 · Yapeyú, Santa Fe',
  // PHP: mantener "borrador" hasta implementar y auditar los controladores del servidor.
  transport: 'borrador',
  endpoints: {
    contacto: 'api/contacto.php',
    inscripcion: 'api/inscripcion.php',
    homologacion: 'api/homologacion.php',
    csrf: 'api/csrf.php'
  },
  galleryDuration: 6000,
  // Cinco moldes. src:null conserva el espacio vacío sin descargar imágenes falsas.
  gallery: [
    { src: null, alt: 'Imagen institucional del Instituto', caption: 'Galería institucional' },
    { src: null, alt: 'Vida estudiantil', caption: 'Nuestra comunidad' },
    { src: null, alt: 'Espacios de formación', caption: 'Aprender en el 67' },
    { src: null, alt: 'Actividades académicas', caption: 'Actividades del Instituto' },
    { src: null, alt: 'Encuentros y proyectos', caption: 'Proyectos y encuentros' }
  ],
  // Galería lateral: imágenes distintas y verticales. Mantener null hasta tenerlas.
  portraitGallery: [
    { src: null, alt: 'La comunidad del Instituto', caption: 'Nuestra comunidad' },
    { src: null, alt: 'Espacios de aprendizaje', caption: 'Nuestros espacios' },
    { src: null, alt: 'Proyectos de estudiantes', caption: 'Proyectos compartidos' },
    { src: null, alt: 'Actividades de formación', caption: 'Aprender juntos' },
    { src: null, alt: 'Encuentros del Instituto', caption: 'Encuentros' }
  ],
  images: { community: null, spaces: null, enrollment: null },
  // Colores por área: azul tinta para salud/prevención/gestión; coral para formación docente.
  categories: {
    terciarios: { name: 'Terciarios', color: '#305d92', ink: '#ffffff', summary: 'Formación técnica vinculada a la salud, el cuidado y la prevención.' },
    profesorados: { name: 'Profesorados', color: '#a4455e', ink: '#ffffff', summary: 'Información sobre propuestas de formación docente.' }
  },
  careers: [
    { id: 'enfermeria', category: 'terciarios', name: 'Enfermería', summary: 'Formación superior vinculada al cuidado de la salud.', image: null, title: null, duration: null, modality: null, planFile: null, years: [], source: 'https://educacion.santafe.gob.ar/sauce-viejo-tendra-por-primera-vez-una-oferta-educativa-de-nivel-superior/' },
    { id: 'higiene', category: 'terciarios', name: 'Higiene y Seguridad en el Trabajo', summary: 'Formación superior vinculada a la prevención y la seguridad en el ámbito laboral.', image: null, title: null, duration: null, modality: null, planFile: null, years: [], source: 'https://www.santafe.gob.ar/noticias/noticia/imprimir/285234/' },
    { id: 'administracion-salud', category: 'terciarios', name: 'Administración de la Salud', summary: 'Formación superior vinculada a la administración en el ámbito de la salud.', image: null, title: null, duration: null, modality: null, planFile: null, years: [], source: 'https://www.santafe.gob.ar/noticias/noticia/imprimir/285234/' }
  ],
  // Fechas reales: {date:'AAAA-MM-DD',title:'...',type:'cursado|inscripcion|examen',detail:'...'}.
  academicEvents: [],
  calendarFile: null,
  // Filas ya revisadas y publicadas desde Excel convertido a JSON en el servidor.
  scheduleRows: [],
  // Filas: {careerId,year,commission,subject,day,start,end,room,teacher}.
  // Documentos por carrera/año/comisión; usar 'todas' cuando cubra todas las comisiones.
  // {careerId,year,commission,label,file:'recursos/cronogramas/...xlsx',updated:'...'}
  scheduleDocuments: [],
  maxPdfBytes: 5 * 1024 * 1024,
  maxPdfCount: 3
};
