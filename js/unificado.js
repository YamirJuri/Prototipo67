/* Integración de portada, accesos y solicitudes. Datos de demostración en memoria. */
let pendingStudentPage = null;
let pendingCareer = false;
const originalOpenApp = openApp;
openApp = function () {
  originalOpenApp();
  if (pendingCareer) { pendingCareer = false; careerEnrollment(); }
  else if (pendingStudentPage) {
    const target = pendingStudentPage; pendingStudentPage = null;
    if (session.role === 'student') route(target);
    else toast('Esta gestión corresponde al perfil de estudiante.');
  }
};
function goStudent(page) {
  if (!session) { pendingStudentPage = page; pendingCareer = false; showAuth('login'); return; }
  if (session.role !== 'student') { toast('Ingresá con una cuenta de estudiante para esta gestión.'); return; }
  openApp(); route(page); window.scrollTo(0, 0);
}
function openDialog(html) {
  const modal = document.getElementById('modal');
  document.getElementById('modalCard').innerHTML = html + '<div><button class="btn btn-outline" onclick="closeModal()">Cerrar</button></div>';
  modal.classList.remove('hidden');
  modal.setAttribute('role','dialog'); modal.setAttribute('aria-modal','true'); modal.setAttribute('aria-label','Información y gestiones');
  modal._previousFocus = document.activeElement;
  modal.querySelector('input,select,button')?.focus();
}
const closeOriginalModal = closeModal;
closeModal = function () { closeOriginalModal(); document.getElementById('modal')._previousFocus?.focus(); };
function careerEnrollment() {
  if (!session) { pendingCareer = true; pendingStudentPage = null; showAuth('login'); return; }
  if (session.role !== 'student') { toast('La solicitud de ingreso está disponible para estudiantes.'); return; }
  const existing = (db.careerRequests || []).filter(x => x.user === session.user);
  openDialog(`<h2>Solicitud de inscripción a una carrera</h2><p>Elegí una carrera para solicitar el ingreso. La institución revisará la documentación y confirmará la inscripción.</p><p class="note">Demostración: la solicitud queda guardada durante esta sesión de la página. No se envía a la institución.</p><form onsubmit="submitCareerEnrollment(event)"><div class="field"><label for="careerChoice">Carrera</label><select id="careerChoice" required>${publicAcademic.careers.map(c => `<option value="${c.id}">${c.name}</option>`).join('')}</select></div><label><input id="careerDeclaration" type="checkbox" required> Declaro que presentaré la documentación requerida por la institución.</label><br><button class="btn btn-primary" type="submit">Enviar solicitud de prueba</button></form><h3 style="margin-top:24px">Mis solicitudes</h3><div id="careerRequestList">${existing.length ? existing.map(x => `<p>${publicAcademic.careers.find(c=>c.id===x.careerId).name} · ${x.status}</p>`).join('') : '<p class="muted">Todavía no registraste solicitudes.</p>'}</div>`);
}
function submitCareerEnrollment(event) {
  event.preventDefault(); const careerId = document.getElementById('careerChoice').value;
  if (!session || session.role !== 'student' || !publicAcademic.careers.some(c=>c.id===careerId)) { toast('Seleccioná una carrera válida desde tu cuenta de estudiante.'); return; }
  if (!document.getElementById('careerDeclaration').checked) { toast('Aceptá la declaración para continuar.'); return; }
  db.careerRequests ||= [];
  if (db.careerRequests.some(x=>x.user===session.user&&x.careerId===careerId)) { toast('Ya tenés una solicitud para esa carrera.'); return; }
  db.careerRequests.push({user:session.user, careerId, status:'Pendiente de revisión',date:new Date().toLocaleDateString('es-AR')});
  careerEnrollment(); toast('Solicitud de prueba registrada.');
}
function showSchedules() {
  hidePublicAreas(); document.getElementById('authView').classList.add('hidden'); document.getElementById('appView').classList.add('hidden');
  document.getElementById('publicInfoView').classList.remove('hidden');
  document.getElementById('publicInfoContent').innerHTML = publicPageHead('Horarios de cursado','Horarios de muestra. Consultá a Secretaría los horarios vigentes de tu carrera.') + `<div class="card card-pad table-wrap"><table><thead><tr><th>Materia</th><th>Docente</th><th>Horario</th><th>Aula</th><th>Cupos</th></tr></thead><tbody>${subjectRows(db.subjects)}</tbody></table></div>`;
  window.scrollTo(0,0);
}
function showHelp() {
  openDialog('<h2>Preguntas frecuentes</h2><details open><summary>¿Cómo ingreso a una carrera?</summary><p>Consultá la propuesta académica, creá una cuenta y solicitá la inscripción. El registro de cuenta y la inscripción a una carrera son pasos diferentes.</p></details><details><summary>¿Cómo me inscribo a materias?</summary><p>Ingresá al campus con tu cuenta de alumno y abrí “Inscribirme a materias”.</p></details><details><summary>¿Cómo me inscribo a un examen?</summary><p>En “Exámenes finales”, consultá las mesas y tu condición académica. El prototipo conserva las validaciones de correlatividades de la versión 2.</p></details><details><summary>¿Olvidé mi contraseña?</summary><p>Usá “Recuperar acceso”. El envío de correo requiere conectar el portal con un servidor; en esta demostración se muestra una confirmación simulada.</p></details><p style="margin-top:18px"><a href="mailto:nivelsuperior46@gmail.com">Consultar a Secretaría ↗</a></p>');
}
function showSearch() { openDialog('<h2>Buscar en el portal</h2><label for="portalSearch">Carreras, planes y servicios</label><input id="portalSearch" type="search" placeholder="Ej.: análisis, exámenes, inscripción…" oninput="searchPortal(this.value)"><div class="search-results" id="searchResults"></div>'); searchPortal(''); }
function searchPortal(query) {
  const items = publicAcademic.careers.map(c=>({label:c.name, action:()=>showCareer(c.id)}));
  items.push({label:'Planes de estudio',action:()=>showPublicSection('plans')},{label:'Normativas y correlatividades',action:()=>showPublicSection('norms')},{label:'Inscripción a carreras',action:careerEnrollment},{label:'Inscripción a materias',action:()=>goStudent('student-enroll')},{label:'Exámenes finales y mesas',action:()=>goStudent('student-finals')},{label:'Horarios',action:showSchedules},{label:'Novedades',action:()=>showPublicSection('news')},{label:'Contacto y mapa',action:()=>{showPublicHome();document.getElementById('contacto').scrollIntoView();}});
  const results = items.filter(x=>normalizeAcademicName(x.label).includes(normalizeAcademicName(query)));
  const container=document.getElementById('searchResults'); container.replaceChildren();
  results.forEach(x=>{const b=document.createElement('button');b.textContent=x.label+' →';b.onclick=()=>{closeModal();x.action();};container.appendChild(b);});
  if (!results.length) container.textContent='No encontramos resultados para esa búsqueda.';
}
document.querySelectorAll('.nav-trigger[aria-expanded]').forEach(button=>button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';document.querySelectorAll('.has-dropdown').forEach(li=>{li.classList.remove('open');li.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');});button.setAttribute('aria-expanded',String(open));button.closest('li').classList.toggle('open',open);}));
const menuToggle=document.getElementById('menuToggle'), menu=document.getElementById('mainMenu');
menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('is-open');menuToggle.setAttribute('aria-expanded',String(open));});
menu.addEventListener('click',e=>{if(e.target.closest('a')||e.target.closest('.dropdown button')||e.target.closest('button:not([aria-expanded])')) {menu.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');document.querySelectorAll('.has-dropdown').forEach(li=>{li.classList.remove('open');li.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');});}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();document.querySelectorAll('.has-dropdown').forEach(li=>{li.classList.remove('open');li.querySelector('.nav-trigger')?.setAttribute('aria-expanded','false');});}if(e.key==='Tab'&&!document.getElementById('modal').classList.contains('hidden')){const focusable=[...document.getElementById('modal').querySelectorAll('button,input,select,textarea,a[href],summary')].filter(x=>!x.disabled);const first=focusable[0],last=focusable.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}});
document.getElementById('modal').addEventListener('click',e=>{if(e.target.id==='modal')closeModal();});
const backToTop=document.getElementById('backToTop');window.addEventListener('scroll',()=>backToTop.classList.toggle('show',window.scrollY>300),{passive:true});backToTop.onclick=()=>window.scrollTo({top:0,behavior:'smooth'});
document.getElementById('currentYear').textContent=new Date().getFullYear();
// Etiquetas accesibles para los formularios heredados.
document.querySelectorAll('.field').forEach(field=>{const input=field.querySelector('input,textarea,select'),label=field.querySelector('label');if(input?.id&&label)label.htmlFor=input.id;});
document.getElementById('loginPass').addEventListener('keydown',e=>{if(e.key==='Enter')login();});
if(location.hash==='#acceso')showAuth('login');
// Las solicitudes de carrera se pueden revisar desde el panel administrativo.
const originalAdminEnrollments = adminEnrollments;
adminEnrollments = function () {
  originalAdminEnrollments();
  const section = document.createElement('section'); section.className='card card-pad'; section.style.marginTop='24px';
  const title=document.createElement('h3');title.textContent='Solicitudes de inscripción a carreras';section.appendChild(title);
  const requests=db.careerRequests||[];
  if(!requests.length){const p=document.createElement('p');p.className='muted';p.textContent='No hay solicitudes de carrera registradas en esta sesión.';section.appendChild(p);}
  requests.forEach((request,index)=>{const row=document.createElement('div');row.className='assignment';const label=document.createElement('p');label.textContent=request.user+' · '+publicAcademic.careers.find(c=>c.id===request.careerId).name+' · '+request.status;row.appendChild(label);if(request.status==='Pendiente de revisión'){for(const [text,status] of [['Aprobar','Aprobada'],['Rechazar','Rechazada']]){const button=document.createElement('button');button.className='btn btn-outline';button.textContent=text;button.onclick=()=>{db.careerRequests[index].status=status;adminEnrollments();toast('Solicitud '+status.toLowerCase()+'.');};row.appendChild(button);}}section.appendChild(row);});document.getElementById('pageContent').appendChild(section);
};
