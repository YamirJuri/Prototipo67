function prototypeAction(label) {
      const normalized = (label || '').toLowerCase();

      if (normalized.includes('ver todas') || normalized.includes('ver todo')) {
        toast('Abriendo listado completo en el prototipo.');
        return;
      }
      if (normalized.includes('leer más') || normalized.includes('ver más')) {
        toast('Abriendo detalle informativo.');
        return;
      }
      if (normalized.includes('descargar')) {
        simulateDownload('documento_sie.txt', 'Descarga simulada desde el prototipo del Sistema Educativo.');
        return;
      }
      if (normalized.includes('generar')) {
        toast('Reporte generado en modo prototipo.');
        return;
      }
      if (normalized.includes('editar')) {
        toast('Formulario de edición abierto en modo prototipo.');
        return;
      }
      if (normalized.includes('ver') || normalized.includes('abrir') || normalized.includes('entrar')) {
        toast('Contenido abierto en modo prototipo.');
        return;
      }
      if (normalized.includes('nuevo') || normalized.includes('crear') || normalized.includes('agregar')) {
        toast('Formulario de alta abierto en modo prototipo.');
        return;
      }
      if (normalized.includes('publicar')) {
        toast('Contenido publicado en modo prototipo.');
        return;
      }
      if (normalized.includes('guardar')) {
        toast('Cambios guardados en modo prototipo.');
        return;
      }
      if (normalized.includes('cancelar')) {
        closeModal?.();
        toast('Acción cancelada.');
        return;
      }
      toast(`${label}: acción disponible en el prototipo.`);
    }

    function simulateDownload(filename, content) {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast('Descarga iniciada.');
    }

    const publicAcademic = { "careers": [{ "id": "analisis", "name": "Técnico Superior en Análisis Funcional de Sistemas Informáticos", "type": "Tecnicatura", "plan": "analisis", "summary": "El plan provisto incluye Gestión de Software I y II, Análisis de Sistemas Organizacionales, Desarrollo de Sistemas, Bases de Datos, Redes y Comunicaciones y Seguridad de los Sistemas." }, { "id": "desarrollo", "name": "Tecnicatura Superior en Desarrollo de Software", "type": "Tecnicatura", "plan": "desarrollo", "summary": "El plan provisto tiene una fuerte carga de programación y desarrollo: Programación I y II, Ingeniería del Software I y II, Bases de Datos I y II y Gestión de Proyectos de Software." }, { "id": "gestion", "name": "Tecnicatura Superior en Gestión de las Organizaciones", "type": "Tecnicatura", "plan": "gestion", "summary": "El plan provisto incluye Administración, Contabilidad, Gestión de la Producción, Gestión de Capital Humano, Gestión de Costos, Gestión Financiera y Control de Gestión." }, { "id": "prof_tec", "name": "Profesorado de Educación Tecnológica", "type": "Profesorado", "plan": null, "summary": "Carrera incluida en la oferta académica. El plan de estudios no fue provisto para este prototipo." }, { "id": "prof_admin", "name": "Profesorado en Ciencias de la Administración", "type": "Profesorado", "plan": null, "summary": "Carrera incluida en la oferta académica. El plan de estudios no fue provisto para este prototipo." }], "plans": { "desarrollo": { "career": "Tecnicatura Superior en Desarrollo de Software", "acronym": "TSDS", "curriculum": "Anexo I - Resolución N° 2120/16", "years": [{ "title": "Primer año", "subjects": [["Comunicación", "3 Hs", "Primer cuatrimestre"], ["UDI I", "3 Hs", "Segundo cuatrimestre"], ["Matemática", "4 Hs", "Anual"], ["Inglés Técnico I", "3 Hs", "Anual"], ["Administración", "3 Hs", "Anual"], ["Tecnología de la Información", "3 Hs", "Anual"], ["Lógica y estructura de Datos", "4 Hs", "Anual"], ["Ingeniería del Software I", "4 Hs", "Anual"], ["Sistemas Operativos", "4 Hs", "Anual"]] }, { "title": "Segundo año", "subjects": [["Problemáticas Socio Contemporáneas", "3 Hs", "Primer cuatrimestre"], ["UDI II", "3 Hs", "Segundo cuatrimestre"], ["Inglés Técnico II", "3 Hs", "Anual"], ["Estadística", "3 Hs", "Anual"], ["Programación I", "6 Hs", "Anual"], ["Innovación y Desarrollo Emprendedor", "3 Hs", "Anual"], ["Ingeniería de Software II", "4 Hs", "Anual"], ["Bases de Datos I", "4 Hs", "Anual"], ["Prácticas Profesionalizantes I", "4 Hs", "Anual"]] }, { "title": "Tercer año", "subjects": [["Ética y Responsabilidad Social", "3 Hs", "Primer cuatrimestre"], ["Derecho y Legislación Laboral", "3 Hs", "Segundo cuatrimestre"], ["Redes y Comunicación", "4 Hs", "Anual"], ["Programación II", "6 Hs", "Anual"], ["Gestión de Proyectos de Software", "4 Hs", "Anual"], ["Bases de Datos II", "4 Hs", "Anual"], ["Prácticas Profesionalizantes II", "6 Hs", "Anual"]] }] }, "analisis": { "career": "Técnico Superior en Análisis Funcional de Sistemas Informáticos", "acronym": "TSAFSI", "curriculum": "Anexo II - Resolución N° 2120/16", "years": [{ "title": "Primer año", "subjects": [["Comunicación", "3 Hs", "Primer cuatrimestre"], ["UDI I", "3 Hs", "Segundo cuatrimestre"], ["Matemática", "3 Hs", "Anual"], ["Inglés Técnico I", "3 Hs", "Anual"], ["Psicosociología de las Organizaciones", "3 Hs", "Anual"], ["Modelos de Negocios", "3 Hs", "Anual"], ["Arquitectura de Computadoras", "4 Hs", "Anual"], ["Gestión de Software I", "4 Hs", "Anual"], ["Análisis de Sistemas Organizacionales", "5 Hs", "Anual"]] }, { "title": "Segundo año", "subjects": [["Problemáticas Socio Contemporáneas", "3 Hs", "Primer cuatrimestre"], ["UDI II", "3 Hs", "Segundo cuatrimestre"], ["Inglés Técnico II", "3 Hs", "Anual"], ["Estadística", "3 Hs", "Anual"], ["Gestión del Software II", "4 Hs", "Anual"], ["Innovación y Desarrollo Emprendedor", "3 Hs", "Anual"], ["Estrategias de Negocios", "4 Hs", "Anual"], ["Desarrollo de Sistemas", "5 Hs", "Anual"], ["Prácticas Profesionalizantes I", "4 Hs", "Anual"]] }, { "title": "Tercer año", "subjects": [["Ética y Responsabilidad Social", "3 Hs", "Primer cuatrimestre"], ["Derecho y Legislación Laboral", "3 Hs", "Segundo cuatrimestre"], ["Redes y Comunicaciones", "3 Hs", "Anual"], ["Seguridad de los Sistemas", "3 Hs", "Anual"], ["Bases de Datos", "4 Hs", "Anual"], ["Sistema de Información Organizacional", "3 Hs", "Anual"], ["Desarrollo de Sistemas Web", "5 Hs", "Anual"], ["Prácticas Profesionalizantes II", "6 Hs", "Anual"]] }] }, "gestion": { "career": "Tecnicatura Superior en Gestión de las Organizaciones", "acronym": "TSGO", "curriculum": "Resolución N° 378/16", "years": [{ "title": "Primer año", "subjects": [["Comunicación", "3 Hs", "Primer cuatrimestre"], ["UDI I", "3 Hs", "Segundo cuatrimestre"], ["Economía", "3 Hs", "Anual"], ["Matemática y Estadística", "4 Hs", "Anual"], ["Contabilidad", "4 Hs", "Anual"], ["Informática", "3 Hs", "Anual"], ["Administración I", "3 Hs", "Anual"], ["Gestión de la Producción", "5 Hs", "Anual"], ["Gestión Capital Humano", "4 Hs", "Anual"]] }, { "title": "Segundo año", "subjects": [["Problemáticas Socio Contemporáneas", "3 Hs", "Primer cuatrimestre"], ["UDI II", "3 Hs", "Segundo cuatrimestre"], ["Innovación y Desarrollo Emprendedor", "3 Hs", "Anual"], ["Inglés Técnico", "3 Hs", "Anual"], ["Legislación Comercial y Tributaria", "3 Hs", "Anual"], ["Gestión de Comerc. e Invest. Comercial", "5 Hs", "Anual"], ["Gestión de Costos", "3 Hs", "Anual"], ["Gestión Contable", "3 Hs", "Anual"], ["Práctica Profesionalizante I", "6 Hs", "Anual"]] }, { "title": "Tercer año", "subjects": [["Gestión de Seguridad, Salud Ocupacional y Medio Ambiente", "3 Hs", "Anual"], ["Ética y Responsabilidad Social", "3 Hs", "Primer cuatrimestre"], ["Legislación Laboral", "3 Hs", "Segundo cuatrimestre"], ["Estrategia Empresarial", "5 Hs", "Anual"], ["Sistema de Información para la Gestión de las Organizaciones", "3 Hs", "Anual"], ["Gestión Financiera", "3 Hs", "Anual"], ["Evaluación y Administración de Proyectos de Inversión", "5 Hs", "Anual"], ["Control de Gestión", "3 Hs", "Anual"], ["Práctica Profesionalizante II", "6 Hs", "Anual"]] }] } } };

    function hidePublicAreas() {
      document.getElementById('publicSite').classList.add('hidden');
      const p = document.getElementById('publicInfoView');
      if (p) p.classList.add('hidden');
    }

    function showPublicHome() {
      document.getElementById('authView').classList.add('hidden');
      document.getElementById('appView').classList.add('hidden');
      document.getElementById('publicInfoView').classList.add('hidden');
      document.getElementById('publicSite').classList.remove('hidden');
      window.scrollTo(0, 0);
    }


    const publicCorrelatives = {
      analisis: [
        { subject: 'Inglés Técnico II', label: 'Inglés Técnico II', requires: ['Inglés Técnico I'] },
        { subject: 'Gestión del Software II', label: 'Gestión de Software II', requires: ['Gestión de Software I'] },
        { subject: 'Desarrollo de Sistemas', label: 'Desarrollo de Sistemas', requires: ['Análisis de Sistemas Organizacionales'] },
        { subject: 'Desarrollo de Sistemas Web', label: 'Desarrollo de Sistemas Web', requires: ['Desarrollo de Sistemas'] },
        { subject: 'Estrategias de Negocios', label: 'Estrategias de Negocios', requires: ['Modelos de Negocios'] },
        { subject: 'Sistema de Información Organizacional', label: 'Sistema de Información Organizacional', requires: ['Modelos de Negocios'] },
        {
          subject: 'Prácticas Profesionalizantes II', label: 'Práctica Profesionalizante II',
          requires: ['Prácticas Profesionalizantes I', 'Innovación y Desarrollo Emprendedor'],
          requireLabels: ['Práctica Profesionalizante I', 'Innovación y Desarrollo Emprendedor']
        }
      ],
      desarrollo: [
        { subject: 'Inglés Técnico II', label: 'Inglés Técnico II', requires: ['Inglés Técnico I'] },
        { subject: 'Programación I', label: 'Programación I', requires: ['Lógica y estructura de Datos'], requireLabels: ['Lógica y Estructura de Datos'] },
        { subject: 'Ingeniería de Software II', label: 'Ingeniería de Software II', requires: ['Ingeniería del Software I'], requireLabels: ['Ingeniería de Software I'] },
        { subject: 'Redes y Comunicación', label: 'Redes y Comunicación', requires: ['Tecnología de la Información', 'Sistemas Operativos'] },
        { subject: 'Programación II', label: 'Programación II', requires: ['Programación I'] },
        { subject: 'Bases de Datos II', label: 'Bases de Datos II', requires: ['Bases de Datos I', 'Sistemas Operativos'] },
        { subject: 'Gestión de Proyectos de Software', label: 'Gestión de Proyectos de Software', requires: ['Ingeniería de Software II'] },
        {
          subject: 'Prácticas Profesionalizantes II', label: 'Práctica Profesionalizante II',
          requires: ['Prácticas Profesionalizantes I', 'Administración', 'Innovación y Desarrollo Emprendedor'],
          requireLabels: ['Práctica Profesionalizante I', 'Administración', 'Innovación y Desarrollo Emprendedor']
        }
      ]
    };

    function normalizeAcademicName(value) {
      return (value || '')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .replace(/\bdel\b/g, 'de')
        .replace(/practicas?/g, 'practica')
        .replace(/profesionalizantes?/g, 'profesionalizante')
        .replace(/\s+/g, ' ').trim();
    }

    function correlationRulesFor(planId) {
      return publicCorrelatives[planId] || [];
    }

    function correlationRuleForSubject(planId, subject) {
      const target = normalizeAcademicName(subject);
      return correlationRulesFor(planId).find(r => normalizeAcademicName(r.subject) === target) || null;
    }

    function academicSubjectApproved(history, subject) {
      const target = normalizeAcademicName(subject);
      return history.some(h => normalizeAcademicName(h.subject) === target && h.status === 'Aprobada');
    }

    function finalCorrelativesMet(planId, subject, history) {
      const rule = correlationRuleForSubject(planId, subject);
      if (!rule) return true;
      return rule.requires.every(req => academicSubjectApproved(history, req));
    }

    function showCorrelatives(id) {
      const plan = publicAcademic.plans[id];
      const rules = correlationRulesFor(id);
      document.getElementById('publicSite').classList.add('hidden');
      document.getElementById('publicInfoView').classList.remove('hidden');
      setPublicActive('norms');

      const content = rules.length ? `
    <div class="card card-pad">
      <div class="section-head">
        <h3>Régimen de Correlatividades</h3>
        <span class="status ok">${rules.length} requisitos cargados</span>
      </div>
      <p class="muted" style="margin-bottom:16px">
        Para rendir las materias indicadas, el estudiante debe tener aprobadas las correlativas detalladas.
      </p>
      <div class="table-wrap">
        <table class="plan-table">
          <thead><tr><th>Para rendir</th><th>Debe tener aprobada</th></tr></thead>
          <tbody>
            ${rules.map(r => {
        const labels = r.requireLabels || r.requires;
        return `<tr><td><b>${r.label || r.subject}</b></td><td>${labels.map(x => `<div>${x}</div>`).join('')}</td></tr>`;
      }).join('')}
          </tbody>
        </table>
      </div>
      <div class="public-card-actions" style="margin-top:16px">
        <button class="btn btn-outline" onclick="showPlan('${id}')">← Volver al plan de estudios</button>
      </div>
    </div>` :
        `<div class="card card-pad"><div class="empty">Todavía no se incorporó el detalle de correlatividades para esta carrera.</div></div>`;

      document.getElementById('publicInfoContent').innerHTML =
        publicPageHead('Régimen de Correlatividades', plan?.career || 'Carrera') + content;
      window.scrollTo(0, 0);
    }

    function publicPageHead(title, subtitle) {
      return `<div class="public-info-head"><div><h1>${title}</h1><p>${subtitle}</p></div></div>`;
    }

    function setPublicActive(section) {
      document.querySelectorAll('[data-public]').forEach(b => b.classList.toggle('active', b.dataset.public === section));
    }

    function showPublicSection(section) {
      document.getElementById('publicSite').classList.add('hidden');
      document.getElementById('authView').classList.add('hidden');
      document.getElementById('appView').classList.add('hidden');
      document.getElementById('publicInfoView').classList.remove('hidden');
      setPublicActive(section);
      const c = document.getElementById('publicInfoContent');

      if (section === 'careers') {
        c.innerHTML = renderCareers();
      } else if (section === 'plans') {
        c.innerHTML = renderPlans();
      } else if (section === 'norms') {
        c.innerHTML = renderNorms();
      } else if (section === 'news') {
        c.innerHTML = renderNewsPublic();
      } else if (section === 'contact') {
        c.innerHTML = renderContactPublic();
      }
      window.scrollTo(0, 0);
    }

    function renderCareers() {
      const cards = publicAcademic.careers.map(x => `
    <article class="public-career-card">
      <span class="public-badge ${x.type === 'Profesorado' ? 'badge-prof' : 'badge-tech'}">${x.type}</span>
      <div class="public-career-icon">${x.type === 'Profesorado' ? '🎓' : '📘'}</div>
      <h3>${x.name}</h3>
      <p>${x.summary}</p>
      <div class="public-card-actions">
        <button class="btn btn-outline" onclick="showCareer('${x.id}')">Ver información</button>
        ${x.plan ? `<button class="btn btn-primary" onclick="showPlan('${x.plan}')">Ver plan</button>` : ''}
      </div>
    </article>`).join('');

      return publicPageHead('Carreras', 'Consultá la oferta académica y entrá a cada carrera para ver su información. Consultá los planes de las tecnicaturas y la información de los profesorados.') +
        `<section class="public-career-grid">${cards}</section>`;
    }

    function showCareer(id) {
      const x = publicAcademic.careers.find(c => c.id === id);
      if (!x) return;
      document.getElementById('publicSite').classList.add('hidden');
      document.getElementById('publicInfoView').classList.remove('hidden');
      setPublicActive('careers');
      const plan = x.plan ? publicAcademic.plans[x.plan] : null;
      let focus = '';
      if (plan) {
        const all = plan.years.flatMap(y => y.subjects.map(s => s[0]));
        let picks = [];
        if (id === 'desarrollo') picks = ['Programación I', 'Programación II', 'Ingeniería del Software I', 'Ingeniería de Software II', 'Bases de Datos I', 'Gestión de Proyectos de Software'];
        if (id === 'analisis') picks = ['Gestión de Software I', 'Gestión del Software II', 'Análisis de Sistemas Organizacionales', 'Desarrollo de Sistemas', 'Bases de Datos', 'Desarrollo de Sistemas Web'];
        if (id === 'gestion') picks = ['Gestión de la Producción', 'Gestión Capital Humano', 'Gestión de Costos', 'Gestión Financiera', 'Control de Gestión', 'Estrategia Empresarial'];
        focus = `<div class="public-focus">${picks.filter(p => all.includes(p)).map(p => `<span>${p}</span>`).join('')}</div>`;
      }
      document.getElementById('publicInfoContent').innerHTML =
        publicPageHead(x.name, x.type) +
        `<div class="public-detail">
      <div class="card card-pad">
        <h2>Información de la carrera</h2>
        <p class="muted" style="line-height:1.7">${x.summary}</p>
        ${focus}
        <div class="public-card-actions" style="margin-top:20px">
          ${plan ? `<button class="btn btn-primary" onclick="showPlan('${x.plan}')">Abrir plan de estudios</button>` : ''}
          <button class="btn btn-outline" onclick="showPublicSection('careers')">Volver a carreras</button>
        </div>
      </div>
      <div class="card card-pad">
        <h3>Plan de estudios</h3>
        ${plan ? `<p><b>Disponible en el prototipo</b></p><p class="muted">${plan.acronym} · ${plan.curriculum}</p><p>El plan se organiza en tres años.</p>` : `<span class="public-badge badge-none">Plan no provisto</span><p class="muted">No recibimos el plan de estudios de este profesorado, por eso no agregué materias ni datos que no estén respaldados por el material.</p>`}
      </div>
    </div>`;
      window.scrollTo(0, 0);
    }

    function renderPlans() {
      const cards = publicAcademic.careers.map(x => {
        const p = x.plan ? publicAcademic.plans[x.plan] : null;
        return `<article class="public-career-card">
      <span class="public-badge ${p ? 'badge-tech' : 'badge-none'}">${p ? 'Plan cargado' : 'Plan no provisto'}</span>
      <div class="public-career-icon">📚</div>
      <h3>${x.name}</h3>
      <p>${p ? `${p.acronym} · ${p.curriculum} · 3 años.` : 'El material recibido no incluye el plan de estudios de esta carrera.'}</p>
      <div class="public-card-actions">
        ${p ? `<button class="btn btn-primary" onclick="showPlan('${x.plan}')">Consultar plan</button>` : `<button class="btn btn-outline" disabled>Sin plan cargado</button>`}
      </div>
    </article>`;
      }).join('');
      return publicPageHead('Planes de estudio', 'Elegí una carrera para consultar sus espacios curriculares, carga horaria y régimen de cursado.') +
        `<section class="public-career-grid">${cards}</section>`;
    }

    function showPlan(id) {
      const p = publicAcademic.plans[id];
      if (!p) return;
      document.getElementById('publicSite').classList.add('hidden');
      document.getElementById('publicInfoView').classList.remove('hidden');
      setPublicActive('plans');

      const total = p.years.reduce((a, y) => a + y.subjects.length, 0);
      const annual = p.years.flatMap(y => y.subjects).filter(s => s[2] === 'Anual').length;
      const term = total - annual;

      const years = p.years.map(y => `
    <section class="plan-year">
      <h3>${y.title}</h3>
      <div style="overflow:auto">
        <table class="plan-table">
          <thead><tr><th>Espacio curricular</th><th>Carga horaria</th><th>Régimen</th></tr></thead>
          <tbody>${y.subjects.map(s => `<tr><td><b>${s[0]}</b></td><td>${s[1]}</td><td>${s[2]}</td></tr>`).join('')}</tbody>
        </table>
      </div>
    </section>`).join('');

      document.getElementById('publicInfoContent').innerHTML =
        publicPageHead(`(${p.acronym}) Plan de Estudios`, p.career) +
        `<div class="card card-pad" style="margin-bottom:16px">
      <div class="section-head"><h3>Estructura del diseño curricular</h3><span class="status ok">Plan cargado</span></div>
      <p><b>${p.curriculum}</b></p>
      <div class="plan-summary">
        <div class="quick"><b>3 años</b><p>Organización del plan</p></div>
        <div class="quick"><b>${total}</b><p>Espacios curriculares listados</p></div>
        <div class="quick"><b>${annual} anuales / ${term} cuatrimestrales</b><p>Régimen</p></div>
      </div>
      <div class="public-card-actions">
        ${correlationRulesFor(id).length ? `<button class="btn btn-primary" onclick="showCorrelatives('${id}')">Ver correlatividades</button>` : ''}
        <button class="btn btn-outline" onclick="showPublicSection('plans')">← Volver a planes</button>
      </div>
    </div>${years}`;
      window.scrollTo(0, 0);
    }

    function renderNorms() {
      return publicPageHead('Normativas', 'Accesos institucionales vinculados con la vida académica.') +
        `<div class="public-career-grid">
    <article class="public-career-card"><div class="public-career-icon">📄</div><h3>Reglamento Académico Institucional</h3><p>Sección preparada para consultar el reglamento académico. El documento completo no fue incluido en el material recibido.</p><div class="public-card-actions"><button class="btn btn-outline" onclick="toast('Documento pendiente de cargar en el prototipo.')">Consultar</button></div></article>
    <article class="public-career-card">
      <div class="public-career-icon">🔗</div>
      <h3>Régimen de Correlatividades</h3>
      <p>Detalle incorporado para Análisis Funcional de Sistemas Informáticos y Desarrollo de Software.</p>
      <div class="public-card-actions" style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-outline" onclick="showCorrelatives('analisis')">Analista en Sistemas</button>
        <button class="btn btn-outline" onclick="showCorrelatives('desarrollo')">Desarrollo de Software</button>
      </div>
    </article>
  </div>`;
    }

    function renderNewsPublic() {
      return publicPageHead('Noticias institucionales', 'Novedades visibles desde el Home institucional.') +
        `<div class="news-public-grid">
    <article class="news-public-card"><span class="public-badge badge-tech">20 de mayo de 2026</span><h3>Período de inscripción 2° cuatrimestre 2026</h3><p class="muted">Del 27 de mayo al 16 de junio estará abierto el período de inscripción.</p></article>
    <article class="news-public-card"><span class="public-badge badge-prof">10 de mayo de 2026</span><h3>Semana de la Cultura Institucional</h3><p class="muted">Actividades, muestras y talleres del 13 al 17 de junio. ¡Sumate!</p></article>
  </div>`;
    }

    function renderContactPublic() {
      return publicPageHead('Contacto y consultas', 'Encontrá los canales de atención y la ubicación del Instituto.') + `<div class="card card-pad"><h2>¿En qué podemos ayudarte?</h2><p>Para consultas sobre carreras, documentación e inscripciones, contactá a Alumnado. Para problemas de acceso, consultá a Secretaría.</p><p><a class="btn btn-primary" href="#contacto">Ver contactos y mapa ↓</a></p></div>`;
    }

    const db = {
      users: [
        { user: 'alumno@sie.edu.ar', pass: '1234', role: 'student', name: 'Lucía Martínez' },
        { user: 'docente@sie.edu.ar', pass: '1234', role: 'teacher', name: 'Juan Pérez' },
        { user: 'admin@sie.edu.ar', pass: '1234', role: 'admin', name: 'Administrador' }
      ],
      accountRequests: [
        { id: 1, name: 'Sofía Benítez', dni: '41.234.567', cuil: '27-41234567-4', phone: '+54 342 555-0301', email: 'sofia.benitez@mail.com', date: '05/09/2026', status: 'Pendiente' },
        { id: 2, name: 'Mateo Fernández', dni: '40.987.654', cuil: '20-40987654-1', phone: '+54 342 555-0302', email: 'mateo.fernandez@mail.com', date: '04/09/2026', status: 'Pendiente' }
      ],
      students: [
        { id: 1, legajo: 'A-0001248', name: 'Lucía Martínez', dni: '39.876.543', cuil: '27-39876543-4', birthDate: '15/08/2004', email: 'alumno@sie.edu.ar', phone: '+54 342 555-0148', address: 'Santa Fe (3000), Argentina', careerId: 'desarrollo', entryYear: 2025, currentYear: 2, previousPending: 1, status: 'Activa' },
        { id: 2, legajo: 'A-0001249', name: 'María Camila López', dni: '39.876.544', cuil: '27-39876544-2', birthDate: '03/11/2004', email: 'maria.lopez@alumnos.edu.ar', phone: '+54 342 555-0162', address: 'Santa Fe (3000), Argentina', careerId: 'analisis', entryYear: 2025, currentYear: 2, previousPending: 0, status: 'Activa' },
        { id: 3, legajo: 'A-0001250', name: 'Juan Ramón Ortiz', dni: '39.876.545', cuil: '20-39876545-6', birthDate: '27/02/2003', email: 'juan.ortiz@alumnos.edu.ar', phone: '+54 342 555-0184', address: 'Santo Tomé, Santa Fe', careerId: 'gestion', entryYear: 2024, currentYear: 3, previousPending: 0, status: 'Activo' },
        { id: 4, legajo: 'A-0001251', name: 'Laura Gabriela Díaz', dni: '39.876.546', cuil: '27-39876546-9', birthDate: '19/06/2005', email: 'laura.diaz@alumnos.edu.ar', phone: '+54 342 555-0215', address: 'Santa Fe (3000), Argentina', careerId: 'desarrollo', entryYear: 2025, currentYear: 2, previousPending: 2, status: 'Activa' },
        { id: 5, legajo: 'A-0001252', name: 'Andrés Felipe Pérez', dni: '40.118.237', cuil: '20-40118237-8', birthDate: '07/09/2004', email: 'andres.perez@alumnos.edu.ar', phone: '+54 342 555-0277', address: 'Santa Fe (3000), Argentina', careerId: 'desarrollo', entryYear: 2025, currentYear: 2, previousPending: 0, status: 'Activo' }
      ],
      academicHistory: [
        { studentId: 1, subject: 'Comunicación', year: 1, status: 'Aprobada', grade: 8, period: '2025' },
        { studentId: 1, subject: 'UDI I', year: 1, status: 'Aprobada', grade: 7, period: '2025' },
        { studentId: 1, subject: 'Matemática', year: 1, status: 'Aprobada', grade: 7, period: '2025' },
        { studentId: 1, subject: 'Inglés Técnico I', year: 1, status: 'Aprobada', grade: 8, period: '2025' },
        { studentId: 1, subject: 'Administración', year: 1, status: 'Aprobada', grade: 6, period: '2025' },
        { studentId: 1, subject: 'Tecnología de la Información', year: 1, status: 'Aprobada', grade: 9, period: '2025' },
        { studentId: 1, subject: 'Lógica y estructura de Datos', year: 1, status: 'Libre', grade: null, period: '2025' },
        { studentId: 1, subject: 'Ingeniería del Software I', year: 1, status: 'Aprobada', grade: 8, period: '2025' },
        { studentId: 1, subject: 'Sistemas Operativos', year: 1, status: 'Aprobada', grade: 7, period: '2025' },
        { studentId: 1, subject: 'Problemáticas Socio Contemporáneas', year: 2, status: 'Regularizada', grade: null, period: '2026' },
        { studentId: 1, subject: 'UDI II', year: 2, status: 'Pendiente', grade: null, period: '2026' },
        { studentId: 1, subject: 'Inglés Técnico II', year: 2, status: 'Cursando', grade: null, period: '2026' },
        { studentId: 1, subject: 'Estadística', year: 2, status: 'Regularizada', grade: null, period: '2026' },
        { studentId: 1, subject: 'Programación I', year: 2, status: 'Cursando', grade: null, period: '2026' },
        { studentId: 1, subject: 'Innovación y Desarrollo Emprendedor', year: 2, status: 'Pendiente', grade: null, period: '2026' },
        { studentId: 1, subject: 'Ingeniería de Software II', year: 2, status: 'Pendiente', grade: null, period: '2026' },
        { studentId: 1, subject: 'Bases de Datos I', year: 2, status: 'Cursando', grade: null, period: '2026' },
        { studentId: 1, subject: 'Prácticas Profesionalizantes I', year: 2, status: 'Pendiente', grade: null, period: '2026' },
        { studentId: 1, subject: 'Ética y Responsabilidad Social', year: 3, status: 'Pendiente', grade: null, period: '—' },
        { studentId: 1, subject: 'Derecho y Legislación Laboral', year: 3, status: 'Pendiente', grade: null, period: '—' },
        { studentId: 1, subject: 'Redes y Comunicación', year: 3, status: 'Pendiente', grade: null, period: '—' },
        { studentId: 1, subject: 'Programación II', year: 3, status: 'Pendiente', grade: null, period: '—' },
        { studentId: 1, subject: 'Gestión de Proyectos de Software', year: 3, status: 'Pendiente', grade: null, period: '—' },
        { studentId: 1, subject: 'Bases de Datos II', year: 3, status: 'Pendiente', grade: null, period: '—' },
        { studentId: 1, subject: 'Prácticas Profesionalizantes II', year: 3, status: 'Pendiente', grade: null, period: '—' }
      ],
      teachers: [
        {
          id: 1, legajo: 'D-000147', name: 'Juan Pérez', dni: '28.456.781', cuil: '20-28456781-3',
          birthDate: '12/04/1982', email: 'docente@sie.edu.ar', phone: '+54 342 555-0187',
          address: 'Santa Fe (3000), Argentina', status: 'Activo', hireDate: '01/03/2016',
          title: 'Analista de Sistemas', institution: 'Universidad Tecnológica Nacional',
          graduationYear: '2008', area: 'Informática', academicStatus: 'Docente titular', accountStatus: 'Activa',
          courses: ['Programación I', 'Programación II', 'Base de Datos'],
          trajectory: [
            { period: '2016 - Actualidad', role: 'Docente titular', institution: 'Instituto Superior', detail: 'Programación I, Programación II y proyectos integradores.' },
            { period: '2011 - 2016', role: 'Analista funcional / capacitador', institution: 'Empresa de software regional', detail: 'Análisis funcional, documentación y capacitación de usuarios.' },
            { period: '2009 - 2011', role: 'Auxiliar docente', institution: 'Centro de formación técnica', detail: 'Introducción a la programación y herramientas informáticas.' }
          ]
        },
        {
          id: 2, legajo: 'D-000203', name: 'Ana Gómez', dni: '30.718.442', cuil: '27-30718442-5',
          birthDate: '08/09/1984', email: 'ana.gomez@escuela.edu.ar', phone: '+54 342 555-0244',
          address: 'Santa Fe (3000), Argentina', status: 'Activo', hireDate: '10/03/2018',
          title: 'Profesora en Matemática', institution: 'Instituto Superior del Profesorado',
          graduationYear: '2010', area: 'Matemática', academicStatus: 'Docente titular', accountStatus: 'Sin cuenta',
          courses: ['Matemática Discreta', 'Estadística'],
          trajectory: [
            { period: '2018 - Actualidad', role: 'Docente titular', institution: 'Instituto Superior', detail: 'Matemática Discreta y Estadística.' },
            { period: '2012 - 2018', role: 'Docente', institution: 'Escuela secundaria técnica', detail: 'Matemática y apoyo a proyectos interdisciplinarios.' }
          ]
        },
        {
          id: 3, legajo: 'D-000255', name: 'Martín López', dni: '32.104.995', cuil: '20-32104995-1',
          birthDate: '17/02/1987', email: 'martin.lopez@escuela.edu.ar', phone: '+54 342 555-0319',
          address: 'Santa Fe (3000), Argentina', status: 'Activo', hireDate: '05/08/2020',
          title: 'Técnico Superior en Análisis Funcional de Sistemas Informáticos',
          institution: 'Instituto Superior', graduationYear: '2012', area: 'Sistemas',
          academicStatus: 'Docente interino', accountStatus: 'Pendiente activación', courses: ['Base de Datos'],
          trajectory: [
            { period: '2020 - Actualidad', role: 'Docente interino', institution: 'Instituto Superior', detail: 'Base de Datos y tutorías técnicas.' },
            { period: '2013 - 2020', role: 'Analista de sistemas', institution: 'Sector privado', detail: 'Análisis, bases de datos y soporte a sistemas de gestión.' }
          ]
        }
      ],
      subjects: [
        { id: 1, name: 'Programación I', teacher: 'Juan Pérez', schedule: 'Lun y Mié 08:00 - 10:00', room: 'Aula 12', capacity: '12 / 30' },
        { id: 2, name: 'Matemática Discreta', teacher: 'Ana Gómez', schedule: 'Mar y Jue 10:00 - 12:00', room: 'Aula 08', capacity: '20 / 30' },
        { id: 3, name: 'Base de Datos', teacher: 'Martín López', schedule: 'Lun y Mié 14:00 - 16:00', room: 'Lab. Informática 2', capacity: '8 / 30' },
        { id: 4, name: 'Inglés Técnico I', teacher: 'Laura Silva', schedule: 'Vie 08:00 - 10:00', room: 'Aula 03', capacity: '15 / 30' },
        { id: 5, name: 'Redes de Computadoras', teacher: 'Santiago Roldán', schedule: 'Vie 18:00 - 21:00', room: 'Lab. 2', capacity: '5 / 25' }
      ],
      enrolled: [1, 2, 3],
      finals: [
        { subject: 'Problemáticas Socio Contemporáneas', date: '12/06/2026', time: '09:00', room: 'Aula 12' },
        { subject: 'Estadística', date: '14/06/2026', time: '10:00', room: 'Aula 08' }
      ],
      finalEnrollments: [],
      finalResults: [
        { studentId: 1, subject: 'Matemática', date: '18/02/2026', modality: 'Regular', grade: 8, result: 'Aprobado' },
        { studentId: 1, subject: 'Lógica y estructura de Datos', date: '22/07/2026', modality: 'Libre', grade: 5, result: 'Desaprobado' }
      ],
      specialExamRequests: [
        { id: 1, studentId: 2, reason: 'a', subjects: ['Práctica Profesionalizante II'], created: '15/04/2026', status: 'Pendiente', detail: 'Adeuda materias del último año para finalizar estudios.' }
      ],
      planning: [
        {
          id: 1, subject: 'Programación I', cycle: 2026, teacherId: 1, version: 2, status: 'Vigente', validFrom: '15/04/2026', changeReason: 'Se reprogramó la segunda evaluación y se incorporó una instancia de recuperación.',
          mode: 'Regular presencial', attendance: 75, minPassingGrade: 6,
          evaluations: [
            { name: 'Parcial 1', type: 'Parcial', date: '15/05/2026', required: true },
            { name: 'TP integrador', type: 'Trabajo práctico', date: '05/06/2026', required: true },
            { name: 'Parcial 2', type: 'Parcial', date: '26/06/2026', required: true },
            { name: 'Recuperatorio', type: 'Recuperatorio', date: '03/07/2026', required: false }
          ],
          promotion: { allPracticalWork: true, partialsApproved: true, minAverage: 8, integrativeGrade: 8 },
          freeExamMode: 'Examen final ante tribunal. Modalidad definida en la planificación y disponible para consulta institucional.'
        },
        { id: 2, subject: 'Programación I', cycle: 2026, teacherId: 1, version: 1, status: 'Histórica', validFrom: '01/03/2026', changeReason: 'Versión inicial de la planificación.', mode: 'Regular presencial', attendance: 75, minPassingGrade: 6, evaluations: [], promotion: { allPracticalWork: true, partialsApproved: true, minAverage: 8, integrativeGrade: 8 }, freeExamMode: 'Examen final ante tribunal.' }
      ],
      activities: [
        { id: 1, title: 'Guía práctica 1', subject: 'Programación I', course: 'Programación I · Ciclo 2026', due: '28/05/2026', status: 'Publicada' },
        { id: 2, title: 'Variables y tipos de datos', subject: 'Programación I', course: 'Programación I · Ciclo 2026', due: '03/06/2026', status: 'Publicada' }
      ],
      courseEnrollments: [
        { course: 'Programación I · Ciclo 2026', studentId: 1, status: 'Aceptada' },
        { course: 'Programación I · Ciclo 2026', studentId: 2, status: 'Aceptada' },
        { course: 'Programación I · Ciclo 2026', studentId: 3, status: 'Aceptada' },
        { course: 'Programación I · Ciclo 2026', studentId: 4, status: 'Aceptada' },
        { course: 'Programación I · Ciclo 2026', studentId: 5, status: 'Aceptada' }
      ],
      gradebook: [
        { activityId: 2, studentId: 1, grade: 8, observation: 'Buen trabajo' },
        { activityId: 2, studentId: 2, grade: 8, observation: 'Buen trabajo' },
        { activityId: 2, studentId: 3, grade: 7, observation: 'Revisar ejercicio 3' },
        { activityId: 2, studentId: 4, grade: 10, observation: 'Excelente' },
        { activityId: 2, studentId: 5, grade: 6, observation: 'Completar justificación' }
      ],
      teacherRequests: [
        { name: 'María Camila López', date: '20/05/2026' },
        { name: 'Juan Ramón Ortiz', date: '19/05/2026' },
        { name: 'Laura Gabriela Díaz', date: '18/05/2026' }
      ],
      forums: [
        {
          id: 1,
          title: 'Avisos generales',
          description: 'Novedades y comunicaciones importantes de Programación I.',
          type: 'Avisos',
          pinned: true,
          closed: false,
          author: 'Juan Pérez',
          created: '18/05/2026',
          posts: [
            { author: 'Juan Pérez', role: 'Docente', date: '18/05/2026 · 10:30', text: 'Bienvenidos al aula virtual. En este foro voy a publicar avisos importantes sobre clases, actividades y evaluaciones.' },
            { author: 'Juan Pérez', role: 'Docente', date: '20/05/2026 · 08:15', text: 'Ya está disponible el material de la Unidad 2 y el cuestionario de repaso.' }
          ]
        },
        {
          id: 2,
          title: 'Foro de consultas · Unidad 2',
          description: 'Espacio para dudas sobre condicionales, ciclos y ejercicios de la unidad.',
          type: 'Consultas',
          pinned: false,
          closed: false,
          author: 'Juan Pérez',
          created: '20/05/2026',
          posts: [
            { author: 'Lucía Martínez', role: 'Alumno', date: '20/05/2026 · 17:42', text: '¿En el ejercicio 4 se puede resolver con un while o tiene que ser necesariamente con for?' },
            { author: 'Juan Pérez', role: 'Docente', date: '20/05/2026 · 18:05', text: 'Se puede resolver con cualquiera de los dos. Lo importante es justificar por qué elegiste esa estructura.' },
            { author: 'María Camila López', role: 'Alumno', date: '21/05/2026 · 09:10', text: '¿El cuestionario entra como parte de la nota de la unidad?' }
          ]
        },
        {
          id: 3,
          title: 'Dudas sobre Trabajo Práctico 1',
          description: 'Consultas sobre la entrega de Variables y tipos de datos.',
          type: 'Actividad',
          pinned: false,
          closed: false,
          author: 'Juan Pérez',
          created: '22/05/2026',
          posts: [
            { author: 'Andrés Felipe Pérez', role: 'Alumno', date: '22/05/2026 · 12:20', text: '¿La entrega tiene que incluir el código y una breve explicación de cada ejercicio?' }
          ]
        }
      ],
      inventory: [
        { code: 'COMP-001', name: 'Laptop Lenovo ThinkPad E14', category: 'Computadoras', location: 'Lab. Informática 1', state: 'En uso', responsible: 'Carlos Méndez' },
        { code: 'PROY-002', name: 'Proyector Epson X41', category: 'Proyectores', location: 'Aula 203', state: 'Disponible', responsible: 'Ana Torres' },
        { code: 'IMPR-003', name: 'Impresora HP LaserJet', category: 'Impresoras', location: 'Secretaría', state: 'Mantenimiento', responsible: 'Marta Ruiz' },
        { code: 'ACC-004', name: 'Cable HDMI 5m', category: 'Accesorios', location: 'Almacén', state: 'Disponible', responsible: 'Administración' }
      ]
    };
    let session = null;
    let currentPage = '';


    function digitsOnly(input) { input.value = (input.value || '').replace(/\D/g, '') }

    function setFieldValidation(fieldId, errorId, message) {
      const field = document.getElementById(fieldId);
      const err = document.getElementById(errorId);
      if (!field || !err) return !message;
      field.classList.toggle('has-error', !!message);
      field.classList.toggle('is-valid', !message);
      err.textContent = message || '';
      const control = field.querySelector('input,select,textarea');
      if (control) control.setAttribute('aria-invalid', message ? 'true' : 'false');
      return !message;
    }

    function validCuil(cuil) {
      if (!/^\d{11}$/.test(cuil)) return false;
      const mult = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];
      const sum = mult.reduce((a, m, i) => a + m * Number(cuil[i]), 0);
      const mod = 11 - (sum % 11);
      const digit = mod === 11 ? 0 : mod === 10 ? 9 : mod;
      return digit === Number(cuil[10]);
    }

    function validateRegisterField(name) {
      const type = document.getElementById('regType')?.value || 'student';
      let v = '', msg = '';
      if (name === 'name') {
        v = (document.getElementById('regName')?.value || '').trim();
        if (!v) msg = 'Ingresá nombre y apellido.';
        else if (v.length < 5 || !/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ' -]+$/.test(v) || v.split(/\s+/).length < 2) msg = 'Ingresá al menos nombre y apellido, usando solo letras.';
        return setFieldValidation('fieldRegName', 'errRegName', msg);
      }
      if (name === 'dni') {
        v = document.getElementById('regDni')?.value || '';
        if (!/^\d{7,8}$/.test(v)) msg = 'El DNI debe tener 7 u 8 dígitos.';
        return setFieldValidation('fieldRegDni', 'errRegDni', msg);
      }
      if (name === 'cuil') {
        v = document.getElementById('regCuil')?.value || '';
        if (!/^\d{11}$/.test(v)) msg = 'El CUIL debe tener exactamente 11 dígitos.';
        else if (!validCuil(v)) msg = 'El CUIL ingresado no supera la validación del dígito verificador.';
        return setFieldValidation('fieldRegCuil', 'errRegCuil', msg);
      }
      if (name === 'phone') {
        v = (document.getElementById('regPhone')?.value || '').trim();
        const digits = v.replace(/\D/g, '');
        if (!v) msg = 'Ingresá un teléfono.';
        else if (digits.length < 10 || digits.length > 15) msg = 'El teléfono debe contener entre 10 y 15 dígitos.';
        return setFieldValidation('fieldRegPhone', 'errRegPhone', msg);
      }
      if (name === 'email') {
        v = (document.getElementById('regEmail')?.value || '').trim().toLowerCase();
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = 'Ingresá un correo electrónico válido.';
        else if (db.users.some(u => u.user.toLowerCase() === v)) msg = 'Ese correo ya está registrado.';
        return setFieldValidation('fieldRegEmail', 'errRegEmail', msg);
      }
      if (name === 'pass') {
        v = document.getElementById('regPass')?.value || '';
        if (v.length < 8) msg = 'La contraseña debe tener al menos 8 caracteres.';
        else if (!/[A-ZÁÉÍÓÚÑ]/.test(v)) msg = 'Agregá al menos una letra mayúscula.';
        else if (!/[a-záéíóúñ]/.test(v)) msg = 'Agregá al menos una letra minúscula.';
        else if (!/\d/.test(v)) msg = 'Agregá al menos un número.';
        return setFieldValidation('fieldRegPass', 'errRegPass', msg);
      }
      if (name === 'confirm') {
        v = document.getElementById('regConfirm')?.value || '';
        const p = document.getElementById('regPass')?.value || '';
        if (!v) msg = 'Confirmá la contraseña.';
        else if (v !== p) msg = 'Las contraseñas no coinciden.';
        return setFieldValidation('fieldRegConfirm', 'errRegConfirm', msg);
      }
      if (name === 'type') return true;
      if (name === 'title') {
        if (type !== 'teacher') { setFieldValidation('fieldRegTitle', 'errRegTitle', ''); return true }
        v = (document.getElementById('regTitle')?.value || '').trim();
        if (v.length < 3) msg = 'Ingresá tu título académico.';
        return setFieldValidation('fieldRegTitle', 'errRegTitle', msg);
      }
      if (name === 'institution') {
        if (type !== 'teacher') { setFieldValidation('fieldRegInstitution', 'errRegInstitution', ''); return true }
        v = (document.getElementById('regInstitution')?.value || '').trim();
        if (v.length < 3) msg = 'Ingresá la institución de egreso.';
        return setFieldValidation('fieldRegInstitution', 'errRegInstitution', msg);
      }
      if (name === 'gradYear') {
        if (type !== 'teacher') { setFieldValidation('fieldRegGradYear', 'errRegGradYear', ''); return true }
        v = document.getElementById('regGradYear')?.value || '';
        const year = Number(v), now = new Date().getFullYear();
        if (!/^\d{4}$/.test(v) || year < 1950 || year > now) msg = `Ingresá un año entre 1950 y ${now}.`;
        return setFieldValidation('fieldRegGradYear', 'errRegGradYear', msg);
      }
      if (name === 'area') {
        if (type !== 'teacher') { setFieldValidation('fieldRegArea', 'errRegArea', ''); return true }
        v = (document.getElementById('regArea')?.value || '').trim();
        if (v.length < 3) msg = 'Ingresá el área o campo de formación.';
        return setFieldValidation('fieldRegArea', 'errRegArea', msg);
      }
      return true;
    }

    function updatePasswordRules() {
      const p = document.getElementById('regPass')?.value || '';
      const rules = [
        ['ruleLength', p.length >= 8], ['ruleUpper', /[A-ZÁÉÍÓÚÑ]/.test(p)],
        ['ruleLower', /[a-záéíóúñ]/.test(p)], ['ruleNumber', /\d/.test(p)]
      ];
      rules.forEach(([id, ok]) => document.getElementById(id)?.classList.toggle('ok', ok));
    }

    function toggleTeacherRegistration() { }

    function registerAccount() {
      const fields = ['name', 'dni', 'cuil', 'phone', 'email', 'pass', 'confirm'];
      const ok = fields.map(validateRegisterField).every(Boolean);
      const terms = !!document.getElementById('regTerms')?.checked;
      const summary = document.getElementById('registerSummary');
      if (summary) summary.classList.toggle('show', !ok || !terms);
      if (!ok) { document.querySelector('#registerForm .has-error input')?.focus(); toast('Revisá los datos marcados en el formulario.'); return }
      if (!terms) { toast('Debés aceptar la declaración de datos para enviar la solicitud.'); return }
      const email = (document.getElementById('regEmail')?.value || '').trim().toLowerCase();
      if (db.accountRequests.some(r => r.email.toLowerCase() === email && r.status === 'Pendiente')) { toast('Ya existe una solicitud pendiente para ese correo.'); return }
      db.accountRequests.push({
        id: Math.max(0, ...db.accountRequests.map(r => r.id)) + 1,
        name: document.getElementById('regName').value.trim(), dni: document.getElementById('regDni').value,
        cuil: document.getElementById('regCuil').value, phone: document.getElementById('regPhone').value.trim(),
        email, date: 'Ahora', status: 'Pendiente'
      });
      toast('Solicitud enviada. La institución revisará el alta del estudiante.');
      showAuth('login');
    }

    function validateResetEmailField() {
      const v = (document.getElementById('resetEmail')?.value || '').trim();
      let msg = '';
      if (!v) msg = 'El correo electrónico es obligatorio.';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) msg = 'Ingresá un correo válido, por ejemplo nombre@correo.com.';
      return setFieldValidation('fieldResetEmail', 'errResetEmail', msg);
    }
    function validateReset() {
      const ok = validateResetEmailField();
      if (!ok) {
        document.getElementById('resetEmail')?.focus();
        return;
      }
      toast('Demostración: el correo es válido. El envío de un enlace de recuperación todavía no está conectado.');
    }

    function showAuth(type) {
      document.getElementById('publicSite').classList.add('hidden');
      document.getElementById('publicInfoView').classList.add('hidden');
      document.getElementById('appView').classList.add('hidden');
      document.getElementById('authView').classList.remove('hidden');
      document.getElementById('loginForm').classList.toggle('hidden', type !== 'login');
      document.getElementById('registerForm').classList.toggle('hidden', type !== 'register');
      document.getElementById('resetForm').classList.toggle('hidden', type !== 'reset');
      if (type === 'register') { toggleTeacherRegistration(); updatePasswordRules() }
    }
    function backPublic() {
      showPublicHome();
    }
    function login() {
      const u = document.getElementById('loginUser').value.trim();
      const p = document.getElementById('loginPass').value;
      if (!u) { toast('Ingresá tu usuario o correo.'); document.getElementById('loginUser').focus(); return }
      if (!p) { toast('Ingresá tu contraseña.'); document.getElementById('loginPass').focus(); return }
      const found = db.users.find(x => x.user.toLowerCase() === u.toLowerCase() && x.pass === p);
      if (!found) { toast('Usuario o contraseña incorrectos.'); return }
      session = { user: found.user, name: found.name, role: found.role };
      localStorage.setItem('sieSession', JSON.stringify(session));
      openApp();
    }
    function logout() {
      localStorage.removeItem('sieSession'); session = null;
      document.getElementById('appView').classList.add('hidden');
      document.getElementById('authView').classList.add('hidden');
      document.getElementById('publicInfoView').classList.add('hidden');
      document.getElementById('publicSite').classList.remove('hidden');
    }
    function openApp() {
      document.getElementById('publicSite').classList.add('hidden');
      document.getElementById('publicInfoView').classList.add('hidden');
      document.getElementById('authView').classList.add('hidden');
      document.getElementById('appView').classList.remove('hidden');
      document.getElementById('userName').textContent = session.name;
      document.getElementById('userRole').textContent = roleName(session.role);
      document.getElementById('roleLabel').textContent = roleName(session.role);
      document.getElementById('avatar').textContent = session.name[0];
      buildMenu();
      route(session.role === 'admin' ? 'admin-home' : session.role === 'teacher' ? 'teacher-home' : 'student-home');
    }
    function roleName(r) { return r === 'student' ? 'Alumno' : r === 'teacher' ? 'Docente' : 'Administrador' }
    function buildMenu() {
      const menus = {
        student: [
          ['student-home', '⌂', 'Inicio'], ['student-enroll', '▤', 'Inscribirme a materias'], ['student-subjects', '▣', 'Mis materias'],
          ['student-history', '▥', 'Historial académico'], ['student-finals', '▧', 'Exámenes finales'], ['student-classroom', '▱', 'Aula virtual'], ['student-forums', '◌', 'Foros'], ['student-grades', '▥', 'Calificaciones'], ['student-profile', '♙', 'Mi perfil']
        ],
        teacher: [
          ['teacher-home', '⌂', 'Inicio'], ['teacher-courses', '▣', 'Mis materias'], ['teacher-classroom', '▱', 'Aula virtual'], ['teacher-planning', '▤', 'Planificación'], ['teacher-forums', '◌', 'Foros'],
          ['teacher-activities', '▧', 'Actividades'], ['teacher-grades', '☆', 'Calificaciones'], ['teacher-attendance', '✓', 'Asistencia'], ['teacher-profile', '♙', 'Mi perfil docente']
        ],
        admin: [
          ['admin-home', '⌂', 'Panel de control'], ['admin-account-requests', '▧', 'Solicitudes de registro'], ['admin-students', '♙', 'Alumnos'], ['admin-teachers', '♟', 'Docentes'], ['admin-careers', '▣', 'Carreras y planes'],
          ['admin-enrollments', '▤', 'Inscripciones'], ['admin-finals', '▧', 'Exámenes finales'], ['admin-inventory', '◇', 'Inventario'], ['admin-reports', '▥', 'Reportes']
        ]
      };
      document.getElementById('roleMenu').innerHTML = menus[session.role].map(([id, icon, label]) => `<button data-route="${id}" onclick="route('${id}')"><i class="menu-icon">${icon}</i><span>${label}</span></button>`).join('');
    }
    function route(page) {
      currentPage = page;
      document.querySelectorAll('#roleMenu button').forEach(b => b.classList.toggle('active', b.dataset.route === page));
      const renderers = {
        'student-home': studentHome, 'student-enroll': studentEnroll, 'student-subjects': studentSubjects, 'student-history': studentHistory, 'student-finals': studentFinals, 'student-classroom': studentClassroom, 'student-forums': studentForums, 'student-grades': studentGrades, 'student-profile': studentProfile,
        'teacher-home': teacherHome, 'teacher-courses': teacherCourses, 'teacher-classroom': teacherClassroom, 'teacher-planning': teacherPlanning, 'teacher-forums': teacherForums, 'teacher-activities': teacherActivities, 'teacher-grades': teacherGrades, 'teacher-attendance': teacherAttendance, 'teacher-profile': teacherProfile,
        'admin-home': adminHome, 'admin-account-requests': adminAccountRequests, 'admin-students': adminStudents, 'admin-teachers': adminTeachers, 'admin-careers': adminCareers, 'admin-enrollments': adminEnrollments, 'admin-finals': adminFinals, 'admin-inventory': adminInventory, 'admin-reports': adminReports
      };
      const renderer = renderers[page];
      if (typeof renderer !== 'function') {
        setPage('Sección no disponible', 'La pantalla solicitada no pudo cargarse.', '<div class="note">Ruta: ' + page + '</div>');
        return;
      }
      renderer();
    }
    function setPage(title, subtitle, html) {
      document.getElementById('topTitle').textContent = title;
      document.getElementById('pageContent').innerHTML = `<div class="page-title"><div><h1>${title}</h1><p>${subtitle || ''}</p></div></div>${html}`;
    }
    function subjectRows(subjects, action = '') {
      return subjects.map(s => `<tr><td><b>${s.name}</b></td><td>${s.teacher}</td><td>${s.schedule}</td><td>${s.room}</td><td>${s.capacity}</td>${action ? `<td>${action.replaceAll('{id}', s.id).replaceAll('{name}', s.name)}</td>` : ''}</tr>`).join('');
    }

    function currentStudent() { return db.students.find(s => (s.email || '').toLowerCase() === session.user.toLowerCase()) || db.students[0] }
    function careerForStudent(student) { return publicAcademic.careers.find(c => c.id === student.careerId) }
    function planForStudent(student) { const career = careerForStudent(student); return career?.plan ? publicAcademic.plans[career.plan] : null }
    function generatedAcademicHistory(student) {
      const plan = planForStudent(student); if (!plan) return [];
      const rows = []; let pendingPrevious = student.previousPending || 0;
      plan.years.forEach((y, idx) => {
        const year = idx + 1;
        y.subjects.forEach((sub, subIdx) => {
          let status = 'Pendiente', grade = null, period = '—';
          if (year < student.currentYear) {
            if (pendingPrevious > 0 && subIdx < pendingPrevious) { status = 'Libre'; period = String(2025) }
            else { status = 'Aprobada'; grade = 6 + ((student.id + subIdx) % 4); period = String(year === 1 ? 2025 : 2026) }
          } else if (year === student.currentYear) {
            status = subIdx < 3 ? 'Cursando' : subIdx < 5 ? 'Regularizada' : 'Pendiente'; period = '2026';
          }
          rows.push({ studentId: student.id, subject: sub[0], year, status, grade, period });
        });
      });
      return rows;
    }
    function studentHistoryRecords(student) {
      const explicit = db.academicHistory.filter(h => h.studentId === student.id);
      return explicit.length ? explicit : generatedAcademicHistory(student);
    }
    function academicSummary(student) {
      const plan = planForStudent(student), history = studentHistoryRecords(student);
      const total = plan ? plan.years.reduce((a, y) => a + y.subjects.length, 0) : history.length;
      const approved = history.filter(h => h.status === 'Aprobada').length, free = history.filter(h => h.status === 'Libre').length;
      const regularized = history.filter(h => h.status === 'Regularizada').length, current = history.filter(h => h.status === 'Cursando').length;
      const remaining = Math.max(0, total - approved), activeYears = history.filter(h => ['Cursando', 'Regularizada'].includes(h.status)).map(h => h.year);
      const currentYear = activeYears.length ? Math.max(...activeYears) : 1, repeatPrevious = history.filter(h => h.status === 'Libre' && h.year < currentYear);
      const progress = total ? Math.round(approved * 100 / total) : 0;
      return { total, approved, free, regularized, current, remaining, currentYear, repeatPrevious, progress };
    }
    function academicStateClass(status) { if (status === 'Aprobada') return 'ac-approved'; if (status === 'Libre') return 'ac-free'; if (status === 'Regularizada') return 'ac-regular'; if (status === 'Cursando') return 'ac-current'; return 'ac-pending' }
    function academicYearLabel(n) { return n === 1 ? 'Primer año' : n === 2 ? 'Segundo año' : n === 3 ? 'Tercer año' : `${n}.º año` }
    function academicSituationText(summary) { return summary.repeatPrevious.length ? `Cursa materias de ${academicYearLabel(summary.currentYear).toLowerCase()} y debe recursar ${summary.repeatPrevious.length} materia${summary.repeatPrevious.length > 1 ? 's' : ''} de año anterior.` : `Trayecto activo en ${academicYearLabel(summary.currentYear).toLowerCase()}, sin materias libres de años anteriores.` }
    function studentHistory() {
      const st = currentStudent(), career = careerForStudent(st), plan = planForStudent(st), history = studentHistoryRecords(st), sum = academicSummary(st);
      setPage('Historial académico', 'Tu avance real dentro del plan de estudios.', `
    <div class="academic-meta-grid">
      <section class="academic-info-card"><h3>Trayectoria actual</h3>
        <div class="academic-info-row"><span>Carrera</span><b>${career?.name || 'Sin carrera asignada'}</b></div>
        <div class="academic-info-row"><span>Plan</span><b>${plan?.acronym || '—'} · ${plan?.curriculum || 'Sin datos'}</b></div>
        <div class="academic-info-row"><span>Año de ingreso</span><b>${st.entryYear}</b></div>
        <div class="academic-info-row"><span>Año de avance</span><b>${academicYearLabel(sum.currentYear)}</b></div>
      </section>
      <section class="academic-info-card"><h3>Situación académica</h3><p class="muted" style="line-height:1.65;margin:0">${academicSituationText(sum)}</p>${sum.repeatPrevious.length ? `<div class="academic-alert"><b>Debe recursar:</b> ${sum.repeatPrevious.map(x => x.subject).join(', ')}.</div>` : ''}</section>
    </div>
    <div class="academic-summary">
      <div class="academic-kpi"><small>Plan completo</small><b>${sum.total}</b><span>materias</span></div>
      <div class="academic-kpi"><small>Aprobadas</small><b>${sum.approved}</b><span>con final/promoción aprobada</span></div>
      <div class="academic-kpi"><small>Libres</small><b>${sum.free}</b><span>deben regularizarse nuevamente</span></div>
      <div class="academic-kpi"><small>Le quedan</small><b>${sum.remaining}</b><span>pendientes de aprobación</span></div>
      <div class="academic-kpi"><small>Avance</small><b>${sum.progress}%</b><span>del plan aprobado</span></div>
    </div>
    <div class="academic-progress-wrap"><div style="display:flex;justify-content:space-between;gap:12px"><b>Progreso del plan de estudios</b><span class="muted">${sum.approved} de ${sum.total} aprobadas</span></div><div class="academic-progress"><div style="width:${sum.progress}%"></div></div></div>
    ${(plan?.years || []).map((y, idx) => { const year = idx + 1, planSubjects = y.subjects.map(s => s[0]); const rows = planSubjects.map(name => { const r = history.find(h => h.subject === name) || { status: 'Pendiente', grade: null, period: '—' }; return `<tr><td><b>${name}</b></td><td><span class="ac-state ${academicStateClass(r.status)}">${r.status}</span></td><td>${r.grade ?? '—'}</td><td>${r.period || '—'}</td><td>${r.status === 'Libre' ? 'Debe recursar' : r.status === 'Regularizada' ? 'Puede rendir final si cumple correlativas' : r.status === 'Cursando' ? 'Cursado vigente' : r.status === 'Aprobada' ? 'Materia finalizada' : 'Todavía no aprobada'}</td></tr>` }).join(''); const approvedYear = history.filter(h => h.year === year && h.status === 'Aprobada').length; return `<section class="academic-year"><div class="academic-year-head"><h3>${y.title}</h3><span class="muted">${approvedYear} aprobadas de ${planSubjects.length}</span></div><div class="table-wrap"><table><thead><tr><th>Materia</th><th>Estado</th><th>Nota final</th><th>Período</th><th>Situación</th></tr></thead><tbody>${rows}</tbody></table></div></section>` }).join('')}
  `)
    }

    function studentHome() {
      const enrolled = db.subjects.filter(s => db.enrolled.includes(s.id)); const st = currentStudent(), sum = academicSummary(st), career = careerForStudent(st);
      setPage('Inicio', 'Tu espacio académico, simple y sin sobrecarga.', `
    <div class="welcome"><div><h2 style="font-size:28px;margin:0 0 10px">Hola, ${session.name}</h2><p class="muted">${career?.name || ''} · ${academicYearLabel(sum.currentYear)} · Ingreso ${st.entryYear}</p>
      <div class="simple-grid"><div class="quick"><b>${sum.approved}/${sum.total}</b><p>Materias aprobadas</p></div><div class="quick"><b>${sum.remaining}</b><p>Materias pendientes</p></div><div class="quick"><b>${sum.free}</b><p>Materias libres</p></div></div>
      <div style="margin-top:14px"><button class="btn btn-outline" onclick="route('student-history')">Ver historial académico</button></div></div><div class="welcome-art"></div></div>
    <div class="two-col" style="margin-top:18px"><div class="card card-pad"><div class="section-head"><h3>Próximas clases</h3></div>${enrolled.slice(0, 3).map(s => `<div class="assignment"><b>${s.name}</b><div class="meta">${s.schedule} · ${s.room}</div></div>`).join('')}</div><div class="card card-pad"><h3>Situación académica</h3><p>${academicSituationText(sum)}</p>${sum.repeatPrevious.length ? `<div class="note"><b>A recursar:</b> ${sum.repeatPrevious.map(x => x.subject).join(', ')}</div>` : ''}</div></div>`)
    }
    function studentEnroll() {
      const available = db.subjects;
      setPage('Inscripción a materias', 'Seleccioná las materias que querés cursar este período.', `
    <div class="two-col">
      <div class="card card-pad">
        <div class="section-head"><h3>Materias disponibles</h3><span class="status ok">Período abierto</span></div>
        <div class="toolbar" style="margin-bottom:14px"><select><option>Tecnicatura Superior en Desarrollo de Software</option></select><select><option>2.º año</option></select><input placeholder="Buscar materia o docente..."></div>
        <div class="table-wrap"><table><thead><tr><th>Materia</th><th>Docente</th><th>Horario</th><th>Aula</th><th>Cupos</th><th></th></tr></thead><tbody>
        ${subjectRows(available, `<button class="btn btn-outline" onclick="toggleEnroll({id})">${db.enrolled.includes(1) ? 'Seleccionar' : 'Seleccionar'}</button>`)}
        </tbody></table></div>
      </div>
      <div class="card card-pad right-panel"><h3>Materias seleccionadas</h3><div id="selectedSubjects">${renderSelectedSubjects()}</div><button class="btn btn-primary" style="width:100%;margin-top:14px" onclick="toast('Inscripción confirmada correctamente.')">Confirmar inscripción</button></div>
    </div>`);
    }
    function renderSelectedSubjects() {
      const arr = db.subjects.filter(s => db.enrolled.includes(s.id));
      return arr.length ? arr.map(s => `<div class="subject"><div><b>${s.name}</b><small>${s.schedule}</small></div><button class="btn btn-danger" onclick="toggleEnroll(${s.id})">Quitar</button></div>`).join('') : `<div class="empty">Todavía no seleccionaste materias.</div>`;
    }
    function toggleEnroll(id) {
      if (db.enrolled.includes(id)) db.enrolled = db.enrolled.filter(x => x !== id); else db.enrolled.push(id);
      studentEnroll(); toast('Selección actualizada.');
    }
    function studentSubjects() {
      const arr = db.subjects.filter(s => db.enrolled.includes(s.id));
      setPage('Mis materias', 'Consultá las materias en las que estás inscripta este cuatrimestre.', `
    <div class="card card-pad"><div class="subject-list">${arr.map(s => `<div class="subject">
      <div class="subject-main"><div class="subject-icon">📘</div><div><b>${s.name}</b><small>${s.teacher} · ${s.schedule} · ${s.room}</small></div></div>
      <div><span class="status ok">Inscripta</span> <button class="btn btn-outline" onclick="route('student-classroom')">Aula virtual</button></div>
    </div>`).join('')}</div></div>`);
    }
    function currentStudentFinalEligibility(f) {
      const st = currentStudent(), history = studentHistoryRecords(st), planId = st.careerId;
      const rec = history.find(h => normalizeAcademicName(h.subject) === normalizeAcademicName(f.subject));
      const regular = rec?.status === 'Regularizada';
      const free = rec?.status === 'Libre' && (f.format || 'Materia') === 'Materia';
      const correlatives = finalCorrelativesMet(planId, f.subject, history);
      return { eligible: (regular || free) && correlatives, condition: regular ? 'Regular' : free ? 'Libre' : 'No habilitado', correlatives };
    }
    function studentFinals(view = 'ordinary') {
      const st = currentStudent(), today = '01/06/2026';
      const tabs = `<div class="tabs-lite"><button class="${view === 'ordinary' ? 'active' : ''}" onclick="studentFinals('ordinary')">Mesas ordinarias</button><button class="${view === 'results' ? 'active' : ''}" onclick="studentFinals('results')">Resultados</button><button class="${view === 'special' ? 'active' : ''}" onclick="studentFinals('special')">Mesas especiales</button></div>`;
      if (view === 'results') {
        const rows = db.finalResults.filter(r => r.studentId === st.id);
        setPage('Exámenes finales', 'Resultados de mesas y notas finales registradas.', `${tabs}<div class="card card-pad"><div class="section-head"><h3>Resultados</h3></div><div class="table-wrap"><table><thead><tr><th>Materia</th><th>Fecha</th><th>Condición</th><th>Nota</th><th>Resultado</th></tr></thead><tbody>${rows.length ? rows.map(r => `<tr><td><b>${r.subject}</b></td><td>${r.date}</td><td>${r.modality}</td><td><span class="result-grade">${r.grade}</span></td><td><span class="status ${r.result === 'Aprobado' ? 'ok' : 'warn'}">${r.result}</span></td></tr>`).join('') : '<tr><td colspan="5"><div class="empty">Todavía no hay resultados publicados.</div></td></tr>'}</tbody></table></div><div class="note" style="margin-top:14px">Cuando un final queda aprobado, el historial académico se actualiza automáticamente en la materia correspondiente, aunque sea de un año anterior.</div></div>`); return;
      }
      if (view === 'special') {
        const my = db.specialExamRequests.filter(x => x.studentId === st.id);
        setPage('Mesas especiales', 'Solicitud excepcional de mesa examinadora conforme al Art. 40 del RAM.', `${tabs}<div class="special-grid"><section class="special-card"><h3>Nueva solicitud</h3><div class="rule-banner">La mesa especial no se crea automáticamente. El sistema verifica requisitos preliminares; el Administrador académico gestiona la solicitud y registra la decisión de la autoridad institucional.</div><div class="field"><label>Motivo</label><select id="specialReason"><option value="a">Adeudo hasta 2 materias del último año para finalizar estudios</option><option value="b">Enfermedad, causa grave familiar/laboral u otro motivo justificado</option><option value="c">Caducidad del plan de estudios</option><option value="d">Adeudo hasta 2 unidades requeridas para Taller/Práctica Profesionalizante</option></select></div><div class="field"><label>Materia/s solicitada/s</label><input id="specialSubjects" placeholder="Ej.: Programación II"></div><div class="field"><label>Justificación / observaciones</label><textarea id="specialDetail" placeholder="Describí el motivo. Para el inciso b deberá adjuntarse respaldo en la implementación real."></textarea></div><div class="note">La solicitud debe presentarse con 15 días de anticipación. Las mesas especiales se establecen en mayo, septiembre o cuando lo determine el calendario jurisdiccional.</div><button class="btn btn-primary" style="margin-top:12px" onclick="submitSpecialExamRequest()">Enviar solicitud</button></section><section class="special-card"><h3>Mis solicitudes</h3>${my.length ? my.map(x => `<div class="assignment"><b>${x.subjects.join(', ')}</b><div class="meta">${x.created} · Motivo ${x.reason.toUpperCase()}</div><div style="margin-top:7px"><span class="status ${x.status === 'Aprobada' ? 'ok' : 'warn'}">${x.status}</span></div></div>`).join('') : '<div class="empty">No tenés solicitudes de mesa especial.</div>'}</section></div>`); return;
      }
      const listed = db.finals.map(f => ({ ...f, ...currentStudentFinalEligibility(f) }));
      setPage('Exámenes finales', 'Las mesas son programadas por la institución según el calendario académico. Luego el sistema valida si vos podés inscribirte.', `${tabs}<div class="two-col"><div class="card card-pad"><div class="section-head"><h3>Mesas programadas</h3><span class="status ok">Calendario institucional 2026</span></div><div class="note" style="margin-bottom:14px">La existencia de una mesa no depende del alumno ni del docente. La institución la programa. Para inscribirte se valida tu condición (regular o libre cuando corresponda), las correlatividades y que el período de inscripción esté abierto.</div><div class="table-wrap"><table><thead><tr><th>Materia</th><th>Fecha</th><th>Hora</th><th>Aula</th><th>Tu condición</th><th>Acción</th></tr></thead><tbody>${listed.map(f => { const enrolled = db.finalEnrollments.includes(f.subject); return `<tr><td><b>${f.subject}</b></td><td>${f.date}</td><td>${f.time}</td><td>${f.room}</td><td><span class="status ${f.eligible ? 'ok' : 'warn'}">${f.condition}</span></td><td>${f.eligible ? `<button class="btn ${enrolled ? 'btn-danger' : 'btn-outline'}" onclick="toggleFinalEnrollment('${f.subject}')">${enrolled ? 'Cancelar inscripción' : 'Inscribirme'}</button>` : `<button class="btn btn-outline" disabled>No habilitado</button>`}</td></tr>` }).join('')}</tbody></table></div></div><div class="card card-pad right-panel"><h3>Reglas principales</h3><div class="assignment">✓ Mesa incluida en calendario institucional</div><div class="assignment">✓ Período de inscripción vigente</div><div class="assignment">✓ Correlatividades aprobadas</div><div class="assignment">✓ Regularidad vigente o condición libre admitida por el formato</div><div class="note" style="margin-top:12px">No existe límite de cupos para rendir finales.</div></div></div>`);
    }
    function submitSpecialExamRequest() { const reason = document.getElementById('specialReason')?.value || 'a', subjects = (document.getElementById('specialSubjects')?.value || '').split(',').map(x => x.trim()).filter(Boolean), detail = (document.getElementById('specialDetail')?.value || '').trim(); if (!subjects.length || !detail) { toast('Completá materia/s y justificación.'); return } db.specialExamRequests.unshift({ id: Math.max(0, ...db.specialExamRequests.map(x => x.id)) + 1, studentId: currentStudent().id, reason, subjects, created: new Date().toLocaleDateString('es-AR'), status: 'Pendiente', detail }); studentFinals('special'); toast('Solicitud enviada para revisión institucional.') }

    function toggleFinalEnrollment(subject) { if (db.finalEnrollments.includes(subject)) { db.finalEnrollments = db.finalEnrollments.filter(x => x !== subject); toast(`Se canceló la inscripción a ${subject}.`) } else { db.finalEnrollments.push(subject); toast(`Inscripción a ${subject} registrada.`) } studentFinals() }
    function studentClassroom() {
      setPage('Aula virtual · Programación I', 'Curso organizado con una estructura tipo Moodle: secciones, materiales, tareas, foros y calificaciones.', `
  <div class="moodle-header">
    <div class="moodle-title"><div class="moodle-mark">M</div><div><h2 style="margin:0">Programación I</h2><div class="muted">Tecnicatura Superior en Desarrollo de Software · Ciclo 2026 · Docente: Juan Pérez</div></div></div>
    <div class="moodle-tabs"><button class="active">Curso</button><button onclick="showTeacherParticipants()">Participantes</button><button onclick="route('student-grades')">Calificaciones</button><button>Competencias</button></div>
  </div>
  <div class="moodle-course">
    <aside class="moodle-nav"><h4>Navegación del curso</h4><button class="active">General</button><button>Unidad 1</button><button>Unidad 2</button><button>Unidad 3</button><button>Evaluaciones</button><button onclick="route('student-forums')">Foro de consultas</button></aside>
    <section>
      <div class="moodle-section"><div class="moodle-section-title">General</div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-forum">💬</div><div><b>Foro de avisos</b><div class="muted">Comunicaciones del docente</div></div></div><button class="btn btn-outline" onclick="openStudentForum(1)">Entrar</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-url">🔗</div><div><b>Programa de la materia</b><div class="muted">Documento institucional</div></div></div><button class="btn btn-outline">Abrir</button></div>
      </div>
      <div class="moodle-section"><div class="moodle-section-title">Unidad 1 · Introducción a la programación</div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-pdf">PDF</div><div><b>Introducción a la programación</b><div class="muted">Archivo PDF · 1,2 MB</div></div></div><button class="btn btn-outline">Abrir</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-url">▶</div><div><b>Video · Primeros pasos</b><div class="muted">15 minutos</div></div></div><button class="btn btn-outline">Ver</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-task">✓</div><div><b>Actividad 1 · Variables y tipos de datos</b><div class="muted">Entrega: 28/05/2026 · Individual</div></div></div><button class="btn btn-primary" onclick="toast('Entrega abierta en el prototipo.')">Entregar</button></div>
      </div>
      <div class="moodle-section"><div class="moodle-section-title">Unidad 2 · Estructuras de control</div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-pdf">PDF</div><div><b>Condicionales y ciclos</b><div class="muted">Material de lectura</div></div></div><button class="btn btn-outline">Abrir</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-quiz">?</div><div><b>Cuestionario de repaso</b><div class="muted">10 preguntas · 2 intentos</div></div></div><button class="btn btn-primary">Intentar</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-forum">💬</div><div><b>Foro de consultas</b><div class="muted">Dudas sobre la unidad</div></div></div><button class="btn btn-outline" onclick="openStudentForum(2)">Entrar</button></div>
      </div>
    </section>
    <aside class="moodle-side"><h4>Próximos eventos</h4><ul><li><b>28 MAY</b><br>Entrega Actividad 1</li><li><b>03 JUN</b><br>Cuestionario Unidad 2</li><li><b>12 JUN</b><br>Parcial</li></ul><h4 style="margin-top:18px">Progreso del curso</h4><div class="moodle-progress"><span></span></div><small class="muted">62% completado</small><h4 style="margin-top:18px">Avisos</h4><ul><li>Nueva videoclase disponible</li><li>Foro de consultas habilitado</li></ul></aside>
  </div>`);
    }

    function forumCount(f) { return f.posts.length }
    function forumLastPost(f) { return f.posts.length ? f.posts[f.posts.length - 1] : 'Sin mensajes' }

    function studentForums() {
      setPage('Foros · Programación I', 'Participá en consultas, avisos y conversaciones de la materia.', `
    <div class="forum-shell">
      <section class="forum-list">
        ${db.forums.map(f => `
          <article class="forum-card">
            <div class="forum-card-head">
              <div>
                <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:8px">
                  ${f.pinned ? '<span class="forum-badge pinned">📌 Fijado</span>' : ''}
                  <span class="forum-badge ${f.closed ? 'closed' : ''}">${f.closed ? 'Cerrado' : f.type}</span>
                </div>
                <h3>${f.title}</h3>
                <p>${f.description}</p>
              </div>
            </div>
            <div class="forum-meta">
              <span>💬 ${forumCount(f)} mensajes</span>
              <span>👤 Creado por ${f.author}</span>
              <span>🕘 Último: ${forumLastPost(f).date || ''}</span>
            </div>
            <div class="forum-actions">
              <button class="btn btn-outline" onclick="openStudentForum(${f.id})">Entrar al foro</button>
            </div>
          </article>`).join('')}
      </section>
      <aside class="forum-side-card">
        <h3>Foros del curso</h3>
        <div class="assignment"><b>${db.forums.length} foros</b><div class="meta">Programación I</div></div>
        <div class="assignment"><b>${db.forums.reduce((a, f) => a + f.posts.length, 0)} mensajes</b><div class="meta">Actividad total</div></div>
        <button class="btn btn-primary" style="width:100%;margin-top:8px" onclick="newStudentForum()">Crear una consulta</button>
        <button class="btn btn-outline" style="width:100%;margin-top:8px" onclick="route('student-classroom')">Volver al aula virtual</button>
      </aside>
    </div>`);
    }

    function openStudentForum(id) {
      const f = db.forums.find(x => x.id === id); if (!f) return;
      setPage(f.title, 'Foro de Programación I', `
    <div class="topic-head">
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        ${f.pinned ? '<span class="forum-badge pinned">📌 Fijado</span>' : ''}
        <span class="forum-badge ${f.closed ? 'closed' : ''}">${f.closed ? 'Cerrado' : f.type}</span>
      </div>
      <h2>${f.title}</h2><p class="muted">${f.description}</p>
      <div class="forum-meta"><span>Creado por ${f.author}</span><span>${f.created}</span><span>${f.posts.length} mensajes</span></div>
    </div>
    <div>
      ${f.posts.map(p => `
        <article class="topic-post">
          <div class="topic-post-head"><div class="topic-user"><div class="topic-avatar">${p.author[0]}</div><div><b>${p.author}</b><div class="muted">${p.role}</div></div></div><small class="muted">${p.date}</small></div>
          <div class="topic-post-body">${p.text}</div>
        </article>`).join('')}
    </div>
    ${f.closed ? '<div class="note">Este foro está cerrado. No se pueden publicar nuevas respuestas.</div>' : `
      <div class="topic-reply-box">
        <h3>Responder</h3>
        <textarea id="studentForumReply" placeholder="Escribí tu respuesta..."></textarea>
        <div style="display:flex;gap:8px;margin-top:10px">
          <button class="btn btn-primary" onclick="studentForumReply(${f.id})">Publicar respuesta</button>
          <button class="btn btn-outline" onclick="studentForums()">Volver a foros</button>
        </div>
      </div>`}
  `);
    }

    function studentForumReply(id) {
      const f = db.forums.find(x => x.id === id);
      const el = document.getElementById('studentForumReply');
      const text = (el?.value || '').trim();
      if (!text) { toast('Escribí una respuesta antes de publicar.'); return }
      f.posts.push({ author: session.name, role: 'Alumno', date: 'Ahora', text });
      openStudentForum(id); toast('Respuesta publicada.');
    }

    function newStudentForum() {
      setPage('Nueva consulta', 'Creá un nuevo tema de consulta para Programación I.', `
    <div class="forum-new-form">
      <div class="field"><label>Título</label><input id="newStudentForumTitle" placeholder="Ej.: Duda sobre el ejercicio 5"></div>
      <div class="field"><label>Mensaje</label><textarea id="newStudentForumText" placeholder="Explicá tu consulta..."></textarea></div>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" onclick="createStudentForum()">Publicar consulta</button>
        <button class="btn btn-outline" onclick="studentForums()">Cancelar</button>
      </div>
    </div>`);
    }

    function createStudentForum() {
      const title = (document.getElementById('newStudentForumTitle')?.value || '').trim();
      const text = (document.getElementById('newStudentForumText')?.value || '').trim();
      if (!title || !text) { toast('Completá el título y el mensaje.'); return }
      const id = Math.max(0, ...db.forums.map(f => f.id)) + 1;
      db.forums.unshift({ id, title, description: 'Consulta creada por un estudiante.', type: 'Consultas', pinned: false, closed: false, author: session.name, created: 'Ahora', posts: [{ author: session.name, role: 'Alumno', date: 'Ahora', text }] });
      openStudentForum(id); toast('Consulta creada.');
    }

    function teacherForums() {
      setPage('Foros · Programación I', 'Creá, moderá y administrá los espacios de conversación del curso.', `
    <div class="forum-shell">
      <section class="forum-list">
        ${db.forums.map(f => `
          <article class="forum-card">
            <div class="forum-card-head">
              <div>
                <div style="display:flex;gap:7px;flex-wrap:wrap;margin-bottom:8px">
                  ${f.pinned ? '<span class="forum-badge pinned">📌 Fijado</span>' : ''}
                  <span class="forum-badge ${f.closed ? 'closed' : ''}">${f.closed ? 'Cerrado' : f.type}</span>
                </div>
                <h3>${f.title}</h3>
                <p>${f.description}</p>
              </div>
            </div>
            <div class="forum-meta">
              <span>💬 ${f.posts.length} mensajes</span>
              <span>👤 ${f.author}</span>
              <span>🕘 ${forumLastPost(f).date || ''}</span>
            </div>
            <div class="forum-actions">
              <button class="btn btn-outline" onclick="openTeacherForum(${f.id})">Abrir / moderar</button>
              <button class="btn btn-outline" onclick="toggleForumPin(${f.id})">${f.pinned ? 'Desfijar' : 'Fijar'}</button>
              <button class="btn ${f.closed ? 'btn-green' : 'btn-danger'}" onclick="toggleForumClosed(${f.id})">${f.closed ? 'Reabrir' : 'Cerrar'}</button>
            </div>
          </article>`).join('')}
      </section>
      <aside class="forum-side-card">
        <h3>Gestión de foros</h3>
        <button class="btn btn-primary" style="width:100%" onclick="newTeacherForum()">+ Crear foro</button>
        <button class="btn btn-outline" style="width:100%;margin-top:8px" onclick="route('teacher-classroom')">Volver al aula virtual</button>
        <div class="assignment" style="margin-top:18px"><b>${db.forums.filter(f => !f.closed).length} abiertos</b><div class="meta">Disponibles para participar</div></div>
        <div class="assignment"><b>${db.forums.reduce((a, f) => a + f.posts.length, 0)} mensajes</b><div class="meta">Actividad total</div></div>
      </aside>
    </div>`);
    }

    function openTeacherForum(id) {
      const f = db.forums.find(x => x.id === id); if (!f) return;
      setPage(f.title, 'Moderación del foro · Programación I', `
    <div class="topic-head">
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
        ${f.pinned ? '<span class="forum-badge pinned">📌 Fijado</span>' : ''}
        <span class="forum-badge ${f.closed ? 'closed' : ''}">${f.closed ? 'Cerrado' : f.type}</span>
      </div>
      <h2>${f.title}</h2><p class="muted">${f.description}</p>
      <div class="forum-actions">
        <button class="btn btn-outline" onclick="toggleForumPin(${f.id});openTeacherForum(${f.id})">${f.pinned ? 'Desfijar' : 'Fijar foro'}</button>
        <button class="btn ${f.closed ? 'btn-green' : 'btn-danger'}" onclick="toggleForumClosed(${f.id});openTeacherForum(${f.id})">${f.closed ? 'Reabrir foro' : 'Cerrar foro'}</button>
        <button class="btn btn-outline" onclick="teacherForums()">Volver</button>
      </div>
    </div>
    ${f.posts.map((p, i) => `
      <article class="topic-post">
        <div class="topic-post-head">
          <div class="topic-user"><div class="topic-avatar">${p.author[0]}</div><div><b>${p.author}</b><div class="muted">${p.role}</div></div></div>
          <div style="display:flex;align-items:center;gap:8px"><small class="muted">${p.date}</small>${p.role !== 'Docente' ? `<button class="btn btn-danger" onclick="deleteForumPost(${f.id},${i})">Eliminar</button>` : ''}</div>
        </div>
        <div class="topic-post-body">${p.text}</div>
      </article>`).join('')}
    <div class="topic-reply-box">
      <h3>Responder como docente</h3>
      <textarea id="teacherForumReply" placeholder="Escribí una respuesta..."></textarea>
      <button class="btn btn-primary" style="margin-top:10px" onclick="teacherForumReply(${f.id})">Publicar respuesta</button>
    </div>
  `);
    }

    function teacherForumReply(id) {
      const f = db.forums.find(x => x.id === id);
      const text = (document.getElementById('teacherForumReply')?.value || '').trim();
      if (!text) { toast('Escribí una respuesta antes de publicar.'); return }
      f.posts.push({ author: session.name, role: 'Docente', date: 'Ahora', text });
      openTeacherForum(id); toast('Respuesta publicada.');
    }

    function newTeacherForum() {
      setPage('Crear foro', 'Configurá un nuevo foro para Programación I.', `
    <div class="forum-new-form">
      <div class="field"><label>Nombre del foro</label><input id="teacherForumTitle" placeholder="Ej.: Consultas Unidad 3"></div>
      <div class="field"><label>Tipo</label><select id="teacherForumType"><option>Consultas</option><option>Avisos</option><option>Debate</option><option>Actividad</option></select></div>
      <div class="field"><label>Descripción</label><textarea id="teacherForumDesc" placeholder="Indicá el objetivo del foro..."></textarea></div>
      <label style="display:flex;align-items:center;gap:8px;margin:10px 0 18px"><input id="teacherForumPinned" type="checkbox"> Fijar este foro</label>
      <div style="display:flex;gap:8px"><button class="btn btn-primary" onclick="createTeacherForum()">Crear foro</button><button class="btn btn-outline" onclick="teacherForums()">Cancelar</button></div>
    </div>`);
    }

    function createTeacherForum() {
      const title = (document.getElementById('teacherForumTitle')?.value || '').trim();
      const desc = (document.getElementById('teacherForumDesc')?.value || '').trim();
      const type = document.getElementById('teacherForumType')?.value || 'Consultas';
      const pinned = !!document.getElementById('teacherForumPinned')?.checked;
      if (!title || !desc) { toast('Completá nombre y descripción.'); return }
      const id = Math.max(0, ...db.forums.map(f => f.id)) + 1;
      db.forums.unshift({ id, title, description: desc, type, pinned, closed: false, author: session.name, created: 'Ahora', posts: [{ author: session.name, role: 'Docente', date: 'Ahora', text: 'Foro creado. Pueden comenzar a participar.' }] });
      openTeacherForum(id); toast('Foro creado.');
    }

    function toggleForumPin(id) {
      const f = db.forums.find(x => x.id === id); if (!f) return;
      f.pinned = !f.pinned; toast(f.pinned ? 'Foro fijado.' : 'Foro desfijado.');
      if (currentPage === 'teacher-forums') teacherForums();
    }

    function toggleForumClosed(id) {
      const f = db.forums.find(x => x.id === id); if (!f) return;
      f.closed = !f.closed; toast(f.closed ? 'Foro cerrado.' : 'Foro reabierto.');
      if (currentPage === 'teacher-forums') teacherForums();
    }

    function deleteForumPost(forumId, index) {
      const f = db.forums.find(x => x.id === forumId); if (!f) return;
      f.posts.splice(index, 1); openTeacherForum(forumId); toast('Mensaje eliminado.');
    }


    function studentGrades() {
      setPage('Calificaciones', 'Notas publicadas por tus docentes.', `
  <div class="card card-pad"><table><thead><tr><th>Materia</th><th>Actividad</th><th>Nota</th><th>Estado</th></tr></thead><tbody>
    <tr><td>Programación I</td><td>Variables y tipos de datos</td><td><b>8</b></td><td><span class="status ok">Aprobada</span></td></tr>
    <tr><td>Matemática Discreta</td><td>Trabajo práctico 1</td><td><b>7</b></td><td><span class="status ok">Aprobada</span></td></tr>
    <tr><td>Base de Datos</td><td>Modelo relacional</td><td><b>—</b></td><td><span class="status warn">Pendiente</span></td></tr>
  </tbody></table></div>`);
    }
    function studentPhotoKey() { return `sieStudentPhoto:${session.user}` }
    function studentPhotoKeyFor(email) { return `sieStudentPhoto:${email}` }
    function studentPhotoData() { return localStorage.getItem(studentPhotoKey()) || '' }
    function selectStudentPhoto() { document.getElementById('studentPhotoInput')?.click() }
    function previewStudentPhoto(input) { const file = input.files?.[0]; if (!file) return; if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) { toast('La foto debe ser JPG, PNG o WEBP.'); input.value = ''; return } if (file.size > 2 * 1024 * 1024) { toast('La foto no puede superar los 2 MB.'); input.value = ''; return } const reader = new FileReader(); reader.onload = () => { localStorage.setItem(studentPhotoKey(), reader.result); studentProfile(); toast('Foto de perfil actualizada.') }; reader.readAsDataURL(file) }
    function removeStudentPhoto() { localStorage.removeItem(studentPhotoKey()); studentProfile(); toast('Foto de perfil eliminada.') }
    function setProfileFieldState(id, errorId, message) { const el = document.getElementById(id), err = document.getElementById(errorId); if (!el || !err) return !message; el.classList.toggle('invalid-control', !!message); el.classList.toggle('valid-control', !message); err.textContent = message || ''; return !message }
    function validateStudentProfile() {
      const name = (document.getElementById('profileName')?.value || '').trim(), email = (document.getElementById('profileEmail')?.value || '').trim(), phone = (document.getElementById('profilePhone')?.value || '').trim(), address = (document.getElementById('profileAddress')?.value || '').trim();
      const r = [];
      r.push(setProfileFieldState('profileName', 'profileNameError', !name ? 'El nombre y apellido es obligatorio.' : (!/^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ\' -]{5,80}$/.test(name) || name.split(/\s+/).length < 2 ? 'Ingresá nombre y apellido válidos.' : '')));
      r.push(setProfileFieldState('profileEmail', 'profileEmailError', !email ? 'El correo es obligatorio.' : (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? 'Ingresá un correo válido.' : '')));
      const digits = phone.replace(/\D/g, ''); r.push(setProfileFieldState('profilePhone', 'profilePhoneError', !phone ? 'El teléfono es obligatorio.' : (digits.length < 10 || digits.length > 15 ? 'Debe contener entre 10 y 15 dígitos.' : '')));
      r.push(setProfileFieldState('profileAddress', 'profileAddressError', !address ? 'El domicilio es obligatorio.' : (address.length < 5 ? 'Ingresá un domicilio válido.' : '')));
      return r.every(Boolean);
    }
    function saveStudentProfile() {
      if (!validateStudentProfile()) { toast('Revisá los campos obligatorios.'); document.querySelector('.invalid-control')?.focus(); return }
      const st = currentStudent();
      st.name = document.getElementById('profileName').value.trim(); st.email = document.getElementById('profileEmail').value.trim(); st.phone = document.getElementById('profilePhone').value.trim(); st.address = document.getElementById('profileAddress').value.trim();
      session.name = st.name; session.user = st.email; localStorage.setItem('sieSession', JSON.stringify(session)); document.getElementById('userName').textContent = session.name; document.getElementById('avatar').textContent = session.name[0];
      toast('Perfil actualizado correctamente.'); studentProfile();
    }
    function studentProfile() {
      const st = currentStudent(), career = careerForStudent(st), sum = academicSummary(st), photo = studentPhotoData(), initials = st.name.split(/\s+/).map(x => x[0]).slice(0, 2).join('');
      setPage('Mi perfil', 'Datos personales y académicos.', `
    <div class="student-profile-head"><div class="student-photo">${photo ? `<img src="${photo}" alt="Foto de perfil">` : initials}</div><div class="student-profile-name"><h2>${st.name}</h2><p>${st.legajo} · ${career?.name || ''}</p><div class="student-photo-actions"><input id="studentPhotoInput" type="file" accept="image/jpeg,image/png,image/webp" class="hidden" onchange="previewStudentPhoto(this)"><button class="btn btn-outline" onclick="selectStudentPhoto()">${photo ? 'Cambiar foto' : 'Cargar foto'}</button>${photo ? '<button class="btn btn-danger" onclick="removeStudentPhoto()">Quitar foto</button>' : ''}</div><div class="profile-photo-help">Opcional · JPG, PNG o WEBP · máximo 2 MB.</div></div></div>
    <div class="profile-grid"><section class="profile-card"><h3>Datos personales</h3>
      <div class="form-row"><div class="field"><label>Nombre y apellido<span class="required-mark">*</span></label><input id="profileName" required maxlength="80" value="${st.name}" onblur="validateStudentProfile()"><div id="profileNameError" class="profile-error"></div></div><div class="field"><label>Legajo</label><input value="${st.legajo}" disabled></div></div>
      <div class="form-row"><div class="field"><label>DNI</label><input value="${st.dni || ''}" disabled></div><div class="field"><label>CUIL</label><input value="${st.cuil || ''}" disabled></div></div>
      <div class="form-row"><div class="field"><label>Correo<span class="required-mark">*</span></label><input id="profileEmail" type="email" required maxlength="100" value="${st.email}" onblur="validateStudentProfile()"><div id="profileEmailError" class="profile-error"></div></div><div class="field"><label>Teléfono<span class="required-mark">*</span></label><input id="profilePhone" required maxlength="18" value="${st.phone || ''}" onblur="validateStudentProfile()"><div id="profilePhoneError" class="profile-error"></div></div></div>
      <div class="field"><label>Domicilio<span class="required-mark">*</span></label><input id="profileAddress" required maxlength="120" value="${st.address || ''}" onblur="validateStudentProfile()"><div id="profileAddressError" class="profile-error"></div></div>
      <div class="note" style="margin-bottom:12px">Los campos marcados con * son obligatorios. DNI, CUIL y legajo son datos institucionales y no se modifican desde el perfil.</div>
      <button class="btn btn-primary" onclick="saveStudentProfile()">Guardar cambios</button></section>
      <section class="profile-card"><h3>Datos académicos</h3><div class="academic-info-row"><span>Carrera</span><b>${career?.name || '—'}</b></div><div class="academic-info-row"><span>Ciclo lectivo</span><b>2026</b></div><div class="academic-info-row"><span>Año de ingreso</span><b>${st.entryYear}</b></div><div class="academic-info-row"><span>Año de avance</span><b>${academicYearLabel(sum.currentYear)}</b></div><div class="academic-info-row"><span>Aprobadas</span><b>${sum.approved} de ${sum.total}</b></div><div class="academic-info-row"><span>Pendientes</span><b>${sum.remaining}</b></div><div style="margin-top:15px"><button class="btn btn-outline" onclick="route('student-history')">Abrir historial académico</button></div></section></div>`)
    }

    function teacherById(id) { return db.teachers.find(t => t.id === Number(id)) }
    function currentTeacher() { return db.teachers.find(t => t.email.toLowerCase() === session.user.toLowerCase()) || db.teachers[0] }

    function teacherDetailHtml(t, context = 'teacher') {
      return `
    <div class="teacher-detail-head">
      <div class="teacher-ident">
        <div class="teacher-avatar-lg">${t.name.split(' ').map(x => x[0]).slice(0, 2).join('')}</div>
        <div><h2>${t.name}</h2><p>${t.legajo} · ${t.academicStatus} · ${t.area}</p></div>
      </div>
      <span class="status ok">${t.status}</span>
    </div>

    <div class="teacher-detail-grid">
      <section class="teacher-info-card">
        <h3>Datos personales</h3>
        <div class="teacher-info-list">
          <div class="teacher-info-item"><small>DNI</small><b>${t.dni}</b></div>
          <div class="teacher-info-item"><small>CUIL</small><b>${t.cuil}</b></div>
          <div class="teacher-info-item"><small>Fecha de nacimiento</small><b>${t.birthDate}</b></div>
          <div class="teacher-info-item"><small>Correo</small><b>${t.email}</b></div>
          <div class="teacher-info-item"><small>Teléfono</small><b>${t.phone}</b></div>
          <div class="teacher-info-item"><small>Domicilio</small><b>${t.address}</b></div>
        </div>
      </section>

      <section class="teacher-info-card">
        <h3>Datos académicos</h3>
        <div class="teacher-info-list">
          <div class="teacher-info-item"><small>Título</small><b>${t.title}</b></div>
          <div class="teacher-info-item"><small>Institución de egreso</small><b>${t.institution}</b></div>
          <div class="teacher-info-item"><small>Año de egreso</small><b>${t.graduationYear}</b></div>
          <div class="teacher-info-item"><small>Área</small><b>${t.area}</b></div>
          <div class="teacher-info-item"><small>Ingreso a la institución</small><b>${t.hireDate}</b></div>
          <div class="teacher-info-item"><small>Situación</small><b>${t.academicStatus}</b></div>
        </div>
      </section>

      <section class="teacher-info-card full">
        <h3>Materias y cursos asignados</h3>
        <div>${t.courses.map(c => `<span class="teacher-course-chip">${c}</span>`).join('')}</div>
      </section>

      <section class="teacher-info-card full">
        <h3>Trayectoria profesional y académica</h3>
        <div class="trajectory">
          ${t.trajectory.map(x => `<div class="trajectory-item"><b>${x.period} · ${x.role}</b><span>${x.institution}</span><span>${x.detail}</span></div>`).join('')}
        </div>
      </section>
    </div>`;
    }

    function adminTeacherDetail(id) {
      const t = teacherById(id); if (!t) return;
      setPage('Ficha del docente', 'Información personal, académica y trayectoria registrada.', `
    <div style="margin-bottom:14px"><button class="btn btn-outline" onclick="adminTeachers()">← Volver a docentes</button></div>
    ${teacherDetailHtml(t, 'admin')}
  `);
    }

    function teacherProfile() {
      const t = currentTeacher();
      setPage('Mi perfil docente', 'Datos personales, académicos, materias asignadas y trayectoria profesional.', `
    <div class="teacher-profile-note data-origin"><b>Origen de estos datos:</b> la ficha institucional del docente administrada desde Administración → Docentes. Las materias asignadas provienen de DOCENTE_MATERIA para el ciclo lectivo vigente.</div>
    ${teacherDetailHtml(t, 'teacher')}
    <div style="margin-top:16px"><button class="btn btn-outline" onclick="route('teacher-classroom')">Ir al aula virtual</button></div>
  `);
    }


    function activePlanning() { return db.planning.find(p => p.subject === 'Programación I' && p.status === 'Vigente') || db.planning[0] }
    function teacherPlanning() {
      const p = activePlanning();
      setPage('Planificación docente', 'Configuración de la cursada dentro de los límites establecidos por el RAM y la normativa institucional.', `
    <div class="rule-banner"><b>Reglas que el docente no puede alterar:</b> escala de 1 a 10, aprobación mínima 6, límites normativos de asistencia, régimen de alumno libre y condiciones mínimas de promoción directa. La planificación define las instancias concretas de la materia sin contradecir esas reglas.</div>
    <div class="plan-grid">
      <section class="plan-card"><h3>Planificación vigente</h3>
        <div class="field"><label>Materia</label><input value="${p.subject}" disabled></div>
        <div class="form-row"><div class="field"><label>Ciclo lectivo</label><input value="${p.cycle}" disabled></div><div class="field"><label>Versión</label><input value="${p.version}" disabled></div></div>
        <div class="field"><label>Modalidad de cursada</label><select id="planMode"><option ${p.mode === 'Regular presencial' ? 'selected' : ''}>Regular presencial</option><option ${p.mode === 'Regular semipresencial' ? 'selected' : ''}>Regular semipresencial</option></select></div>
        <div class="normative-lock"><b>Asistencia:</b> la planificación puede documentar el régimen aplicado, pero no reducir los mínimos normativos. Presencial: mínimo 75 %. Semipresencial: mínimo 40 %.</div>
      </section>
      <section class="plan-card"><h3>Promoción directa · mínimos normativos</h3>
        <div class="academic-info-row"><span>Trabajos prácticos</span><b>100 % entregados en tiempo y forma</b></div>
        <div class="academic-info-row"><span>Parciales</span><b>Aprobados</b></div>
        <div class="academic-info-row"><span>Promedio final</span><b>8 o más</b></div>
        <div class="academic-info-row"><span>Instancia final integradora</span><b>8 o más</b></div>
        <div class="academic-info-row"><span>Nota mínima general</span><b>6</b></div>
      </section>
      <section class="plan-card full"><div class="section-head"><h3>Instancias de evaluación definidas por el docente</h3><button class="btn btn-outline" onclick="addPlanningEvaluation()">+ Agregar instancia</button></div><div id="planningEvals">${planningEvalRows(p)}</div></section>
      <section class="plan-card"><h3>Examen para alumno libre</h3><div class="field"><label>Modalidad prevista</label><textarea id="freeExamMode">${p.freeExamMode}</textarea></div><div class="normative-lock">Solo puede aplicarse a unidades cuyo formato admita condición libre. Talleres, Seminarios, Trabajo de Campo, Módulos, Laboratorio y Proyecto quedan excluidos.</div></section>
      <section class="plan-card"><h3>Guardar modificación</h3><div class="field"><label>Motivo del cambio</label><textarea id="planningReason" placeholder="Explicá qué se modifica y por qué"></textarea></div><button class="btn btn-primary" onclick="savePlanningVersion()">Guardar como nueva versión</button></section>
      <section class="plan-card full"><h3>Historial de versiones</h3>${db.planning.filter(x => x.subject === 'Programación I').sort((a, b) => b.version - a.version).map(x => `<div class="plan-version"><div><b>Versión ${x.version} · ${x.status}</b><small>Desde ${x.validFrom} · ${x.changeReason}</small></div><span class="status ${x.status === 'Vigente' ? 'ok' : ''}">${x.status}</span></div>`).join('')}</section>
    </div>`);
    }
    function planningEvalRows(p) { return p.evaluations.map((e, i) => `<div class="eval-row"><div class="field"><label>Instancia</label><input id="peName${i}" value="${e.name}"></div><div class="field"><label>Tipo</label><select id="peType${i}"><option ${e.type === 'Parcial' ? 'selected' : ''}>Parcial</option><option ${e.type === 'Trabajo práctico' ? 'selected' : ''}>Trabajo práctico</option><option ${e.type === 'Recuperatorio' ? 'selected' : ''}>Recuperatorio</option><option ${e.type === 'Coloquio' ? 'selected' : ''}>Coloquio</option><option ${e.type === 'Instancia integradora' ? 'selected' : ''}>Instancia integradora</option></select></div><div class="field"><label>Fecha</label><input id="peDate${i}" type="date" value="${e.date.split('/').reverse().join('-')}"></div><button class="btn btn-danger" onclick="removePlanningEvaluation(${i})">Quitar</button></div>`).join('') }
    function addPlanningEvaluation() { const p = activePlanning(); p.evaluations.push({ name: 'Nueva instancia', type: 'Trabajo práctico', date: '01/08/2026', required: true }); teacherPlanning() }
    function removePlanningEvaluation(i) { const p = activePlanning(); p.evaluations.splice(i, 1); teacherPlanning() }
    function savePlanningVersion() { const p = activePlanning(), reason = (document.getElementById('planningReason')?.value || '').trim(); if (!reason) { toast('Indicá el motivo de la modificación.'); return } p.status = 'Histórica'; const next = { ...p, id: Math.max(...db.planning.map(x => x.id)) + 1, version: p.version + 1, status: 'Vigente', validFrom: new Date().toLocaleDateString('es-AR'), changeReason: reason, evaluations: p.evaluations.map((e, i) => ({ name: document.getElementById(`peName${i}`)?.value || e.name, type: document.getElementById(`peType${i}`)?.value || e.type, date: (document.getElementById(`peDate${i}`)?.value || '2026-08-01').split('-').reverse().join('/'), required: e.required })), freeExamMode: document.getElementById('freeExamMode')?.value || p.freeExamMode }; db.planning.unshift(next); teacherPlanning(); toast('Nueva versión de la planificación guardada. La versión anterior quedó conservada.') }

    function teacherHome() {
      const participants = db.courseEnrollments.filter(x => x.course === 'Programación I · Ciclo 2026' && x.status === 'Aceptada').length;
      setPage('Inicio', 'Un resumen simple de tu actividad docente.', `
    <div class="welcome"><div><h2 style="font-size:28px;margin:0 0 10px">Hola, ${session.name}</h2><p class="muted">Tus alumnos del aula virtual provienen de las inscripciones académicas aceptadas; no se habilitan manualmente desde el aula.</p>
      <div class="simple-grid"><div class="quick"><b>3 materias</b><p>Asignadas en 2026</p></div><div class="quick"><b>${participants}</b><p>Participantes en Programación I</p></div><div class="quick"><b>10 entregas</b><p>Pendientes de corrección</p></div></div>
    </div><div class="welcome-art"></div></div>
    <div class="two-col" style="margin-top:18px"><div class="card card-pad"><h3>Próximas clases</h3><div class="assignment"><b>Programación I</b><div class="meta">Lunes · 10:00 · Aula A-203</div></div><div class="assignment"><b>Programación II</b><div class="meta">Miércoles · 18:00 · Lab. 2</div></div></div>
    <div class="card card-pad"><h3>Accesos rápidos</h3><button class="btn btn-outline" onclick="route('teacher-planning')">Editar planificación</button> <button class="btn btn-outline" onclick="route('teacher-activities')">Crear actividad</button> <button class="btn btn-outline" onclick="route('teacher-profile')">Mi información docente</button></div></div>`);
    }
    function teacherCourses() {
      setPage('Mis materias', 'Materias asignadas para el ciclo lectivo 2026.', `
  <div class="card card-pad"><div class="subject-list">
    <div class="subject"><div class="subject-main"><div class="subject-icon">💻</div><div><b>Programación I</b><small>1.er semestre · 32 estudiantes · Aula A-203 · Ciclo 2026</small></div></div><button class="btn btn-outline" onclick="route('teacher-classroom')">Abrir aula</button></div>
    <div class="subject"><div class="subject-main"><div class="subject-icon">🧩</div><div><b>Programación II</b><small>2.º semestre · 28 estudiantes · Lab. 2 · Ciclo 2026</small></div></div><button class="btn btn-outline">Abrir aula</button></div>
  </div></div>`);
    }

    function showTeacherParticipants() { const rows = db.courseEnrollments.filter(x => x.course === 'Programación I · Ciclo 2026' && x.status === 'Aceptada').map(x => db.students.find(s => s.id === x.studentId)).filter(Boolean); setPage('Participantes · Programación I', 'Listado derivado de inscripciones académicas aceptadas para la materia en el ciclo 2026.', `<div class="card card-pad"><div class="rule-banner"><b>Fuente:</b> INSCRIPCION_MATERIA aceptada. El docente no agrega ni elimina manualmente estudiantes del aula virtual.</div><div class="table-wrap"><table><thead><tr><th>Legajo</th><th>Estudiante</th><th>Correo</th><th>Estado académico</th><th>Acceso al aula</th></tr></thead><tbody>${rows.map(s => `<tr><td>${s.legajo}</td><td><b>${s.name}</b></td><td>${s.email}</td><td><span class="status ok">Inscripción aceptada</span></td><td><span class="status ok">Habilitado</span></td></tr>`).join('')}</tbody></table></div><button class="btn btn-outline" style="margin-top:14px" onclick="route('teacher-classroom')">← Volver al aula</button></div>`) }

    function teacherClassroom() {
      setPage('Aula virtual docente · Programación I', 'Gestión de la materia con estructura tipo Moodle. El acceso de estudiantes se deriva de la inscripción académica aceptada.', `
  <div class="moodle-header">
    <div class="moodle-title"><div class="moodle-mark">M</div><div><h2 style="margin:0">Programación I</h2><div class="muted">1.er semestre · Tecnicatura Superior en Desarrollo de Software · 5 estudiantes</div></div></div>
    <div class="moodle-tabs"><button class="active">Curso</button><button>Participantes</button><button onclick="route('teacher-grades')">Calificaciones</button><button>Competencias</button><button onclick="route('teacher-profile')">Mi perfil docente</button></div>
  </div>
  <div class="moodle-course">
    <aside class="moodle-nav"><h4>Navegación</h4><button class="active">General</button><button>Unidad 1</button><button>Unidad 2</button><button>Unidad 3</button><button>Evaluaciones</button><button onclick="route('teacher-forums')">Foro de consultas</button></aside>
    <section>
      <div class="teacher-profile-shortcut">
        <div><b>Información docente</b><div class="muted" style="font-size:12px">Consultá tus datos personales, académicos y trayectoria.</div></div>
        <button class="btn btn-outline" onclick="route('teacher-profile')">Ver mi información</button>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:8px;margin-bottom:10px"><button class="btn btn-outline" onclick="toast('Material cargado.')">Subir material</button><button class="btn moodle-edit" onclick="route('teacher-activities')">Crear actividad</button></div>
      <div class="moodle-section"><div class="moodle-section-title">General</div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-forum">💬</div><div><b>Foro de avisos</b><div class="muted">Publicá comunicaciones generales</div></div></div><button class="btn btn-outline" onclick="openTeacherForum(1)">Gestionar foro</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-url">🔗</div><div><b>Programa de la materia</b><div class="muted">Documento institucional</div></div></div><button class="btn btn-outline">Editar</button></div>
      </div>
      <div class="moodle-section"><div class="moodle-section-title">Unidad 1 · Introducción a la programación</div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-pdf">PDF</div><div><b>Introducción a la programación</b><div class="muted">PDF · visible para estudiantes</div></div></div><button class="btn btn-outline">Editar</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-task">✓</div><div><b>Actividad 1 · Variables y tipos de datos</b><div class="muted">18 entregas · vence 28/05/2026</div></div></div><button class="btn btn-outline" onclick="route('teacher-grades')">Calificar</button></div>
      </div>
      <div class="moodle-section"><div class="moodle-section-title">Unidad 2 · Estructuras de control</div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-pdf">PDF</div><div><b>Condicionales y ciclos</b><div class="muted">Material de lectura</div></div></div><button class="btn btn-outline">Editar</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-quiz">?</div><div><b>Cuestionario de repaso</b><div class="muted">10 preguntas</div></div></div><button class="btn btn-outline">Configurar</button></div>
        <div class="moodle-resource"><div class="moodle-resource-main"><div class="moodle-res-icon res-forum">💬</div><div><b>Foro de consultas</b><div class="muted">12 mensajes</div></div></div><button class="btn btn-outline" onclick="openTeacherForum(2)">Moderar</button></div>
      </div>
      <button class="btn moodle-edit" onclick="toast('Modo edición activado.')">Activar edición</button>
    </section>
    <aside class="moodle-side"><h4>Próxima clase</h4><ul><li><b>Lunes 20 de mayo</b><br>10:00 · Aula A-203</li></ul><h4 style="margin-top:18px">Pendientes</h4><ul><li>10 entregas por corregir</li><li>3 solicitudes de inscripción</li><li>2 mensajes sin responder</li></ul><h4 style="margin-top:18px">Curso</h4><ul><li>32 participantes</li><li>3 unidades publicadas</li><li>4 actividades</li></ul></aside>
  </div>`);
    }
    function teacherRequests() { setPage('Participantes', 'El acceso al aula virtual no se aprueba manualmente por el docente.', `<div class="card card-pad"><div class="rule-banner"><b>Regla:</b> los participantes se obtienen de INSCRIPCION_MATERIA aceptadas para la materia y el ciclo lectivo. El docente no acepta ni rechaza accesos desde el aula.</div><button class="btn btn-outline" onclick="showTeacherParticipants()">Ver participantes habilitados</button></div>`) }
    function removeRequest() { toast('El acceso se gestiona desde la inscripción académica, no desde el aula virtual.') }
    function teacherActivities() {
      setPage('Actividades', 'Creá y publicá tareas, trabajos prácticos o evaluaciones.', `
  <div class="two-col"><div class="card card-pad"><h3>Nueva actividad</h3>
  <div class="field"><label>Título</label><input id="actTitle" placeholder="Ej.: Trabajo práctico 2"></div>
  <div class="form-row"><div class="field"><label>Tipo</label><select><option>Tarea</option><option>Trabajo práctico</option><option>Evaluación</option></select></div><div class="field"><label>Fecha de entrega</label><input type="date"></div></div>
  <div class="field"><label>Descripción</label><textarea placeholder="Consigna..."></textarea></div><button class="btn btn-primary" onclick="createActivity()">Publicar actividad</button>
  </div><div class="card card-pad"><h3>Actividades publicadas</h3><div id="teacherActList">${db.activities.map(a => `<div class="assignment"><b>${a.title}</b><div class="meta">${a.due}</div></div>`).join('')}</div></div></div>`);
    }

    function createActivity() { const t = document.getElementById('actTitle').value.trim() || 'Nueva actividad'; db.activities.unshift({ title: t, subject: 'Programación I', due: 'Sin fecha', status: 'Pendiente' }); teacherActivities(); toast('Actividad publicada.') }
    function courseStudents(course) { return db.courseEnrollments.filter(e => e.course === course && e.status === 'Aceptada').map(e => db.students.find(s => s.id === e.studentId)).filter(Boolean) }
    function gradeRecord(activityId, studentId) { return db.gradebook.find(g => g.activityId === activityId && g.studentId === studentId) }
    function renderTeacherGrades(activityId = 2) {
      const activity = db.activities.find(a => a.id === Number(activityId)) || db.activities[0], students = courseStudents(activity.course);
      setPage('Calificaciones', 'Cargá y validá las notas de los estudiantes con inscripción académica aceptada en la materia.', `
    <div class="card card-pad">
      <div class="data-origin"><b>¿De dónde salen los alumnos?</b> De las <b>inscripciones aceptadas</b> de ${activity.course}. La actividad seleccionada proviene del <b>Aula Virtual</b>. El docente solo califica a estudiantes con INSCRIPCION_MATERIA aceptada para esa materia y ciclo.</div>
      <div class="grade-toolbar"><div class="field grade-source-select"><label>Actividad a calificar<span class="required-mark">*</span></label><select id="gradeActivity" onchange="renderTeacherGrades(this.value)">${db.activities.filter(a => a.subject === 'Programación I').map(a => `<option value="${a.id}" ${a.id === activity.id ? 'selected' : ''}>${a.title}</option>`).join('')}</select></div><div><span class="cycle-badge">Ciclo lectivo 2026</span></div></div>
      <div class="section-head"><h3>${activity.course} · ${activity.title}</h3><button class="btn btn-primary" onclick="saveTeacherGrades(${activity.id})">Guardar notas</button></div>
      <div class="table-wrap"><table><thead><tr><th>Legajo</th><th>Estudiante</th><th>Nota *</th><th>Observaciones *</th></tr></thead><tbody>
      ${students.map(st => { const g = gradeRecord(activity.id, st.id) || {}; return `<tr id="gradeRow${st.id}"><td>${st.legajo}</td><td><b>${st.name}</b></td><td><input id="grade${st.id}" class="grade-input" type="number" min="1" max="10" step="0.01" required value="${g.grade ?? ''}" oninput="validateGradeRow(${st.id})"><div id="gradeErr${st.id}" class="grade-error"></div></td><td><input id="obs${st.id}" class="grade-observation" required maxlength="180" value="${g.observation || ''}" oninput="validateGradeRow(${st.id})"><div id="obsErr${st.id}" class="grade-error"></div></td></tr>` }).join('')}
      </tbody></table></div>
    </div>`);
    }
    function validateGradeRow(studentId) {
      const gradeEl = document.getElementById(`grade${studentId}`), obsEl = document.getElementById(`obs${studentId}`), gErr = document.getElementById(`gradeErr${studentId}`), oErr = document.getElementById(`obsErr${studentId}`), row = document.getElementById(`gradeRow${studentId}`);
      if (!gradeEl || !obsEl) return false; const raw = gradeEl.value.trim(), grade = Number(raw), obs = obsEl.value.trim();
      const gradeMsg = !raw ? 'La nota es obligatoria.' : (!Number.isFinite(grade) || grade < 1 || grade > 10 ? 'Debe ser un número entre 1 y 10.' : '');
      const obsMsg = !obs ? 'La observación es obligatoria.' : (obs.length < 3 ? 'Ingresá una observación válida.' : '');
      gradeEl.classList.toggle('invalid-control', !!gradeMsg); obsEl.classList.toggle('invalid-control', !!obsMsg); gradeEl.classList.toggle('valid-control', !gradeMsg); obsEl.classList.toggle('valid-control', !obsMsg); gErr.textContent = gradeMsg; oErr.textContent = obsMsg; row?.classList.toggle('grade-row-error', !!gradeMsg || !!obsMsg); return !gradeMsg && !obsMsg;
    }
    function saveTeacherGrades(activityId) {
      const activity = db.activities.find(a => a.id === Number(activityId)); if (!activity) return; const students = courseStudents(activity.course); const ok = students.map(st => validateGradeRow(st.id)).every(Boolean); if (!ok) { toast('Revisá las notas y observaciones obligatorias.'); document.querySelector('.invalid-control')?.focus(); return }
      students.forEach(st => { const grade = Number(document.getElementById(`grade${st.id}`).value), observation = document.getElementById(`obs${st.id}`).value.trim(); let rec = gradeRecord(activity.id, st.id); if (rec) { rec.grade = grade; rec.observation = observation } else db.gradebook.push({ activityId: activity.id, studentId: st.id, grade, observation }) }); toast('Notas guardadas correctamente.'); renderTeacherGrades(activity.id);
    }
    function teacherGrades() { renderTeacherGrades(2) }

    function teacherAttendance() {
      setPage('Asistencia', 'Registrá la asistencia de tus clases.', `
  <div class="card card-pad"><div class="section-head"><h3>Programación I · 20/05/2026</h3><button class="btn btn-primary" onclick="toast('Asistencia guardada.')">Guardar</button></div>
  <table><thead><tr><th>Estudiante</th><th>Presente</th><th>Ausente</th></tr></thead><tbody>${['María Camila López', 'Juan Ramón Ortiz', 'Laura Gabriela Díaz', 'Andrés Felipe Pérez'].map(n => `<tr><td>${n}</td><td><input type="radio" name="${n}" checked></td><td><input type="radio" name="${n}"></td></tr>`).join('')}</tbody></table></div>`);
    }
    function adminHome() {
      setPage('Panel de control', 'Resumen general de la plataforma.', `
  <div class="kpi-grid"><div class="kpi"><span>Alumnos</span><b>1.250</b></div><div class="kpi"><span>Docentes</span><b>120</b></div><div class="kpi"><span>Inscripciones</span><b>936</b></div><div class="kpi"><span>Exámenes</span><b>24</b></div><div class="kpi"><span>Inventario</span><b>${db.inventory.length}</b></div></div>
  <div class="two-col">
    <div class="card card-pad"><div class="section-head"><h3>Actividad de inscripciones</h3><span class="muted">Últimos 6 meses</span></div><div class="chart"><div class="chart-line"></div></div></div>
    <div><div class="card card-pad"><h3>Próximos exámenes</h3>${db.finals.map(f => `<div class="assignment"><b>${f.subject}</b><div class="meta">${f.date} · ${f.time}</div></div>`).join('')}</div>
    <div class="card card-pad" style="margin-top:16px"><h3>Alertas de inventario</h3><div class="assignment"><b>Cable HDMI 5m</b><div class="meta">Stock bajo</div></div><div class="assignment"><b>Proyector Epson</b><div class="meta">Mantenimiento próximo</div></div></div></div>
  </div>`);
    }
    function genericTablePage(title, subtitle, headers, rows) {
      const tableId = 'table' + title.normalize('NFD').replace(/[^a-zA-Z0-9]/g, '');
      setPage(title, subtitle, `<div class="card card-pad"><div class="toolbar" style="margin-bottom:16px"><input id="search${tableId}" placeholder="Buscar..." oninput="filterGenericTable('${tableId}',this.value)"><button class="btn btn-primary" onclick="toast('Alta disponible desde el formulario administrativo correspondiente.')">Nuevo</button></div><div class="table-wrap"><table id="${tableId}"><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table></div></div>`);
    }
    function filterGenericTable(tableId, value) { const q = (value || '').toLowerCase(); document.querySelectorAll(`#${tableId} tbody tr`).forEach(tr => tr.style.display = tr.textContent.toLowerCase().includes(q) ? '' : 'none') }

    function studentDetailHistoryTable(st) {
      const plan = planForStudent(st), history = studentHistoryRecords(st); if (!plan) return '<div class="note">Sin plan cargado.</div>';
      return plan.years.map((y, idx) => { const year = idx + 1; return `<div class="academic-year"><div class="academic-year-head"><h3>${y.title}</h3></div><div class="table-wrap"><table><thead><tr><th>Materia</th><th>Estado</th><th>Nota</th><th>Período</th></tr></thead><tbody>${y.subjects.map(sub => { const r = history.find(h => h.subject === sub[0]) || { status: 'Pendiente', grade: null, period: '—' }; return `<tr><td><b>${sub[0]}</b></td><td><span class="ac-state ${academicStateClass(r.status)}">${r.status}</span></td><td>${r.grade ?? '—'}</td><td>${r.period || '—'}</td></tr>` }).join('')}</tbody></table></div></div>` }).join('');
    }
    function adminStudentDetail(id) {
      const st = db.students.find(s => s.id === Number(id)); if (!st) return; const career = careerForStudent(st), plan = planForStudent(st), sum = academicSummary(st), history = studentHistoryRecords(st), photo = localStorage.getItem(studentPhotoKeyFor(st.email)) || '', initials = st.name.split(/\s+/).map(x => x[0]).slice(0, 2).join('');
      setPage('Ficha del estudiante', 'Datos personales, carrera, situación e historial académico completo.', `
    <div style="margin-bottom:14px"><button class="btn btn-outline" onclick="adminStudents()">← Volver a alumnos</button></div>
    <div class="student-detail-head"><div class="student-detail-ident"><div class="student-detail-avatar">${photo ? `<img src="${photo}" alt="Foto de ${st.name}">` : initials}</div><div><h2 style="margin:0 0 5px;color:#17356d">${st.name}</h2><div class="muted">${st.legajo} · ${career?.name || 'Sin carrera'}</div></div></div><span class="status ok">${st.status}</span></div>
    <div class="student-detail-grid">
      <section class="student-detail-card"><h3>Datos personales</h3><div class="detail-pairs"><div class="detail-pair"><small>DNI</small><b>${st.dni || '—'}</b></div><div class="detail-pair"><small>CUIL</small><b>${st.cuil || '—'}</b></div><div class="detail-pair"><small>Fecha de nacimiento</small><b>${st.birthDate || '—'}</b></div><div class="detail-pair"><small>Correo</small><b>${st.email || '—'}</b></div><div class="detail-pair"><small>Teléfono</small><b>${st.phone || '—'}</b></div><div class="detail-pair"><small>Domicilio</small><b>${st.address || '—'}</b></div></div></section>
      <section class="student-detail-card"><h3>Situación académica</h3><div class="detail-pairs"><div class="detail-pair"><small>Carrera</small><b>${career?.name || '—'}</b></div><div class="detail-pair"><small>Plan</small><b>${plan?.acronym || '—'}</b></div><div class="detail-pair"><small>Ciclo lectivo</small><b>2026</b></div><div class="detail-pair"><small>Año de ingreso</small><b>${st.entryYear}</b></div><div class="detail-pair"><small>Año de avance</small><b>${academicYearLabel(sum.currentYear)}</b></div><div class="detail-pair"><small>Avance</small><b>${sum.progress}%</b></div></div>${sum.repeatPrevious.length ? `<div class="academic-alert"><b>Debe recursar:</b> ${sum.repeatPrevious.map(x => x.subject).join(', ')}</div>` : '<div class="note" style="margin-top:12px">Sin materias libres de años anteriores.</div>'}</section>
      <section class="student-detail-card full"><h3>Resumen del plan</h3><div class="academic-summary"><div class="academic-kpi"><small>Total</small><b>${sum.total}</b><span>materias</span></div><div class="academic-kpi"><small>Aprobadas</small><b>${sum.approved}</b><span>finalizadas</span></div><div class="academic-kpi"><small>Libres</small><b>${sum.free}</b><span>a recursar</span></div><div class="academic-kpi"><small>Pendientes</small><b>${sum.remaining}</b><span>por aprobar</span></div><div class="academic-kpi"><small>Avance</small><b>${sum.progress}%</b><span>del plan</span></div></div></section>
      <section class="student-detail-card full"><h3>Historial académico</h3>${studentDetailHistoryTable(st)}</section>
    </div>`);
    }

    function adminStudents() {
      genericTablePage('Alumnos', 'Gestión de estudiantes registrados, carrera y situación académica.', ['Legajo', 'Nombre', 'DNI', 'Carrera', 'Año de avance', 'Situación', 'Estado', 'Acciones'], db.students.map(st => { const career = careerForStudent(st), sum = academicSummary(st), situation = sum.repeatPrevious.length ? `Recursa ${sum.repeatPrevious.length} de año anterior` : 'Trayecto regular'; return `<tr><td>${st.legajo}</td><td><b>${st.name}</b></td><td>${st.dni || '—'}</td><td>${career?.name || '—'}</td><td>${academicYearLabel(sum.currentYear)}</td><td>${situation}</td><td><span class="status ok">${st.status}</span></td><td><button class="btn btn-outline" onclick="adminStudentDetail(${st.id})">Ver información</button></td></tr>` }).join(''))
    }

    function adminAccountRequests() {
      setPage('Solicitudes de registro', 'Solicitudes públicas realizadas únicamente por estudiantes.', `
    <div class="card card-pad">
      <div class="section-head"><div><h3>Altas de estudiantes</h3><p class="muted" style="margin:4px 0 0">Completar el formulario público no crea automáticamente un alumno activo.</p></div><span class="status warn">${db.accountRequests.filter(r => r.status === 'Pendiente').length} pendientes</span></div>
      <div class="table-wrap"><table><thead><tr><th>Nombre</th><th>DNI / CUIL</th><th>Correo</th><th>Fecha</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>
      ${db.accountRequests.map(r => `<tr><td><b>${r.name}</b></td><td>${r.dni}<div class="muted" style="font-size:11px">${r.cuil}</div></td><td>${r.email}</td><td>${r.date}</td><td><span class="status ${r.status === 'Aprobada' ? 'ok' : r.status === 'Rechazada' ? 'bad' : 'warn'}">${r.status}</span></td><td>${r.status === 'Pendiente' ? `<button class="btn btn-green" onclick="reviewAccountRequest(${r.id},true)">Aprobar</button> <button class="btn btn-danger" onclick="reviewAccountRequest(${r.id},false)">Rechazar</button>` : '—'}</td></tr>`).join('')}
      </tbody></table></div>
      <div class="note" style="margin-top:14px"><b>Docentes y administradores:</b> no utilizan este formulario. Sus cuentas son habilitadas internamente por la institución.</div>
    </div>`);
    }
    function reviewAccountRequest(id, approve) {
      const r = db.accountRequests.find(x => x.id === id); if (!r) return;
      r.status = approve ? 'Aprobada' : 'Rechazada';
      if (approve) {
        const next = Math.max(0, ...db.students.map(s => Number((s.legajo || '').replace(/\D/g, '')) || 0)) + 1;
        db.students.push({ id: Math.max(0, ...db.students.map(s => s.id)) + 1, legajo: `A-${String(next).padStart(7, '0')}`, name: r.name, dni: r.dni, cuil: r.cuil, birthDate: '—', email: r.email, phone: r.phone, address: '—', careerId: 'desarrollo', entryYear: 2026, currentYear: 1, previousPending: 0, status: 'Pendiente de inscripción académica' });
      }
      adminAccountRequests(); toast(`Solicitud ${r.status.toLowerCase()}.`);
    }
    function teacherAccountAction(id) {
      const t = teacherById(id); if (!t) return;
      if (!t.accountStatus || t.accountStatus === 'Sin cuenta') {
        t.accountStatus = 'Pendiente activación';
        toast(`Cuenta preparada para ${t.name}. Se enviaría un enlace de activación a ${t.email}.`);
      } else if (t.accountStatus === 'Pendiente activación') {
        toast(`Se reenviaría el enlace de activación a ${t.email}.`);
      } else if (t.accountStatus === 'Activa') {
        t.accountStatus = 'Bloqueada'; toast(`Cuenta de ${t.name} bloqueada sin eliminar su historial.`);
      } else {
        t.accountStatus = 'Activa'; toast(`Cuenta de ${t.name} reactivada.`);
      }
      adminTeachers();
    }
    function adminTeachers() {
      genericTablePage('Docentes', 'Los docentes son incorporados por la institución; no se registran desde el formulario público.', ['Legajo', 'Nombre', 'Área', 'Materias', 'Estado docente', 'Cuenta de acceso', 'Acciones'], db.teachers.map(t => {
        const acc = t.accountStatus || 'Sin cuenta';
        const cls = acc === 'Activa' ? 'ok' : acc === 'Bloqueada' ? 'bad' : 'warn';
        const label = acc === 'Sin cuenta' ? 'Crear cuenta' : acc === 'Pendiente activación' ? 'Reenviar activación' : acc === 'Activa' ? 'Bloquear cuenta' : 'Reactivar cuenta';
        return `<tr><td>${t.legajo}</td><td><b>${t.name}</b><div class="muted" style="font-size:11px">${t.title}</div></td><td>${t.area}</td><td>${t.courses.length}</td><td><span class="status ok">${t.status}</span></td><td><span class="status ${cls}">${acc}</span></td><td><button class="btn btn-outline" onclick="adminTeacherDetail(${t.id})">Ver información</button> <button class="btn btn-primary" onclick="teacherAccountAction(${t.id})">${label}</button></td></tr>`;
      }).join(''));
    }

    function adminCareers() {
      genericTablePage('Carreras y planes de estudio', 'Administrá la oferta académica.', ['Carrera', 'Tipo', 'Plan cargado', 'Estado', 'Acciones'],
        [
          ['Técnico Superior en Análisis Funcional de Sistemas Informáticos', 'Tecnicatura', 'TSAFSI - 2120/16'],
          ['Tecnicatura Superior en Desarrollo de Software', 'Tecnicatura', 'TSDS - 2120/16'],
          ['Tecnicatura Superior en Gestión de las Organizaciones', 'Tecnicatura', 'TSGO - 378/16'],
          ['Profesorado de Educación Tecnológica', 'Profesorado', 'No provisto'],
          ['Profesorado en Ciencias de la Administración', 'Profesorado', 'No provisto']
        ].map(x => `<tr><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td><td><span class="status ok">Activa</span></td><td><button class="btn btn-outline" onclick="prototypeAction('Editar carrera')">Editar</button></td></tr>`).join(''))
    }

    function adminEnrollments() {
      genericTablePage('Inscripciones', 'Revisión y seguimiento de inscripciones.', ['Estudiante', 'Materia', 'Fecha', 'Estado', 'Acciones'],
        ['Lucía Martínez', 'Juan Ramón Ortiz', 'Laura Gabriela Díaz'].map((n, i) => `<tr><td><b>${n}</b></td><td>${db.subjects[i].name}</td><td>20/05/2026</td><td><span class="status warn">Pendiente</span></td><td><button class="btn btn-green" onclick="toast('Inscripción aprobada.')">Aprobar</button></td></tr>`).join(''))
    }

    function adminFinals() {
      setPage('Exámenes finales', 'Calendario institucional de mesas ordinarias y gestión administrativa de solicitudes de mesas especiales.', `
    <div class="card card-pad"><div class="section-head"><h3>Mesas ordinarias programadas</h3><button class="btn btn-primary" onclick="prototypeAction('Nueva mesa según calendario académico')">Nueva mesa</button></div><div class="table-wrap"><table><thead><tr><th>Materia</th><th>Fecha</th><th>Hora</th><th>Aula</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>${db.finals.map(f => `<tr><td><b>${f.subject}</b></td><td>${f.date}</td><td>${f.time}</td><td>${f.room}</td><td><span class="status ok">Programada</span></td><td><button class="btn btn-outline" onclick="prototypeAction('Editar mesa')">Editar</button></td></tr>`).join('')}</tbody></table></div></div>
    <div class="card card-pad" style="margin-top:18px"><div class="section-head"><h3>Solicitudes de mesa especial</h3><span class="status warn">Art. 40 RAM</span></div><div class="table-wrap"><table><thead><tr><th>Alumno</th><th>Motivo</th><th>Materia/s</th><th>Fecha</th><th>Estado</th><th>Acciones</th></tr></thead><tbody>${db.specialExamRequests.map(r => { const st = db.students.find(s => s.id === r.studentId); return `<tr><td><b>${st?.name || 'Alumno'}</b></td><td>Inciso ${r.reason.toUpperCase()}</td><td>${r.subjects.join(', ')}</td><td>${r.created}</td><td><span class="status ${r.status === 'Aprobada' ? 'ok' : 'warn'}">${r.status}</span></td><td><button class="btn btn-outline" onclick="reviewSpecialExam(${r.id},true)">Aprobar</button> <button class="btn btn-danger" onclick="reviewSpecialExam(${r.id},false)">Rechazar</button></td></tr>` }).join('')}</tbody></table></div><div class="note" style="margin-top:14px">El Administrador académico revisa requisitos y documentación y registra la decisión de la autoridad institucional. La aprobación no depende del docente del aula virtual.</div></div>`);
    }
    function reviewSpecialExam(id, approve) { const r = db.specialExamRequests.find(x => x.id === id); if (!r) return; r.status = approve ? 'Aprobada' : 'Rechazada'; adminFinals(); toast(`Solicitud ${r.status.toLowerCase()}.`) }

    function adminInventory() {
      setPage('Inventario', 'Gestión de equipos, recursos, stock y mantenimiento.', `
  <div class="card card-pad">
    <div class="section-head"><h3>Recursos institucionales</h3><div><button class="btn btn-outline" onclick="inventoryModal('maintenance')">Registrar mantenimiento</button> <button class="btn btn-primary" onclick="inventoryModal('new')">Nuevo recurso</button></div></div>
    <div class="toolbar" style="margin-bottom:16px"><input placeholder="Buscar por código o recurso..."><select><option>Todas las categorías</option><option>Computadoras</option><option>Proyectores</option></select><select><option>Todos los estados</option><option>Disponible</option><option>En uso</option><option>Mantenimiento</option></select></div>
    <div class="table-wrap"><table><thead><tr><th>Código</th><th>Recurso</th><th>Categoría</th><th>Ubicación</th><th>Estado</th><th>Responsable</th><th></th></tr></thead><tbody>
    ${db.inventory.map(x => `<tr><td>${x.code}</td><td><b>${x.name}</b></td><td>${x.category}</td><td>${x.location}</td><td><span class="status ${x.state === 'Mantenimiento' ? 'warn' : 'ok'}">${x.state}</span></td><td>${x.responsible}</td><td><button class="btn btn-outline" onclick="prototypeAction('Ver recurso')">Ver</button></td></tr>`).join('')}
    </tbody></table></div>
  </div>`);
    }

    function inventoryModal(type) {
      const html = type === 'new' ? `<h3>Nuevo recurso</h3>
    <div class="field"><label>Nombre</label><input id="invName" placeholder="Ej.: Notebook Dell"></div>
    <div class="form-row"><div class="field"><label>Categoría</label><select id="invCat"><option>Computadoras</option><option>Proyectores</option><option>Accesorios</option></select></div><div class="field"><label>Ubicación</label><input id="invLoc" placeholder="Aula / sector"></div></div>
    <div class="modal-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="addInventory()">Guardar</button></div>`
        : `<h3>Registrar mantenimiento</h3><div class="field"><label>Recurso</label><select>${db.inventory.map(x => `<option>${x.name}</option>`).join('')}</select></div><div class="field"><label>Detalle</label><textarea placeholder="Motivo y tareas realizadas"></textarea></div><div class="field"><label>Próxima revisión</label><input type="date"></div><div class="modal-actions"><button class="btn btn-outline" onclick="closeModal()">Cancelar</button><button class="btn btn-primary" onclick="closeModal();toast('Mantenimiento registrado.')">Guardar</button></div>`;
      document.getElementById('modalCard').innerHTML = html; document.getElementById('modal').classList.remove('hidden');
    }
    function addInventory() {
      const name = document.getElementById('invName').value || 'Nuevo recurso';
      db.inventory.push({ code: 'NUEV-' + String(db.inventory.length + 1).padStart(3, '0'), name, category: document.getElementById('invCat').value, location: document.getElementById('invLoc').value || 'Sin asignar', state: 'Disponible', responsible: 'Administración' });
      closeModal(); adminInventory(); toast('Recurso agregado al inventario.');
    }
    function closeModal() { document.getElementById('modal').classList.add('hidden') }
    function adminReports() {
      setPage('Reportes', 'Consultas generales del sistema.', `
  <div class="simple-grid"><div class="card card-pad"><h3>Inscripciones</h3><p class="muted">Altas por período, carrera y materia.</p><button class="btn btn-outline">Generar reporte</button></div><div class="card card-pad"><h3>Exámenes finales</h3><p class="muted">Mesas, inscriptos y resultados.</p><button class="btn btn-outline">Generar reporte</button></div><div class="card card-pad"><h3>Inventario</h3><p class="muted">Stock, estado y mantenimientos.</p><button class="btn btn-outline">Generar reporte</button></div></div>`);
    }
    function toast(msg) {
      const t = document.getElementById('toast'); t.textContent = msg; t.classList.remove('hidden'); setTimeout(() => t.classList.add('hidden'), 2600);
    }
    const saved = null; // Se inicia en la portada institucional; el acceso es explícito.
    if (saved) { try { session = JSON.parse(saved); openApp() } catch (e) { } }