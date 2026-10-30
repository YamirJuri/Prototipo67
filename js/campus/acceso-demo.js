/* Campus heredado: integración mínima. La autenticación de este campus es DEMOSTRACIÓN. */
let pendingStudentPage = null;
const openAppDemo67 = openApp;
openApp = function () {
  openAppDemo67();
  if (pendingStudentPage) {
    const next = pendingStudentPage;
    pendingStudentPage = null;
    if (session.role === 'student') route(next);
    else toast('Este trámite se realiza desde una cuenta de estudiante.');
  }
};
function goStudent(page) {
  if (!session) {
    pendingStudentPage = page;
    showAuth('login');
    return;
  }
  if (session.role !== 'student') {
    toast('Ingresá con una cuenta de estudiante para continuar.');
    return;
  }
  openApp();
  route(page);
  window.scrollTo({ top: 0, behavior: 'instant' });
}
let modalReturn67 = null;
function openDialog(html) {
  modalReturn67 = document.activeElement;
  const modal = document.getElementById('modal');
  document.getElementById('modalCard').innerHTML = html;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Información');
  modal.classList.remove('hidden');
  modal.querySelector('button, input, a[href]')?.focus();
}
closeModal = function () {
  document.getElementById('modal').classList.add('hidden');
  modalReturn67?.focus();
};
