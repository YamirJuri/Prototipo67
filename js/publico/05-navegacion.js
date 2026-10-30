/* 05 · RUTAS, FOCO Y MENÚ · Navegación por hash sin depender de un servidor SPA. */
(function (app) {
  'use strict';
  const allowed = new Set(['inicio', 'carreras', 'terciarios', 'profesorados', 'planes', 'normativas', 'novedades', 'calendario', 'cronograma', 'ayuda', 'contacto', 'inscripcion', 'homologaciones']);
  app.currentRoute = 'inicio';
  app.routeParts = raw => {
    let route;
    try { route = decodeURIComponent(raw.replace(/^#/, '')); } catch { return ['no-encontrado']; }
    const pieces = route.split('/').filter(Boolean);
    return pieces.length ? pieces : ['inicio'];
  };
  app.render = (route, options = {}) => {
    const parts = app.routeParts(route), [section, argument, tab] = parts;
    app.formDraft = null;
    app.closeMenus?.();
    if (section === 'inicio') {
      document.getElementById('publicInfoView').classList.add('hidden');
      document.getElementById('authView').classList.add('hidden');
      document.getElementById('appView').classList.add('hidden');
      document.getElementById('publicSite').classList.remove('hidden');
      app.currentRoute = 'inicio'; document.body.dataset.surface = 'public';
      document.title = 'Instituto Superior N.º 67 · Yapeyú';
      app.gallery?.setVisible(true); app.reveal?.(document.getElementById('publicSite'));
    } else {
      let page;
      if (section === 'carrera') page = app.pages.career(argument, tab);
      else if (!allowed.has(section)) page = app.pages.notFound();
      else if (section === 'carreras') page = app.pages.careers();
      else if (section === 'terciarios' || section === 'profesorados') page = app.pages.careers(section);
      else if (section === 'planes') page = app.pages.plans();
      else if (section === 'normativas') page = app.pages.norms();
      else if (section === 'novedades') page = app.pages.news();
      else if (section === 'calendario') page = app.pages.calendar();
      else if (section === 'cronograma') page = app.pages.schedule(argument,tab,parts[3]);
      else if (section === 'ayuda') page = app.pages.help();
      else if (section === 'contacto') page = app.pages.contact(argument);
      else if (section === 'inscripcion') page = app.pages.enrollment(argument);
      else if (section === 'homologaciones') page = app.pages.homologation();
      else page = app.pages.notFound();
      document.getElementById('publicSite').classList.add('hidden');
      document.getElementById('authView').classList.add('hidden');
      document.getElementById('appView').classList.add('hidden');
      const view = document.getElementById('publicInfoView'); view.classList.remove('hidden');
      view.dataset.tone = page.tone;
      app.currentRoute = parts.join('/'); document.body.dataset.surface = 'public';
      document.title = `${page.title} · Superior 67`;
      document.getElementById('publicInfoContent').innerHTML = `
        <header class="section-heading"><div class="page-width"><h1 tabindex="-1">${app.escape(page.title)}</h1><p>${app.escape(page.subtitle)}</p></div></header>
        <nav class="section-actions" aria-label="Accesos de esta sección"><div class="page-width">${page.actions.map(([label, dest], index) => `<button type="button" data-route="${app.escape(dest)}">${index === 0 ? '← ' : ''}${app.escape(label)}${index ? ' ↗' : ''}</button>`).join('')}</div></nav>
        <div class="page-width page-content">${page.content}</div>`;
      app.gallery?.setVisible(false); app.bindPublicForm();
      app.reveal?.(view);
      if (options.focus !== false) view.querySelector('h1')?.focus({ preventScroll: true });
    }
    if (options.scroll !== false) window.scrollTo({ top: 0, behavior: 'instant' });
    app.syncSurface?.();
  };
  app.go = (route, options = {}) => {
    if (location.hash !== '#' + route) {
      try { history.pushState({ route }, '', '#' + route); } catch { location.hash = route; }
    }
    app.render(route, options);
  };
  app.closeMenus = () => {
    document.querySelectorAll('.has-dropdown').forEach(li => {
      li.classList.remove('open'); li.querySelector('.nav-trigger')?.setAttribute('aria-expanded', 'false');
    });
    document.getElementById('mainMenu').classList.remove('is-open');
    document.getElementById('menuToggle').setAttribute('aria-expanded', 'false');
  };
  app.initNavigation = () => {
    const menu = document.getElementById('mainMenu'), toggle = document.getElementById('menuToggle');
    toggle.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(open)); });
    document.querySelectorAll('.has-dropdown').forEach(item => {
      const trigger = item.querySelector('.nav-trigger');
      const open = () => { item.classList.add('open'); trigger.setAttribute('aria-expanded', 'true'); };
      const close = () => { item.classList.remove('open'); trigger.setAttribute('aria-expanded', 'false'); };
      // Mouse/trackpad: el menú se abre sin clic. Táctil/teclado: botón con aria-expanded.
      item.addEventListener('pointerenter', event => { if (event.pointerType !== 'touch' && matchMedia('(min-width: 1001px)').matches) open(); });
      item.addEventListener('pointerleave', event => { if (event.pointerType !== 'touch' && !item.contains(document.activeElement)) close(); });
      item.addEventListener('focusin', () => { if (matchMedia('(min-width: 1001px)').matches) open(); });
      item.addEventListener('focusout', event => { if (!item.contains(event.relatedTarget)) close(); });
      trigger.addEventListener('click', () => { if (matchMedia('(max-width: 1000px)').matches) { const state = trigger.getAttribute('aria-expanded') === 'true'; item.classList.toggle('open', !state); trigger.setAttribute('aria-expanded', String(!state)); } else open(); });
    });
    document.addEventListener('click', event => {
      if (event.target.closest('.skip-link')) { event.preventDefault(); const main = document.querySelector('body[data-surface="public"] #publicInfoView:not(.hidden) main, body[data-surface="public"] #publicSite:not(.hidden) main, body[data-surface="campus"] #pageContent, body[data-surface="auth"] #authView'); if (main) { main.tabIndex = -1; main.focus(); main.scrollIntoView({ behavior: 'instant', block: 'start' }); } return; }
      const target = event.target.closest('[data-route]');
      if (target) { event.preventDefault(); app.go(target.dataset.route); return; }
      const campus = event.target.closest('[data-campus]');
      if (campus) {
        event.preventDefault(); app.closeMenus(); app.gallery?.setVisible(false);
        const value = campus.dataset.campus;
        if (['login', 'register', 'reset'].includes(value)) showAuth(value);
        else if (['student-enroll', 'student-finals', 'student-history', 'student-classroom'].includes(value)) goStudent(value);
        return;
      }
      const month = event.target.closest('[data-month]');
      if (month) { const direction = month.dataset.month; app.calendarMonth.setMonth(app.calendarMonth.getMonth() + Number(direction)); app.render('calendario', { scroll: false, focus: false }); document.querySelector(`[data-month="${direction}"]`)?.focus({ preventScroll: true }); return; }
      if (event.target.closest('[data-copy-draft]')) { app.copyDraft(event.target.closest('[data-copy-draft]')); return; }
      if (event.target.closest('[data-download-draft]')) { app.downloadDraft(); return; }
      if (!event.target.closest('.has-dropdown') && !event.target.closest('#menuToggle')) app.closeMenus();
    });
    document.addEventListener('change', event => {
      if (!event.target.matches('[data-schedule-filter]')) return;
      const career=document.getElementById('scheduleCareer').value;
      const year=event.target.id==='scheduleCareer'?'todos':document.getElementById('scheduleYear').value;
      const commission=['scheduleCareer','scheduleYear'].includes(event.target.id)?'todas':document.getElementById('scheduleCommission').value;
      const focusId='control-'+event.target.id;
      app.go(`cronograma/${career}/${year}/${commission}`,{scroll:false,focus:false});
      document.getElementById(focusId)?.focus({preventScroll:true});
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { app.closeMenus(); closeModal(); } });
    window.addEventListener('popstate', () => app.render(location.hash));
    window.addEventListener('hashchange', () => { if (app.currentRoute !== location.hash.slice(1)) app.render(location.hash); });
  };
  // Compatibilidad con botones del campus heredado y enlaces de versiones anteriores.
  window.showPublicHome = () => app.go('inicio');
  window.showPublicSection = section => app.go(({ careers: 'carreras', plans: 'planes', norms: 'normativas', news: 'novedades', contact: 'contacto' })[section] || section);
  window.showCareerCategory = category => app.go(category);
  window.showCareer67 = id => app.go(`carrera/${id}/info`);
  window.careerEnrollment = () => app.go('inscripcion');
  window.showSchedules = () => app.go('cronograma');
  window.showHelp67 = window.showHelp = () => app.go('ayuda');
})(ISP67);
