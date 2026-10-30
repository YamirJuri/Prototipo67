/*
 * 04 · FORMULARIOS Y CONTRATO PHP
 * Todos tienen method=POST, name estables y un controlador declarado.
 * En modo "borrador" NO se envía ningún dato ni se suben documentos.
 * Cambiar config.transport a "php" sólo después de implementar los controladores.
 */
(function (app) {
  'use strict';
  const e = app.escape;
  app.formDraft = null;

  // PHP: nombre/correo/telefono son comunes a contacto, ingreso y homologación.
  function personalFields() {
    return `<fieldset><legend>Tus datos de contacto</legend><div class="form-grid">
      <!-- PHP $_POST['nombre']: validar longitud, caracteres y codificación en el servidor. -->
      <div class="field"><label for="nombre">Nombre y apellido <span aria-hidden="true">*</span></label><input id="nombre" name="nombre" autocomplete="name" maxlength="90" required placeholder="Tu nombre y apellido" aria-describedby="error-nombre"><small id="error-nombre" class="field-error"></small></div>
      <!-- PHP $_POST['correo']: FILTER_VALIDATE_EMAIL; rechazar saltos de línea. -->
      <div class="field"><label for="correo">Correo electrónico <span aria-hidden="true">*</span></label><input id="correo" name="correo" type="email" autocomplete="email" maxlength="120" required placeholder="nombre@correo.com" aria-describedby="error-correo"><small id="error-correo" class="field-error"></small></div>
      <!-- PHP $_POST['telefono']: opcional; no pedir datos que no sean necesarios. -->
      <div class="field"><label for="telefono">Teléfono <small>Opcional</small></label><input id="telefono" name="telefono" type="tel" autocomplete="tel" maxlength="22" placeholder="Un número para contactarte" aria-describedby="error-telefono"><small id="error-telefono" class="field-error"></small></div>
    </div></fieldset>`;
  }
  function careerField(selected) {
    // PHP $_POST['carrera']: ID estable; el selector separa las categorías.
    return app.careerChoice(selected);
  }
  function endFields(kind) {
    return `<fieldset><legend>${kind === 'homologacion' ? 'Contanos qué querés consultar' : 'Tu mensaje'}</legend>
      <!-- PHP $_POST['mensaje']: máximo 2500 caracteres. Guardar como texto; escapar al mostrar. -->
      <div class="field"><label for="mensaje">${kind === 'inscripcion' ? '¿Qué necesitás saber para ingresar?' : '¿En qué podemos ayudarte?'} <span aria-hidden="true">*</span></label><textarea id="mensaje" name="mensaje" minlength="10" maxlength="2500" required placeholder="Contanos el motivo de tu consulta y en qué paso estás." aria-describedby="messageHint error-mensaje"></textarea><small id="messageHint">Entre 10 y 2500 caracteres. No incluyas contraseñas ni datos de salud.</small><small id="error-mensaje" class="field-error"></small></div>
    </fieldset>
    <!-- PHP $_POST['acepta']: comprobar en el servidor. No marca aceptación de una matrícula. -->
    <div class="consent"><label><input id="acepta" name="acepta" value="1" type="checkbox" required aria-describedby="error-acepta"><span>Autorizo al Instituto a usar estos datos para responder mi consulta.</span></label><small id="error-acepta" class="field-error"></small></div>
    <!-- PHP $_POST['sitio_web']: campo trampa. El controlador debe rechazarlo si tiene contenido. -->
    <div class="honeypot" aria-hidden="true"><label for="sitio_web">Dejar vacío</label><input id="sitio_web" name="sitio_web" tabindex="-1" autocomplete="off"></div>
    <!-- PHP: este token se obtiene de api/csrf.php cuando se habilita el transporte real. -->
    <input type="hidden" name="csrf_token" value="">
    <div id="formSummary" class="form-summary hidden" role="alert" tabindex="-1"></div>
    <div class="form-actions"><button class="action-button" id="publicSubmit" type="submit"><span>${app.config.transport === 'php' ? 'Enviar solicitud' : 'Preparar solicitud'}</span><span aria-hidden="true">→</span></button><p>${app.config.transport === 'php' ? 'Vas a recibir una confirmación sólo si el servidor registra la solicitud.' : 'Primero revisamos tu mensaje. Después elegís cómo enviarlo.'}</p></div>
    <div id="formResult" aria-live="polite"></div>`;
  }
  function formShell(kind, content) {
    // Cuando se conecte PHP, el action y el tipo de formulario ya están separados.
    return `<form id="publicForm" class="public-form" method="post" action="${app.config.endpoints[kind]}" enctype="multipart/form-data" data-form-kind="${kind}" novalidate>
      <input type="hidden" name="tipo" value="${kind}">
      ${personalFields()}${content}${endFields(kind)}
    </form>`;
  }
  app.pages.contact = topic => {
    const topics = [['ingreso', 'Ingreso a una carrera'], ['campus', 'Acceso al campus'], ['cursado', 'Cursado y horarios'], ['examenes', 'Mesas y exámenes'], ['documentacion', 'Planes y documentación'], ['otra', 'Otra consulta']];
    return {
      title: 'Contactanos', subtitle: 'Contanos qué necesitás. No hace falta que sepas el nombre del trámite.', tone: 'ayuda',
      actions: [['Ver preguntas frecuentes', 'ayuda'], ['Volver al inicio', 'inicio']],
      content: `<div class="form-page"><div class="form-main"><p class="form-note">Los campos con * son obligatorios. Este formulario no confirma una inscripción.</p>${formShell('contacto', `<fieldset><legend>Sobre tu consulta</legend><!-- PHP $_POST['tema']: lista cerrada definida también en el servidor. -->${app.choice({name:'tema',label:'Tema',value:topic,required:true,placeholder:'Elegí el tema de tu consulta',options:topics.map(([value,label])=>({value,label}))})}</fieldset>`)}</div><aside class="form-aside"><h2>También podés escribirnos</h2><a href="mailto:${app.config.email}">${app.config.email}</a><p>${app.config.phone}</p><p>${app.config.address}</p><p>Si algo no te deja continuar, contanos qué mensaje aparece. No envíes tu contraseña.</p>${app.action('Necesito ayuda para empezar', 'ayuda')}</aside></div>`
    };
  };
  app.pages.enrollment = selected => ({
    title: 'Inscripción a una carrera', subtitle: 'Vamos paso a paso. Elegí la propuesta y consultá cómo iniciar tu ingreso.', tone: 'ingreso',
    actions: [['Elegir otra carrera', 'carreras'], ['Consultar al Instituto', 'contacto/ingreso']],
    content: `<ol class="steps"><li><span>Elegí</span>Conocé la propuesta y su plan.</li><li><span>Consultá</span>Fechas, sede y documentación.</li><li><span>Confirmá</span>El Instituto te indica cómo seguir.</li></ol><div class="form-page"><div class="form-main"><h2>Prepará tu consulta de ingreso</h2><p class="form-note">Este paso no crea una matrícula ni confirma una vacante. Los requisitos y las fechas los confirma el Instituto.</p>${formShell('inscripcion', `<fieldset><legend>La carrera que te interesa</legend>${careerField(selected)}</fieldset>`)}</div><aside class="form-aside">${app.imageSlot('enrollment', 'Ingreso al Instituto', 'portrait')}<h2>¿Todavía no elegiste?</h2><p>Podés mirar las propuestas antes de completar el formulario.</p>${app.action('Ver propuestas', 'carreras')}<a class="direct-email" href="mailto:${app.config.email}">${app.config.email}</a><p>${app.config.phone}</p></aside></div>`
  });
  app.pages.homologation = () => ({
    title: 'Presentar homologaciones', subtitle: 'Si ya aprobaste materias en otra institución, contanos tu recorrido.', tone: 'homologaciones',
    actions: [['Consultar el procedimiento', 'contacto/documentacion'], ['Ver propuestas', 'carreras']],
    content: `<section class="reading-section"><h2>Empecemos por tu situación</h2><p>Indicá dónde estudiaste, qué materias aprobaste y qué carrera te interesa. El Instituto debe evaluar el pedido y confirmar la documentación que corresponde. La homologación no es automática.</p><p>Podés preparar PDFs del analítico y los programas si los tenés. La lista definitiva de requisitos debe confirmarla Secretaría.</p></section><div class="form-page"><div class="form-main">${formShell('homologacion', `<fieldset><legend>Tu recorrido académico</legend>${careerField('')}
      <!-- PHP $_POST['institucion_origen']: texto acotado, no interpretar como HTML. -->
      <div class="field"><label for="institucion_origen">Institución donde estudiaste <span aria-hidden="true">*</span></label><input id="institucion_origen" name="institucion_origen" maxlength="150" required aria-describedby="error-institucion_origen"><small id="error-institucion_origen" class="field-error"></small></div>
      <!-- PHP $_POST['materias_origen']: hasta 1000 caracteres. La decisión requiere evaluación académica. -->
      <div class="field"><label for="materias_origen">Materias aprobadas por las que querés consultar <span aria-hidden="true">*</span></label><textarea id="materias_origen" name="materias_origen" maxlength="1000" required aria-describedby="error-materias_origen"></textarea><small id="error-materias_origen" class="field-error"></small></div>
      <!-- PHP $_FILES['documentos']: validar tamaño, MIME real y firma; guardar fuera del directorio público. -->
      <div class="field"><label for="documentos">Documentación en PDF <small>Opcional</small></label><input id="documentos" name="documentos[]" type="file" accept="application/pdf,.pdf" multiple aria-describedby="pdfHint error-documentos"><small id="pdfHint">Hasta 3 PDF de 5 MB cada uno. En modo borrador no se suben ni se adjuntan automáticamente al correo.</small><small id="error-documentos" class="field-error"></small><ul id="selectedDocuments" class="selected-files" aria-live="polite"></ul></div></fieldset>`)}</div><aside class="form-aside"><h2>Consultá con Secretaría</h2><a href="mailto:${app.config.email}">${app.config.email}</a><p>${app.config.phone}</p><p>Presentar una consulta no significa que la materia haya sido reconocida. El Instituto te va a indicar los pasos y cómo entregar los documentos.</p>${app.action('Tengo otra consulta', 'contacto/documentacion')}</aside></div>`
  });

  function clearErrors(form) {
    form.querySelectorAll('.field-error').forEach(n => { n.textContent = ''; });
    form.querySelectorAll('[aria-invalid]').forEach(n => n.removeAttribute('aria-invalid'));
    document.getElementById('formSummary').classList.add('hidden');
  }
  function displayErrors(form, errors) {
    clearErrors(form);
    Object.entries(errors).forEach(([key, message]) => {
      const field = form.elements.namedItem(key === 'documentos' ? 'documentos[]' : key);
      const node = document.getElementById(`error-${key}`);
      if (node) node.textContent = message;
      if (field?.setAttribute) field.setAttribute('aria-invalid', 'true');
      document.getElementById(`control-${key}`)?.setAttribute('aria-invalid', 'true');
    });
    const summary = document.getElementById('formSummary');
    summary.textContent = 'Revisá lo que falta para continuar. ' + Object.values(errors).join(' ');
    summary.classList.remove('hidden');
    summary.focus();
  }
  app.filesError = async files => {
    const metadataError = app.pdfMetadataError(files);
    if (metadataError) return metadataError;
    for (const file of files) {
      const signature = new TextDecoder().decode(await file.slice(0, 5).arrayBuffer());
      if (signature !== '%PDF-') return 'Uno de los archivos no parece un PDF válido. Revisá el documento original.';
    }
    return '';
  };
  function makeDraft(values, kind, files) {
    const career = app.config.careers.find(c => c.id === values.carrera);
    const labels = { contacto: 'Consulta', inscripcion: 'Consulta de inscripción', homologacion: 'Consulta de homologación' };
    const lines = ['Hola, Instituto Superior 67:', '', values.mensaje, '', `Nombre: ${values.nombre}`, `Correo: ${values.correo}`];
    if (values.telefono) lines.push(`Teléfono: ${values.telefono}`);
    if (career) lines.push(`Carrera: ${career.name}`);
    if (values.tema) lines.push(`Tema: ${values.tema}`);
    if (kind === 'homologacion') lines.push(`Institución de origen: ${values.institucion_origen}`, `Materias: ${values.materias_origen}`);
    if (files.length) lines.push('', 'Documentos que adjuntaré manualmente:', ...files.map(f => `- ${f.name}`));
    return { subject: `${labels[kind]}${career ? ' · ' + career.name : ''}`, body: lines.join('\n') };
  }
  async function sendToPhp(form, kind) {
    // PHP integration: CSRF is acquired from the same origin, never from an external URL.
    const csrfResponse = await fetch(app.config.endpoints.csrf, { credentials: 'same-origin', headers: { Accept: 'application/json' } });
    if (!csrfResponse.ok) throw new Error('No pudimos iniciar la solicitud. Intentá nuevamente.');
    const csrf = await csrfResponse.json();
    if (!csrf.token || typeof csrf.token !== 'string') throw new Error('No pudimos verificar la solicitud.');
    form.elements.csrf_token.value = csrf.token;
    const response = await fetch(app.config.endpoints[kind], { method: 'POST', body: new FormData(form), credentials: 'same-origin', headers: { Accept: 'application/json' } });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok !== true || typeof data.reference !== 'string') throw new Error('No se pudo registrar la solicitud. Tus datos siguen en el formulario; podés volver a intentarlo.');
    return data.reference;
  }
  app.submitPublicForm = async event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.dataset.busy === 'true') return;
    const kind = form.dataset.formKind, values = Object.fromEntries(new FormData(form));
    Object.keys(values).forEach(k => { if (typeof values[k] === 'string') values[k] = app.text(values[k]); });
    values.acepta = form.elements.acepta.checked;
    let errors = app.validate(values, kind);
    const files = [...(document.getElementById('documentos')?.files || [])];
    const submit = form.querySelector('[type=submit]');
    clearErrors(form);
    if (Object.keys(errors).length) { displayErrors(form, errors); return; }
    form.dataset.busy = 'true';
    submit.disabled = true;
    submit.setAttribute('aria-busy', 'true');
    submit.innerHTML = '<span class="spinner" aria-hidden="true"></span><span>Revisando tu solicitud…</span>';
    try {
      // The PDF check reads only the five signature bytes. No file is uploaded in draft mode.
      const fileError = await app.filesError(files);
      if (fileError) { displayErrors(form, { documentos: fileError }); return; }
      if (!form.isConnected) return;
      const result = document.getElementById('formResult');
      if (app.config.transport === 'php') {
        const reference = await sendToPhp(form, kind);
        if (!form.isConnected) return;
        result.className = 'form-result success';
        result.innerHTML = '<h2>Tu solicitud quedó registrada</h2><p id="requestReference"></p>';
        document.getElementById('requestReference').textContent = `Referencia: ${reference}`;
        form.reset();
      } else {
        app.formDraft = makeDraft(values, kind, files);
        result.className = 'form-result';
        result.innerHTML = `<h2>Tu solicitud está lista para enviar</h2><p>El Instituto todavía no la recibió. Podés abrir tu correo o descargar el texto y enviarlo a <a href="mailto:${app.config.email}">${app.config.email}</a>.</p>${files.length ? '<p class="attachment-note">Los PDF no se adjuntan solos. Agregalos manualmente al correo antes de enviarlo.</p>' : ''}<div class="actions"><a class="action-button" id="draftEmail">Abrir mi correo ↗</a><button type="button" class="action-link" data-copy-draft>Copiar texto</button><button type="button" class="action-link" data-download-draft>Descargar solicitud</button></div><p class="section-note">No se guardan estos datos al recargar o salir de esta sección.</p>`;
        document.getElementById('draftEmail').href = `mailto:${app.config.email}?subject=${encodeURIComponent(app.formDraft.subject)}&body=${encodeURIComponent(app.formDraft.body)}`;
      }
      result.tabIndex = -1;
      result.focus({ preventScroll: true });
    } catch (error) {
      if (form.isConnected) displayErrors(form, { general: error.message || 'No se pudo continuar. Intentá nuevamente.' });
    } finally {
      if (form.isConnected) {
        form.dataset.busy = 'false'; submit.disabled = false; submit.setAttribute('aria-busy', 'false');
        submit.innerHTML = `<span>${app.config.transport === 'php' ? 'Enviar solicitud' : app.formDraft ? 'Actualizar solicitud' : 'Preparar solicitud'}</span><span aria-hidden="true">→</span>`;
      }
    }
  };
  app.copyDraft = async button => {
    if (!app.formDraft) return;
    try {
      await navigator.clipboard.writeText(app.formDraft.subject + '\n\n' + app.formDraft.body);
      button.textContent = 'Texto copiado ✓';
    } catch {
      let area = document.getElementById('draftManualCopy');
      if (!area) { area = document.createElement('textarea'); area.id = 'draftManualCopy'; area.readOnly = true; area.setAttribute('aria-label', 'Texto de la solicitud para copiar'); document.getElementById('formResult').appendChild(area); }
      area.value = app.formDraft.subject + '\n\n' + app.formDraft.body;
      area.focus(); area.select(); button.textContent = 'Copiá el texto seleccionado';
    }
  };
  app.downloadDraft = () => {
    if (!app.formDraft) return;
    const url = URL.createObjectURL(new Blob([app.formDraft.subject + '\n\n' + app.formDraft.body], { type: 'text/plain;charset=utf-8' }));
    const anchor = document.createElement('a'); anchor.href = url; anchor.download = 'solicitud-instituto67.txt'; anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  app.bindPublicForm = () => {
    const form = document.getElementById('publicForm');
    if (!form) return;
    form.addEventListener('submit', app.submitPublicForm);
    form.addEventListener('input', event => {
      // Una edición invalida el borrador previo: nunca ofrecer un correo con datos viejos.
      if (app.formDraft) { app.formDraft = null; const result = document.getElementById('formResult'); result.replaceChildren(); result.className = ''; const submit = document.getElementById('publicSubmit'); submit.innerHTML = '<span>Preparar solicitud</span><span aria-hidden="true">→</span>'; }
      event.target.removeAttribute('aria-invalid');
      document.getElementById(`control-${event.target.name}`)?.removeAttribute('aria-invalid');
      const error = document.getElementById(`error-${event.target.name}`);
      if (error) error.textContent = '';
    });
    const docs = document.getElementById('documentos');
    docs?.addEventListener('change', () => {
      const list = document.getElementById('selectedDocuments'); list.replaceChildren();
      [...docs.files].forEach(file => { const item = document.createElement('li'); item.textContent = `${file.name} · ${(file.size / 1024 / 1024).toFixed(2)} MB`; list.appendChild(item); });
      document.getElementById('error-documentos').textContent = app.pdfMetadataError([...docs.files]);
    });
  };
})(ISP67);
