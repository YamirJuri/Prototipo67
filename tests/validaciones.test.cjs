/* Ejecutar: node tests/validaciones.test.cjs. No requiere paquetes externos. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const root=path.resolve(__dirname,'..');let count=0;
const ctx={console,TextDecoder};ctx.window=ctx;vm.createContext(ctx);
for(const file of ['01-configuracion','02-utilidades','04-formularios']) {
 if(file==='04-formularios') ctx.ISP67.pages={};
 vm.runInContext(fs.readFileSync(path.join(root,'js/publico',file+'.js'),'utf8'),ctx);
 if(file==='01-configuracion') ctx.ISP67=ctx.window.ISP67;
}
const a=ctx.ISP67;
function check(name,fn){fn();count++;console.log('OK '+name);}
const base={nombre:'Lucía Pérez',correo:'lucia@example.org',telefono:'',mensaje:'Quisiera conocer los pasos para ingresar.',acepta:true,sitio_web:'',tema:'ingreso',carrera:a.config.careers[0].id};
check('consulta válida',()=>assert.equal(Object.keys(a.validate(base,'contacto')).length,0));
check('ingreso válido',()=>assert.equal(Object.keys(a.validate(base,'inscripcion')).length,0));
check('nombre con tildes',()=>assert(a.validName('María José Díaz')));
check('nombre vacío',()=>assert(!a.validName(' ')));
check('nombre con etiquetas',()=>assert(!a.validName('<img src=x>')));
check('nombre con salto',()=>assert(!a.validName('Ana\nBcc:')));
check('correo válido',()=>assert(a.validEmail('alumna+ingreso@example.org')));
check('correo incompleto',()=>assert(!a.validEmail('algo@')));
check('cabecera inyectada',()=>assert(!a.validEmail('a@example.org\r\nBcc:x@y.org')));
for(const [key,value] of [['nombre','x'],['correo','bad'],['telefono','abc'],['mensaje','corto'],['mensaje','x'.repeat(2501)],['acepta',false],['sitio_web','bot'],['tema','inventado']]) check('rechazo '+key+' '+String(value).slice(0,15),()=>assert(Object.keys(a.validate({...base,[key]:value},'contacto')).length>0));
check('carrera fuera de catálogo',()=>assert(a.validate({...base,carrera:'../admin'},'inscripcion').carrera));
check('tipo fuera de catálogo',()=>assert(a.validate(base,'admin').general));
check('homologación incompleta',()=>assert(a.validate(base,'homologacion').institucion_origen));
check('homologación válida',()=>assert.equal(Object.keys(a.validate({...base,institucion_origen:'Otra institución',materias_origen:'Anatomía'},'homologacion')).length,0));
check('HTML escapado',()=>assert.equal(a.escape('<script>"&\''),'&lt;script&gt;&quot;&amp;&#39;'));
for(const url of ['javascript:alert(1)','data:text/html,x','recursos/../secreto','file:///etc/passwd','//otro.org','recursos/\\hola']) check('URL rechazada '+url,()=>assert.equal(a.safeUrl(url),null));
check('recurso válido',()=>assert.equal(a.safeUrl('recursos/planes/plan.pdf'),'recursos/planes/plan.pdf'));
const pdf={name:'analitico.pdf',type:'application/pdf',size:100,slice:()=>({arrayBuffer:async()=>new TextEncoder().encode('%PDF-').buffer})};
check('PDF metadatos válidos',()=>assert.equal(a.pdfMetadataError([pdf]),''));
check('PDF demasiado grande',()=>assert(a.pdfMetadataError([{...pdf,size:6*1024*1024}])));
check('PDF vacío',()=>assert(a.pdfMetadataError([{...pdf,size:0}])));
check('archivo no PDF',()=>assert(a.pdfMetadataError([{...pdf,name:'script.php'}])));
check('MIME no PDF',()=>assert(a.pdfMetadataError([{...pdf,type:'text/html'}])));
check('máximo tres PDFs',()=>assert(a.pdfMetadataError([pdf,pdf,pdf,pdf])));
(async()=>{
 assert.equal(await a.filesError([pdf]),'');count++;console.log('OK firma PDF');
 assert(await a.filesError([{...pdf,slice:()=>({arrayBuffer:async()=>new TextEncoder().encode('<html').buffer})}]));count++;console.log('OK firma falsa rechazada');
 console.log(JSON.stringify({passed:count,failed:0}));
})().catch(err=>{console.error(err);process.exitCode=1});
