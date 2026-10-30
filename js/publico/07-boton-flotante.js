/* 07 · VOLVER ARRIBA · Arrastre con ratón/táctil, límites de pantalla y alternativa de teclado. */
(function (app) {
  'use strict';
  app.initFloating = () => {
    const button = document.getElementById('backToTop');
    let dragging = null, moved = false, position = null;
    const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
    const setPosition = (x, y) => {
      const size = button.offsetWidth || 50;
      position = { x: clamp(x, 12, innerWidth - size - 12), y: clamp(y, 12, innerHeight - size - 12) };
      button.style.left = `${position.x}px`; button.style.top = `${position.y}px`;
      button.style.right = 'auto'; button.style.bottom = 'auto';
    };
    button.addEventListener('pointerdown', event => {
      if (event.button !== 0) return;
      const rect = button.getBoundingClientRect();
      dragging = { id: event.pointerId, startX: event.clientX, startY: event.clientY, left: rect.left, top: rect.top };
      moved = false; button.setPointerCapture(event.pointerId); button.classList.add('holding');
    });
    button.addEventListener('pointermove', event => {
      if (!dragging || dragging.id !== event.pointerId) return;
      const dx = event.clientX - dragging.startX, dy = event.clientY - dragging.startY;
      if (Math.hypot(dx, dy) > 6) { moved = true; button.classList.add('dragging'); setPosition(dragging.left + dx, dragging.top + dy); }
    });
    const end = event => {
      if (!dragging || dragging.id !== event.pointerId) return;
      dragging = null; button.classList.remove('holding', 'dragging');
      if (button.hasPointerCapture(event.pointerId)) button.releasePointerCapture(event.pointerId);
    };
    button.addEventListener('pointerup', end);
    button.addEventListener('pointercancel', event => { end(event); moved = true; });
    button.addEventListener('click', event => {
      if (moved) { event.preventDefault(); moved = false; return; }
      button.classList.remove('clicked'); requestAnimationFrame(() => button.classList.add('clicked'));
      window.scrollTo({ top: 0, behavior: app.reducedMotion() ? 'instant' : 'smooth' });
    });
    button.addEventListener('keydown', event => {
      if (event.key === 'Escape') { position = null; button.style.cssText = ''; return; }
      if (event.shiftKey && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
        event.preventDefault(); const rect = button.getBoundingClientRect();
        setPosition(rect.left + (event.key === 'ArrowRight' ? 20 : event.key === 'ArrowLeft' ? -20 : 0), rect.top + (event.key === 'ArrowDown' ? 20 : event.key === 'ArrowUp' ? -20 : 0));
      }
    });
    window.addEventListener('resize', () => { if (position) setPosition(position.x, position.y); });
    const show = () => { const visible = scrollY > 250; button.classList.toggle('show', visible); button.tabIndex = visible ? 0 : -1; };
    window.addEventListener('scroll', show, { passive: true }); show();
  };
})(ISP67);
