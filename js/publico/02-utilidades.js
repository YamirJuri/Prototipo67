/* 02 · UTILIDADES PURAS · Compartidas con pruebas automatizadas de validación. */
(function (app) {
  'use strict';
  app.escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  app.text = value => String(value ?? '').trim().normalize('NFC');
  app.safeUrl = value => {
    if (!value || typeof value !== 'string') return null;
    if (/^(?:javascript|data|vbscript|file):/i.test(value.trim())) return null;
    if (/^https:\/\//i.test(value)) return value;
    // Sólo recursos relativos conocidos. No admite rutas ascendentes ni barras invertidas.
    if (/^recursos\/[a-zA-Z0-9_./-]+$/.test(value) && !value.includes('..')) return value;
    return null;
  };
  app.validName = value => {
    const name = app.text(value);
    return name.length >= 2 && name.length <= 90 && /\p{L}/u.test(name) && !/[<>\r\n\x00-\x1f]/.test(name);
  };
  app.validEmail = value => {
    const email = app.text(value);
    return email.length <= 120 && !/[\r\n]/.test(email) && /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(email);
  };
  app.validate = (values, kind, config = app.config) => {
    const errors = {};
    if (!app.validName(values.nombre)) errors.nombre = 'Escribí tu nombre y apellido, entre 2 y 90 caracteres.';
    if (!app.validEmail(values.correo)) errors.correo = 'Revisá el correo. Por ejemplo: nombre@correo.com.';
    if (values.telefono && !/^[+\d\s()-]{6,22}$/.test(values.telefono)) errors.telefono = 'Revisá el teléfono o dejalo vacío.';
    if (!['contacto', 'inscripcion', 'homologacion'].includes(kind)) errors.general = 'El tipo de trámite no es válido.';
    if (kind === 'contacto' && !['ingreso', 'campus', 'cursado', 'examenes', 'documentacion', 'otra'].includes(values.tema)) errors.tema = 'Elegí un tema para tu consulta.';
    if (kind !== 'contacto' && !config.careers.some(c => c.id === values.carrera)) errors.carrera = 'Elegí una de las carreras disponibles.';
    const message = app.text(values.mensaje);
    if (message.length < 10 || message.length > 2500 || /[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(message)) errors.mensaje = 'Contanos un poco más: entre 10 y 2500 caracteres.';
    if (kind === 'homologacion') {
      if (app.text(values.institucion_origen).length < 3 || app.text(values.institucion_origen).length > 150) errors.institucion_origen = 'Indicá la institución donde estudiaste.';
      if (app.text(values.materias_origen).length < 3 || app.text(values.materias_origen).length > 1000) errors.materias_origen = 'Indicá las materias por las que querés consultar.';
    }
    if (values.acepta !== true) errors.acepta = 'Confirmá que autorizás usar estos datos para responderte.';
    if (app.text(values.sitio_web)) errors.general = 'No se pudo preparar la consulta. Intentá nuevamente.';
    return errors;
  };
  app.pdfMetadataError = (files, config = app.config) => {
    if (files.length > config.maxPdfCount) return `Podés seleccionar hasta ${config.maxPdfCount} archivos PDF.`;
    for (const file of files) {
      if (!/\.pdf$/i.test(file.name) || (file.type && file.type !== 'application/pdf')) return 'Los documentos deben ser archivos PDF.';
      if (file.size === 0 || file.size > config.maxPdfBytes) return 'Cada PDF debe tener contenido y pesar hasta 5 MB.';
    }
    return '';
  };
  app.reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  app.contactBlock = () => `<aside class="contact-note"><span>¿Preferís escribirnos directamente?</span><a href="mailto:${app.config.email}">${app.config.email}</a><p>${app.config.phone} · ${app.config.address}</p></aside>`;
  app.imageSlot = (key, label, ratio = 'wide') => {
    const src = app.safeUrl(app.config.images[key]);
    return src ? `<figure class="media-slot ${ratio}"><img src="${app.escape(src)}" alt="${app.escape(label)}" loading="lazy"></figure>` : `<figure class="media-slot ${ratio}" aria-label="Espacio reservado para ${app.escape(label)}"><span aria-hidden="true">▧</span><figcaption>${app.escape(label)}<small>Espacio para imagen</small></figcaption></figure>`;
  };

  /* Selectores de divulgación: botones nativos y grupos, sin desplegable del SO.
   * El input oculto conserva name/value para FormData y PHP.
   * Enter/Espacio abren, Tab recorre, flechas mueven opciones y Escape cierra. */
  app.choice = ({name,label,value='',options=[],groups=null,placeholder='Elegí una opción',required=false,filter=false}) => {
    const all = groups ? groups.flatMap(g=>g.options) : options;
    const selected = all.find(o=>String(o.value)===String(value));
    const button = o=>`<button type="button" class="choice-option" data-choice-value="${app.escape(o.value)}" aria-pressed="${String(o.value)===String(value)}"><span>${app.escape(o.label)}</span><span class="choice-check" aria-hidden="true">✓</span></button>`;
    return `<div class="field choice-field"><span class="field-label" id="label-${name}">${app.escape(label)}${required?' <span aria-hidden="true">*</span>':''}</span><input id="${name}" type="hidden" name="${name}" value="${app.escape(selected?value:'')}" ${filter?'data-schedule-filter':''}>
      <details class="choice-picker" data-choice-name="${name}"><summary id="control-${name}" aria-labelledby="label-${name} value-${name}" aria-describedby="error-${name}"><span id="value-${name}">${app.escape(selected?.label||placeholder)}</span><span class="choice-chevron" aria-hidden="true">⌄</span></summary><div class="choice-panel">${groups ? groups.map(g=>`<details class="choice-group" ${g.options.some(o=>String(o.value)===String(value))?'open':''}><summary><span>${app.escape(g.label)}</span><span>${g.options.length ? g.options.length+' propuestas' : 'Por publicar'} <b aria-hidden="true">+</b></span></summary><div class="choice-group-options">${g.options.length?g.options.map(button).join(''):'<p>Las propuestas de esta categoría todavía no están publicadas. Podés consultar al Instituto antes de elegir.</p><button type="button" class="action-link" data-route="contacto/ingreso">Consultar profesorados ↗</button>'}</div></details>`).join(''):options.map(button).join('')}</div></details><small id="error-${name}" class="field-error"></small></div>`;
  };
  app.careerChoice = selected => app.choice({name:'carrera',label:'Carrera',value:selected,required:true,placeholder:'Elegí Terciarios o Profesorados',groups:Object.entries(app.config.categories).map(([id,c])=>({label:c.name,options:app.config.careers.filter(x=>x.category===id).map(x=>({value:x.id,label:x.name}))}))});

  /* Datos de cronograma: sin años ni comisiones inventadas. Los filtros se derivan
   * de filas y documentos institucionales. La plantilla Excel no es un horario. */
  app.scheduleSelection = (careerId='',year='todos',commission='todas') => {
    const career=app.config.careers.find(c=>c.id===careerId);
    const records=[...app.config.scheduleRows,...app.config.scheduleDocuments];
    const source=career?records.filter(r=>r.careerId===career.id):[];
    const unique=items=>[...new Set(items.filter(x=>x!==undefined&&x!==null&&String(x)!=='').map(String))].sort((a,b)=>a.localeCompare(b,'es',{numeric:true}));
    const years=unique(source.map(r=>r.year));
    if(year!=='todos'&&!years.includes(String(year))) year='todos';
    const commissions=unique(source.filter(r=>year==='todos'||String(r.year)===String(year)).map(r=>r.commission)).filter(x=>x!=='todas');
    if(commission!=='todas'&&!commissions.includes(String(commission))) commission='todas';
    const matches=r=>career&&r.careerId===career.id&&(year==='todos'||String(r.year)===String(year))&&(commission==='todas'||r.commission==='todas'||String(r.commission)===String(commission));
    return {career,year,commission,years,commissions,rows:app.config.scheduleRows.filter(matches),documents:app.config.scheduleDocuments.filter(matches)};
  };
})(ISP67);
