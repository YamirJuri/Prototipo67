/*
 * 03 · PÁGINAS PÚBLICAS
 * Cada función devuelve contenido. El router agrega título, navegación y foco.
 * Los planes, imágenes y fechas se cargan en 01-configuracion.js.
 */
(function (app) {
  'use strict';
  const e = app.escape;
  app.pages = {};
  app.action = (label, route, style = 'link') => `<button type="button" class="${style === 'primary' ? 'action-button' : 'action-link'}" data-route="${e(route)}">${e(label)} <span aria-hidden="true">↗</span></button>`;
  app.card = career => `<button class="proposal-card" data-route="carrera/${e(career.id)}/info"><small>TECNICATURA SUPERIOR</small><h2>${e(career.name)}</h2><span>Conocer la carrera e ingresar →</span></button>`;
  app.pages.careers = category => {
    const selected = app.config.categories[category];
    if (!selected) return {
      title: 'Propuesta académica', subtitle: 'Elegí qué tipo de formación querés conocer.', tone: 'terciarios',
      actions: [['Volver al inicio', 'inicio'], ['Quiero inscribirme', 'inscripcion']],
      content: `<div class="proposal-grid categories">${Object.entries(app.config.categories).map(([id, c]) => `<button class="proposal-card ${id}" data-route="${id}"><small>${id === 'terciarios' ? 'FORMACIÓN TÉCNICA' : 'FORMACIÓN DOCENTE'}</small><h2>${c.name}</h2><p>${c.summary}</p><span>Explorar propuestas →</span></button>`).join('')}</div>`
    };
    const careers = app.config.careers.filter(c => c.category === category);
    return {
      title: selected.name, subtitle: selected.summary, tone: category,
      actions: [['Elegir otra propuesta', 'carreras'], ['Quiero inscribirme', 'inscripcion']],
      content: `<nav class="category-tabs" aria-label="Tipo de propuesta">${Object.entries(app.config.categories).map(([id, c]) => `<button data-route="${id}" aria-current="${id === category ? 'page' : 'false'}">${c.name}</button>`).join('')}</nav><div class="section-ribbon">${selected.name}</div>${careers.length ? `<div class="proposal-grid">${careers.map(app.card).join('')}</div><p class="section-note">Antes de iniciar el ingreso, consultá las sedes, las cohortes y las inscripciones disponibles.</p>` : `<section class="empty-state"><h2>Consultá la oferta de profesorados.</h2><p>Todavía no hay propuestas de esta categoría publicadas en el portal. Si te interesa la formación docente, contanos qué estás buscando.</p>${app.action('Consultar propuestas', 'contacto/ingreso', 'primary')}</section>`}`
    };
  };
  app.pages.career = (id, tab = 'info') => {
    const career = app.config.careers.find(c => c.id === id);
    if (!career) return app.pages.notFound();
    if (!['info', 'plan'].includes(tab)) tab = 'info';
    const tabs = `<nav class="career-tabs" aria-label="Información de la carrera">${[['info', 'La carrera'], ['plan', 'Plan de estudios']].map(([key, label]) => `<button data-route="carrera/${career.id}/${key}" aria-current="${key === tab ? 'page' : 'false'}">${label}</button>`).join('')}</nav>`;
    const facts = [['Título', career.title], ['Duración', career.duration], ['Modalidad', career.modality]].filter(([, value]) => value);
    const planFile = app.safeUrl(career.planFile);
    const plan = career.years.length ? career.years.map(year => `<section class="plan-year"><h2>${e(year.title)}</h2><div class="table-scroll"><table><caption class="visually-hidden">Materias de ${e(year.title)}</caption><thead><tr><th>Espacio curricular</th><th>Carga horaria</th><th>Régimen</th></tr></thead><tbody>${year.subjects.map(s => `<tr><th scope="row">${e(s.name)}</th><td>${e(s.hours)}</td><td>${e(s.regime)}</td></tr>`).join('')}</tbody></table></div></section>`).join('') : `<section class="empty-state"><h2>El plan de estudios está pendiente de publicación.</h2><p>Podés pedir a Secretaría las materias por año, la carga horaria y las correlatividades. No hace falta que adivines cómo seguir: escribinos y te orientamos.</p>${app.action('Solicitar el plan', 'contacto/documentacion', 'primary')}</section><div class="document-mould"><span aria-hidden="true">▤</span><div><h3>Plan de estudios · ${e(career.name)}</h3><p>Espacio reservado para el documento oficial en PDF.</p></div></div>`;
    return {
      title: career.name, subtitle: 'Conocé la propuesta y encontrá cómo empezar.', tone: career.category,
      actions: [['Elegir otra carrera', career.category], ['Inscripción', `inscripcion/${career.id}`]],
      content: `${tabs}${tab === 'plan' ? `${planFile ? `<a class="action-button" href="${e(planFile)}" target="_blank" rel="noopener">Abrir plan oficial ↗</a>` : ''}${plan}` : `<div class="career-intro"><section><p class="eyebrow">FORMACIÓN SUPERIOR</p><h2>Sobre la carrera</h2><p>${e(career.summary)}</p><p>La sede, el ciclo de ingreso y los requisitos se confirman con el Instituto para cada cohorte.</p>${facts.length ? `<dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${e(v)}</dd></div>`).join('')}</dl>` : ''}<div class="actions">${app.action('Consultar inscripción', `inscripcion/${career.id}`, 'primary')}${app.action('Ver el plan', `carrera/${career.id}/plan`)}</div><a class="source-link" href="${e(career.source)}" target="_blank" rel="noopener">Información pública de referencia ↗</a></section><aside>${career.image && app.safeUrl(career.image) ? `<figure class="media-slot portrait"><img src="${e(app.safeUrl(career.image))}" alt="${e(career.name)}"></figure>` : `<div class="media-slot portrait"><span aria-hidden="true">▧</span><p>${e(career.name)}<small>Espacio para imagen de la carrera</small></p></div>`}</aside></div>`}${app.contactBlock()}`
    };
  };
  app.pages.plans = () => ({
    title: 'Planes de estudio', subtitle: 'Primero elegí el tipo de formación. Después, abrí el plan de la carrera que te interesa.', tone: 'terciarios',
    actions: [['Ver propuestas', 'carreras'], ['Consultar a Secretaría', 'contacto/documentacion']],
    content: `<div class="academic-groups">${Object.entries(app.config.categories).map(([id,category])=>{const careers=app.config.careers.filter(c=>c.category===id);return `<details class="academic-group ${id}" ${id==='terciarios'?'open':''}><summary><span>${e(category.name)}</span><span>${careers.length?careers.length+' planes':'Información pendiente'} <b aria-hidden="true">+</b></span></summary><div class="academic-group-body">${careers.length?`<div class="proposal-grid">${careers.map(c=>`<button class="proposal-card" data-route="carrera/${e(c.id)}/plan"><h2>${e(c.name)}</h2><span>Ver materias y plan de estudios →</span></button>`).join('')}</div>`:`<p>Los planes de profesorados todavía no están publicados.</p>${app.action('Consultar propuestas','contacto/ingreso')}`}</div></details>`}).join('')}</div>`
  });
  app.pages.norms = () => ({
    title: 'Normativas y correlatividades', subtitle: 'Información para decidir qué podés cursar y rendir.', tone: 'terciarios',
    actions: [['Ver planes de estudio', 'planes'], ['Consultar mi situación', 'contacto/documentacion']],
    content: `<section class="reading-section"><h2>Antes de cursar o rendir</h2><p>Las correlatividades y el reglamento dependen de tu carrera y del plan que estés cursando. Los documentos oficiales del 67 todavía no están publicados en este portal.</p><p>Contanos qué carrera cursás y qué materia querés rendir o cursar. Con esa información Secretaría puede orientarte.</p>${app.action('Consultar a Secretaría', 'contacto/documentacion', 'primary')}</section><div class="resource-grid"><div class="document-mould"><span>▤</span><div><h3>Reglamento académico</h3><p>Documento oficial pendiente de carga.</p></div></div><div class="document-mould"><span>▤</span><div><h3>Correlatividades por carrera</h3><p>Espacio para los documentos oficiales.</p></div></div></div>${app.contactBlock()}`
  });
  app.pages.news = () => ({
    title: 'Novedades', subtitle: 'Avisos y noticias de nuestra comunidad.', tone: 'terciarios',
    actions: [['Volver al inicio', 'inicio'], ['Hacer una consulta', 'contacto']],
    content: `<section class="empty-state"><h2>Los próximos avisos, acá.</h2><p>Todavía no hay novedades publicadas. Las fechas y comunicaciones oficiales se incorporarán a este espacio.</p>${app.action('Consultar al Instituto', 'contacto', 'primary')}</section><div class="resource-grid">${app.imageSlot('community', 'Actividad de nuestra comunidad')}${app.imageSlot('spaces', 'Espacios del Instituto')}</div>`
  });
  app.calendarMonth = new Date(new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Argentina/Buenos_Aires', dateStyle: 'short' }).format(new Date()).slice(0, 7) + '-01T12:00:00');
  app.pages.calendar = () => {
    const date = app.calendarMonth;
    const year = date.getFullYear(), month = date.getMonth();
    const offset = (new Date(year, month, 1).getDay() + 6) % 7;
    const count = new Date(year, month + 1, 0).getDate();
    const prefix = `${year}-${String(month + 1).padStart(2, '0')}`;
    const events = app.config.academicEvents.filter(ev => ev.date.startsWith(prefix));
    const calendarFile = app.safeUrl(app.config.calendarFile);
    const cells = Array.from({ length: offset }, () => '<div class="calendar-empty" aria-hidden="true"></div>').join('') + Array.from({ length: count }, (_, i) => {
      const day = i + 1, key = `${prefix}-${String(day).padStart(2, '0')}`, matching = events.filter(ev => ev.date === key);
      return `<div class="calendar-day ${matching.length ? 'with-events' : ''}"><time datetime="${key}">${day}</time>${matching.map(ev => `<span>${e(ev.title)}</span>`).join('')}</div>`;
    }).join('');
    return {
      title: 'Calendario académico', subtitle: 'Una vista para organizar cursado, inscripciones y exámenes.', tone: 'calendario',
      actions: [['Cronograma de cursado', 'cronograma'], ['Consultar una fecha', 'contacto/cursado']],
      content: `<div class="calendar-toolbar"><button class="icon-button" data-month="-1" aria-label="Mes anterior">←</button><h2>${date.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' })}</h2><button class="icon-button" data-month="1" aria-label="Mes siguiente">→</button></div><div class="calendar-board" aria-label="Calendario de ${e(date.toLocaleDateString('es-AR', { month: 'long', year: 'numeric' }))}">${['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'].map(d => `<div class="calendar-weekday">${d}</div>`).join('')}${cells}</div><section class="calendar-agenda"><h2>Fechas del mes</h2>${events.length ? events.map(ev => `<article><time datetime="${e(ev.date)}">${e(ev.date)}</time><h3>${e(ev.title)}</h3><p>${e(ev.detail || '')}</p></article>`).join('') : '<p>Todavía no hay fechas oficiales cargadas para este mes. La grilla muestra los días, pero no implica que haya inscripciones o mesas habilitadas.</p>'}</section>${calendarFile ? `<a class="action-button" href="${e(calendarFile)}" target="_blank" rel="noopener">Abrir calendario oficial ↗</a>` : '<div class="document-mould"><span>▤</span><div><h3>Calendario oficial</h3><p>Espacio reservado para el PDF del ciclo lectivo.</p></div></div>'}${app.contactBlock()}`
    };
  };
  app.pages.schedule = (careerId='',year='todos',commission='todas') => {
    const selection=app.scheduleSelection(careerId,year,commission);
    const {career,rows,documents,years,commissions}=selection;
    return {
      title:'Cronograma de cursado',subtitle:'Elegí tu carrera, el año y la comisión para encontrar tus días y horarios.',tone:'calendario',
      actions:[['Calendario académico','calendario'],['Consultar horarios','contacto/cursado']],
      content:`<section class="schedule-section"><div class="schedule-filters" aria-label="Filtrar horarios de cursado">
        ${app.choice({name:'scheduleCareer',label:'Carrera',value:career?.id||'',placeholder:'Elegí tu carrera',filter:true,groups:Object.entries(app.config.categories).map(([id,c])=>({label:c.name,options:app.config.careers.filter(x=>x.category===id).map(x=>({value:x.id,label:x.name}))}))})}
        ${app.choice({name:'scheduleYear',label:'Año de cursado',value:selection.year,filter:true,options:[{value:'todos',label:'Todos los años'},...years.map(y=>({value:y,label:y+'° año'}))]})}
        ${app.choice({name:'scheduleCommission',label:'Comisión',value:selection.commission,filter:true,options:[{value:'todas',label:'Todas las comisiones'},...commissions.map(c=>({value:c,label:'Comisión '+c}))]})}
      </div><div class="schedule-results" aria-live="polite"><h2>${career?e(career.name):'¿Qué carrera estás cursando?'}</h2>
      ${!career?'<p>Seleccioná una carrera para ver los cronogramas por año y comisión. Los documentos se incorporan cuando el Instituto los publica.</p>':`<p class="schedule-context">${selection.year==='todos'?'Todos los años':e(selection.year)+'° año'} · ${selection.commission==='todas'?'Todas las comisiones':'Comisión '+e(selection.commission)}</p>${documents.length?`<div class="schedule-documents">${documents.map(d=>{const url=app.safeUrl(d.file);return `<article class="schedule-document"><div><h3>${e(d.label||'Cronograma · '+d.year+'° año')}</h3><p>${e(d.year)}° año · ${d.commission==='todas'?'Todas las comisiones':'Comisión '+e(d.commission)}</p>${d.updated?`<small>Actualizado: ${e(d.updated)}</small>`:''}</div>${url?`<a class="action-button" href="${e(url)}" target="_blank" rel="noopener">Abrir archivo ↗</a>`:'<span class="resource-pending">Archivo por publicar</span>'}</article>`}).join('')}</div>`:''}${rows.length?`<div class="table-scroll" tabindex="0" role="region" aria-label="Días y horarios de cursado"><table class="schedule-table"><caption>Días y horarios según los filtros elegidos</caption><thead><tr>${['Año','Comisión','Materia','Día','Horario','Aula','Docente'].map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${[r.year+'°',r.commission,r.subject,r.day,(r.start||'—')+' – '+(r.end||'—'),r.room||'Por informar',r.teacher||'Por informar'].map(v=>`<td>${e(v)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`:''}${!rows.length&&!documents.length?`<div class="document-mould"><span aria-hidden="true">▤</span><div><h3>El cronograma de esta carrera todavía no está publicado.</h3><p>Acá vas a encontrar los archivos por año y comisión. Mientras tanto, podés consultar tus horarios con el Instituto.</p></div></div>`:''}`}</div></section>${app.contactBlock()}`
    };
  };
  app.helpQuestions = [
    ['Quiero estudiar en el 67. ¿Por dónde empiezo?', 'Mirá las propuestas y elegí la que te interese. En la ficha de cada carrera vas a encontrar la información disponible y el acceso para consultar el ingreso. Si todavía no sabés qué elegir, contanos qué estás buscando.', 'Conocer las carreras', 'carreras'],
    ['¿Crear una cuenta significa que ya estoy inscripto?', 'No todavía. La cuenta y la inscripción son pasos distintos. El Instituto tiene que confirmar tu ingreso a la carrera. Si ya completaste algo y no sabés cómo seguir, consultanos antes de volver a hacerlo.', 'Consultar mi ingreso', 'contacto/ingreso'],
    ['No puedo entrar al campus. ¿Qué puedo hacer?', 'Revisá el usuario o correo y fijate que no tenga espacios de más. Si no recordás la contraseña, usá Recuperar acceso. Si el problema sigue, contanos qué mensaje aparece. No nos mandes tu contraseña.', 'Pedir ayuda con el acceso', 'contacto/campus'],
    ['Ya aprobé materias en otro lugar. ¿Puedo pedir una homologación?', 'Podés iniciar una consulta indicando dónde estudiaste y qué materias aprobaste. Secretaría te orientará sobre la documentación y el procedimiento del 67. La equivalencia necesita una evaluación: no se aprueba automáticamente.', 'Presentar homologaciones', 'homologaciones'],
    ['¿Dónde veo cuándo curso o cuándo se abren las inscripciones?', 'El calendario académico reúne las fechas del año. El cronograma de cursado reúne los días y horarios de las materias. Son dos cosas distintas y las tenés juntas en el menú Estudiantes.', 'Ver calendario académico', 'calendario'],
    ['Quiero anotarme a materias o a un final.', 'La gestión se realiza desde tu cuenta de estudiante en el campus. Antes de inscribirte revisá las fechas, tu condición académica y las correlatividades. Si no aparece una materia o una mesa, consultá con Secretaría.', 'Consultar al Instituto', 'contacto/examenes']
  ];
  app.pages.help = () => ({
    title: 'Ayuda y consultas', subtitle: 'Si algo te frenó, empecemos por acá.', tone: 'ayuda',
    actions: [['Volver al inicio', 'inicio'], ['Contactar al Instituto', 'contacto']],
    content: `<div class="faq-intro"><p class="eyebrow">ENCONTRÁ TU CONSULTA</p><p>Elegí la pregunta que más se acerque a lo que necesitás.</p></div><div class="faq-list">${app.helpQuestions.map(([q, a, label, dest]) => `<details class="faq-item"><summary><span>${q}</span><span class="faq-sign" aria-hidden="true">+</span></summary><div class="faq-answer"><p>${a}</p>${app.action(label, dest)}</div></details>`).join('')}</div><section class="help-contact"><div><p class="eyebrow">ESTAMOS PARA AYUDARTE</p><h2>¿Lo tuyo es otra cosa?</h2><p>Contanos qué pasó y en qué paso te quedaste. Si aparece un mensaje, podés incluirlo en la consulta. Con un poco de contexto es más fácil ayudarte.</p></div>${app.action('Contactar al Instituto', 'contacto', 'primary')}</section>${app.contactBlock()}`
  });
  app.pages.notFound = () => ({ title: 'No encontramos esa sección', subtitle: 'Podés volver al inicio o escribirnos para encontrar lo que necesitás.', tone: 'ayuda', actions: [['Volver al inicio', 'inicio'], ['Contactarnos', 'contacto']], content: '<div class="empty-state"><h2>Vamos por otro camino.</h2><p>El enlace puede haber cambiado o estar incompleto.</p><button class="action-button" data-route="carreras">Ver propuestas ↗</button></div>' });
})(ISP67);
