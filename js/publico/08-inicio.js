/* 08 · ARRANQUE · Inicialización única y comportamiento de accesibilidad. */
(function (app) {
  'use strict';
  let observer;
  app.reveal = root => {
    if (app.reducedMotion() || !('IntersectionObserver' in window)) return;
    document.body.classList.add('motion-ready');
    observer ||= new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: 0.06 });
    root.querySelectorAll('.reveal,.proposal-card,.reading-section,.help-contact').forEach(node => { node.classList.add('reveal'); observer.observe(node); });
  };
  app.syncSurface = () => {
    const surface = !document.getElementById('appView').classList.contains('hidden') ? 'campus' : !document.getElementById('authView').classList.contains('hidden') ? 'auth' : 'public';
    document.body.dataset.surface = surface;
    app.gallery?.setVisible(surface === 'public' && !document.getElementById('publicSite').classList.contains('hidden'));
  };
  app.initNavigation(); app.initGallery(); app.initFloating();
  new MutationObserver(app.syncSurface).observe(document.getElementById('appView'), { attributes: true, attributeFilter: ['class'] });
  new MutationObserver(app.syncSurface).observe(document.getElementById('authView'), { attributes: true, attributeFilter: ['class'] });
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.querySelectorAll('#authView .field').forEach(field => { const label = field.querySelector('label'), control = field.querySelector('input,select,textarea'); if (label && control?.id) label.htmlFor = control.id; });
  document.getElementById('loginPass').addEventListener('keydown', event => { if (event.key === 'Enter') login(); });
  document.addEventListener('keydown', event => {
    const modal = document.getElementById('modal');
    if (event.key !== 'Tab' || modal.classList.contains('hidden')) return;
    const nodes = [...modal.querySelectorAll('button,input,select,textarea,a[href]')].filter(n => !n.disabled && n.getClientRects().length);
    const first = nodes[0], last = nodes.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  });
  document.getElementById('modal').addEventListener('click', event => { if (event.target.id === 'modal') closeModal(); });
  document.addEventListener('click', event => {
    const summary = event.target.closest('.faq-item > summary');
    if (summary && !app.reducedMotion()) {
      const item = summary.parentElement, answer = item.querySelector('.faq-answer');
      if (!answer.animate) return;
      event.preventDefault(); if (item.dataset.animating) return;
      const closing = item.open; item.dataset.animating = 'true'; if (!closing) item.open = true;
      const height = answer.scrollHeight;
      const motion = answer.animate(closing ? [{ height: height + 'px', opacity: 1 }, { height: '0px', opacity: 0 }] : [{ height: '0px', opacity: 0 }, { height: height + 'px', opacity: 1 }], { duration: 280, easing: 'ease' });
      motion.onfinish = () => { item.open = !closing; delete item.dataset.animating; };
    }
    const button = event.target.closest('.action-button,.campus-access');
    if (button && !app.reducedMotion()) button.animate([{ transform: 'scale(1)' }, { transform: 'scale(.97)' }, { transform: 'scale(1)' }], { duration: 260 });
  });
  // Las imágenes ausentes vuelven al molde, no dejan íconos de recurso roto.
  document.addEventListener('error', event => { if (event.target.tagName === 'IMG' && event.target.closest('.media-slot')) { const box = event.target.closest('.media-slot'); box.replaceChildren(); const label = document.createElement('p'); label.textContent = 'Imagen pendiente de publicación'; box.appendChild(label); } }, true);
  if (location.hash === '#acceso') showAuth('login');
  else app.render(location.hash, { focus: false });
  app.syncSurface();
})(ISP67);
