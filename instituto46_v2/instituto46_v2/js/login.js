// Acá agregué solamente el control para mostrar u ocultar la clave. No toca todavía ninguna autenticación real.
const passwordToggle = document.getElementById('passwordToggle');
const passwordInput = document.getElementById('clave');

if (passwordToggle && passwordInput) {
  passwordToggle.addEventListener('click', () => {
    const visible = passwordInput.type === 'text';

    passwordInput.type = visible ? 'password' : 'text';
    passwordToggle.setAttribute('aria-label', visible ? 'Mostrar clave' : 'Ocultar clave');

    const icon = passwordToggle.querySelector('i');

    if (icon) {
      icon.classList.toggle('fa-eye', visible);
      icon.classList.toggle('fa-eye-slash', !visible);
    }
  });
}
