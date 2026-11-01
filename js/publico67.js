/* Capa pública ISP 67: no modifica las materias ni los paneles del campus de muestra. */
const catalog67 = [
  { id: 'enfermeria', name: 'Enfermería', category: 'terciarios', summary: 'Formación superior vinculada al cuidado de la salud.', detail: 'Consultá con el Instituto la sede, la cohorte de ingreso, el plan y la documentación requerida.', source: 'https://educacion.santafe.gob.ar/sauce-viejo-tendra-por-primera-vez-una-oferta-educativa-de-nivel-superior/' },
  { id: 'higiene', name: 'Higiene y Seguridad en el Trabajo', category: 'terciarios', summary: 'Formación superior vinculada a la prevención y la seguridad en el ámbito laboral.', detail: 'Consultá con el Instituto las sedes y las cohortes habilitadas. La comunicación provincial de 2026 también menciona el anexo de Rincón.', source: 'https://www.santafe.gob.ar/noticias/noticia/imprimir/285234/' },
  { id: 'administracion-salud', name: 'Administración de la Salud', category: 'terciarios', summary: 'Formación superior vinculada a la administración en el ámbito de la salud.', detail: 'La apertura de esta propuesta para el Instituto 67 fue comunicada por la Provincia en 2026. Consultá la disponibilidad de ingreso y el plan vigente.', source: 'https://www.santafe.gob.ar/noticias/noticia/imprimir/285234/' }
];
function public67Head(title, description) { return `<div class="public67-page-head"><div><p class="eyebrow67">INSTITUTO SUPERIOR 67 · YAPEYÚ</p><h1>${title}</h1><p>${description}</p></div><button class="text67-link" onclick="showPublicHome()">← Volver al inicio</button></div>`; }
function mountPublic67(html, section = 'careers') {
  hidePublicAreas(); document.getElementById('authView').classList.add('hidden'); document.getElementById('appView').classList.add('hidden'); document.getElementById('publicInfoView').classList.remove('hidden'); document.getElementById('publicInfoContent').innerHTML = html; setPublicActive(section); const heading = document.querySelector('#publicInfoContent h1'); if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); } window.scrollTo(0, 0);
}
function category67Tabs(active) { return `<div class="category67-tabs" aria-label="Tipos de carrera"><button class="${active === 'terciarios' ? 'active' : ''}" aria-pressed="${active === 'terciarios'}" onclick="showCareerCategory('terciarios')">Terciarios</button><button class="${active === 'profesorados' ? 'active' : ''}" aria-pressed="${active === 'profesorados'}" onclick="showCareerCategory('profesorados')">Profesorados</button></div>`; }
function showCareerCategory(category) {
  if (!['terciarios', 'profesorados'].includes(category)) { showPublicSection('careers'); return; }
  const title = category === 'terciarios' ? 'Terciarios' : 'Profesorados';
  let html = public67Head(title, 'Conocé las propuestas y consultá al Instituto la disponibilidad de ingreso para cada ciclo.') + category67Tabs(category);
  if (category === 'profesorados') {
    html += '<div class="public67-empty-prof"><p class="eyebrow67">INFORMACIÓN ACADÉMICA</p><h2>Consultá las propuestas de formación docente.</h2><p>Todavía no hay información de profesorados cargada en este portal. Escribinos para conocer las propuestas disponibles.</p><a class="btn btn-primary" href="mailto:institutosuperior67@gmail.com?subject=Consulta%20sobre%20profesorados">Consultar al Instituto ↗</a></div>';
  } else {
    html += catalog67.map((c, i) => `<article class="public67-category-row"><span class="category67-number">0${i + 1}</span><div><p class="row67-label">TECNICATURA SUPERIOR</p><h2>${c.name}</h2><p>${c.summary}</p></div><button class="text67-link" onclick="showCareer67('${c.id}')">Conocer la carrera ↗</button></article>`).join('');
    html += '<div class="public67-notice"><p>La apertura de inscripciones y las sedes se confirman con el Instituto para cada ciclo.</p></div>';
  }
  mountPublic67(html);
}
function showCareer67(id) { const career = catalog67.find(c => c.id === id); if (!career) return; mountPublic67(public67Head(career.name, 'Tecnicatura superior · Instituto Superior 67') + `<section class="public67-detail"><h2>Sobre la propuesta</h2><p>${career.summary}</p><p>${career.detail}</p><div class="row67-links"><a class="btn btn-primary" href="mailto:institutosuperior67@gmail.com?subject=${encodeURIComponent('Consulta de ingreso · ' + career.name)}">Consultar por esta carrera ↗</a><a class="text67-link" href="${career.source}" target="_blank" rel="noopener">Información publicada ↗</a></div><div class="public67-notice" style="margin-top:35px"><h2>Plan y requisitos de ingreso</h2><p>El plan de estudios de esta carrera todavía no está cargado en el portal. Podés solicitarlo a Secretaría junto con los requisitos de inscripción.</p><button class="text67-link" onclick="showCareerCategory('terciarios')">← Volver a terciarios</button></div></section>`); }
const originalPublicSection67 = showPublicSection;
showPublicSection = function (section) {
  if (section === 'careers') {
    mountPublic67(public67Head('Carreras', 'Elegí el tipo de formación que querés conocer.') + `<article class="public67-category-row"><span class="category67-number">01</span><div><h2>Terciarios</h2><p>Conocé las propuestas de formación técnica superior.</p></div><button class="text67-link" onclick="showCareerCategory('terciarios')">Explorar terciarios ↗</button></article><article class="public67-category-row"><span class="category67-number">02</span><div><h2>Profesorados</h2><p>Consultá la información sobre formación docente.</p></div><button class="text67-link" onclick="showCareerCategory('profesorados')">Explorar profesorados ↗</button></article>`); return;
  }
  if (section === 'plans') {
    mountPublic67(public67Head('Planes de estudio', 'Encontrá la información de tu carrera.') + '<section class="public67-notice"><h2>Consultá el plan de tu carrera</h2><p>Los planes del Instituto 67 todavía no están cargados en este portal. Secretaría puede orientarte sobre materias, duración y régimen de cursado.</p><a class="btn btn-primary" href="mailto:institutosuperior67@gmail.com?subject=Consulta%20de%20plan%20de%20estudios">Solicitar información ↗</a><div style="margin-top:24px"><button class="text67-link" onclick="showCareerCategory(\'terciarios\')">Ver terciarios →</button></div></section>', 'plans'); return;
  }
  if (section === 'norms') {
    mountPublic67(public67Head('Normativas y correlatividades', 'Información para organizar tu recorrido académico.') + '<section class="public67-notice"><h2>Antes de cursar o rendir</h2><p>Consultá con el Instituto las correlatividades y el reglamento vigente de tu carrera. Los documentos oficiales del 67 todavía no están cargados en este portal.</p><a class="btn btn-primary" href="mailto:institutosuperior67@gmail.com?subject=Consulta%20de%20normativas%20y%20correlatividades">Consultar a Secretaría ↗</a></section>', 'norms'); return;
  }
  if (section === 'news') {
    mountPublic67(public67Head('Novedades', 'Avisos y noticias de nuestra comunidad.') + '<div class="public67-notice"><h2>Los próximos avisos, acá.</h2><p>Todavía no hay novedades publicadas en este portal. Para consultar fechas de inscripción y avisos del Instituto, podés escribirnos o visitar nuestras redes.</p><a class="text67-link" href="https://www.instagram.com/institutosuperior67yapeyu/" target="_blank" rel="noopener">Ver Instagram del Instituto ↗</a></div>', 'news'); return;
  }
  if (section === 'contact') {
    showPublicHome(); document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' }); return;
  }
  originalPublicSection67(section);
};
// El buscador público sólo ofrece información del 67, no las carreras de muestra del campus.
searchPortal = function (query) {
  const items = catalog67.map(c => ({ label: c.name, action: () => showCareer67(c.id) }));
  items.push({ label: 'Terciarios', action: () => showCareerCategory('terciarios') }, { label: 'Profesorados', action: () => showCareerCategory('profesorados') }, { label: 'Planes de estudio', action: () => showPublicSection('plans') }, { label: 'Normativas y correlatividades', action: () => showPublicSection('norms') }, { label: 'Inscripción a carreras', action: () => careerEnrollment() }, { label: 'Inscripción a materias', action: () => goStudent('student-enroll') }, { label: 'Exámenes finales y mesas', action: () => goStudent('student-finals') }, { label: 'Horarios', action: () => showSchedules() }, { label: 'Novedades', action: () => showPublicSection('news') }, { label: 'Contacto y mapa', action: () => showPublicSection('contact') });
  const results = items.filter(x => normalizeAcademicName(x.label).includes(normalizeAcademicName(query))); const container = document.getElementById('searchResults'); container.replaceChildren(); results.forEach(x => { const button = document.createElement('button'); button.textContent = x.label + ' ↗'; button.onclick = () => { closeModal(); x.action(); }; container.appendChild(button); }); if (!results.length) container.textContent = 'No encontramos resultados. Probá con otra palabra.';
};
// Inicio de ingreso: las propuestas reales no se mezclan con la matrícula simulada del campus.
careerEnrollment = function () {
  openDialog('<h2>Inscripción a carreras</h2><p>Para comenzar, consultá la apertura de inscripciones y los requisitos de tu carrera.</p><div class="row67-links"><a class="btn btn-primary" href="mailto:institutosuperior67@gmail.com?subject=Consulta%20de%20inscripci%C3%B3n%20a%20carreras">Consultar requisitos ↗</a><button class="text67-link" onclick="closeModal();showAuth(\'register\')">Crear cuenta de estudiante →</button></div><p class="muted" style="margin-top:24px">La cuenta te permite solicitar acceso al portal. La inscripción a una carrera debe ser confirmada por el Instituto.</p>');
};
showHelp = function () { openDialog('<h2>¿En qué te ayudamos?</h2><details open><summary>Quiero empezar una carrera</summary><p>Consultá las propuestas en Terciarios o Profesorados. Escribí al Instituto para conocer las inscripciones y la documentación requerida.</p></details><details><summary>Ya soy estudiante</summary><p>Entrá al campus para encontrar materias, horarios, mesas e historial académico. Las cuentas actuales corresponden a una demostración.</p></details><details><summary>No puedo ingresar</summary><p>Usá la opción “Recuperar acceso” o consultá a Secretaría. En este prototipo no se envían correos de recuperación.</p></details><p style="margin-top:20px"><a class="text67-link" href="mailto:institutosuperior67@gmail.com">Escribir al Instituto ↗</a></p>'); };
// Carrusel sin fotografías: tres espacios listos para incorporar las imágenes.
const hero67 = document.getElementById('inicio');
const hero67Track = document.getElementById('hero67Track');
const hero67Slides = [...hero67Track.querySelectorAll('.hero67-slide')];
const hero67Dots = [...document.querySelectorAll('.hero67-pages button')];
const hero67Motion = window.matchMedia('(prefers-reduced-motion: reduce)');
let hero67Index = 0, hero67Timer = null, hero67Paused = hero67Motion.matches, hero67Hovered = false, hero67Focused = false;
function paintHero67() { hero67Track.style.transform = `translateX(-${hero67Index * 100}%)`; hero67Slides.forEach((slide, index) => { const active = index === hero67Index; slide.inert = !active; slide.setAttribute('aria-hidden', String(!active)); }); hero67Dots.forEach((dot, index) => { dot.classList.toggle('is-active', index === hero67Index); dot.setAttribute('aria-pressed', String(index === hero67Index)); }); }
function stopHero67() { if (hero67Timer !== null) { clearInterval(hero67Timer); hero67Timer = null; } }
function startHero67() { stopHero67(); if (!hero67Paused && !hero67Hovered && !hero67Focused && !document.hidden && !document.getElementById('publicSite').classList.contains('hidden')) hero67Timer = setInterval(() => { hero67Index = (hero67Index + 1) % hero67Slides.length; paintHero67(); }, 6000); }
function selectHero67(index) { hero67Index = ((index % hero67Slides.length) + hero67Slides.length) % hero67Slides.length; paintHero67(); startHero67(); }
function moveHero67(offset) { selectHero67(hero67Index + offset); }
function paintPause67() { const button = document.getElementById('hero67Pause'); button.textContent = hero67Paused ? '▶' : 'Ⅱ'; button.setAttribute('aria-label', hero67Paused ? 'Reanudar carrusel' : 'Pausar carrusel'); button.setAttribute('aria-pressed', String(hero67Paused)); }
function toggleHero67() { hero67Paused = !hero67Paused; paintPause67(); startHero67(); }
hero67.addEventListener('mouseenter', () => { hero67Hovered = true; stopHero67(); }); hero67.addEventListener('mouseleave', () => { hero67Hovered = false; startHero67(); }); hero67.addEventListener('focusin', () => { hero67Focused = true; stopHero67(); }); hero67.addEventListener('focusout', event => { if (!hero67.contains(event.relatedTarget)) { hero67Focused = false; startHero67(); } }); document.addEventListener('visibilitychange', startHero67);
hero67Motion.addEventListener('change', event => { hero67Paused = event.matches; paintPause67(); startHero67(); });
new MutationObserver(startHero67).observe(document.getElementById('publicSite'), { attributes: true, attributeFilter: ['class'] });
let hero67Touch = null; hero67.addEventListener('touchstart', e => { hero67Touch = e.changedTouches[0].clientX; stopHero67(); }, { passive: true }); hero67.addEventListener('touchend', e => { if (hero67Touch !== null) { const dx = e.changedTouches[0].clientX - hero67Touch; if (Math.abs(dx) > 55) moveHero67(dx < 0 ? 1 : -1); hero67Touch = null; } startHero67(); }, { passive: true });
paintHero67(); paintPause67(); startHero67();
