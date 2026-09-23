// Acá mantuve el botón de volver arriba, pero agregué una validación para que no rompa el JS si el botón no existe.
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  const actualizarBotonVolver = () => {
    backToTop.classList.toggle('show', window.scrollY > 300);
  };

  window.addEventListener('scroll', actualizarBotonVolver, { passive: true });
  actualizarBotonVolver();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Acá los dots siguen siendo visuales para el prototipo, pero ahora también informan cuál está activo a lectores de pantalla.
const dots = document.querySelectorAll('.hero__dots .dot');

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    dots.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });

    dot.classList.add('active');
    dot.setAttribute('aria-pressed', 'true');
  });
});

// Acá agregué el menú responsive. En escritorio no interviene y en celular evita que toda la navegación quede apilada permanentemente.
const menuToggle = document.getElementById('menuToggle');
const mainMenu = document.getElementById('mainMenu');

if (menuToggle && mainMenu) {
  menuToggle.addEventListener('click', () => {
    const abierto = mainMenu.classList.toggle('is-open');

    menuToggle.setAttribute('aria-expanded', String(abierto));
    menuToggle.setAttribute(
      'aria-label',
      abierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
    );

    const icon = menuToggle.querySelector('i');

    if (icon) {
      icon.classList.toggle('fa-bars', !abierto);
      icon.classList.toggle('fa-xmark', abierto);
    }
  });

  mainMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 820) {
        mainMenu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menú de navegación');

        const icon = menuToggle.querySelector('i');

        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) {
      mainMenu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');

      const icon = menuToggle.querySelector('i');

      if (icon) {
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    }
  });
}

// Acá dejé el año del footer automático para que no quede viejo cada enero.
const currentYear = document.getElementById('currentYear');

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
