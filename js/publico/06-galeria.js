/* 06 · GALERÍAS HORIZONTAL Y VERTICAL
 * Un mismo controlador por instancia: reloj, progreso, pausa, teclado y gesto.
 * No hay imágenes ficticias; src:null conserva los moldes indicados.
 */
(function(app){
  'use strict';
  app.initGallery=()=>{
    function create({rootId,trackId,progressId,previousId,nextId,pauseId,slides,vertical=false}){
      const root=document.getElementById(rootId),track=document.getElementById(trackId),progress=document.getElementById(progressId),pause=document.getElementById(pauseId);
      const duration=Math.max(3000,Number(app.config.galleryDuration)||6000);
      const placeholder=slide=>`<div class="gallery-placeholder"><svg viewBox="0 0 48 48" aria-hidden="true" fill="none"><path d="M7 9h34v30H7V9Zm0 22 11-11 11 13 6-7 6 7" stroke="currentColor" stroke-width="1.3"/><circle cx="32" cy="18" r="3" stroke="currentColor" stroke-width="1.3"/></svg><h2>${vertical?'La vida en el Instituto':'Galería institucional'}</h2><p>Espacio reservado para imágenes${vertical?' verticales':''}</p><small>${app.escape(slide.caption)} · Próximamente</small></div>`;
      track.innerHTML=slides.map((slide,i)=>{const src=app.safeUrl(slide.src);return `<article class="gallery-slide" aria-label="Imagen ${i+1} de ${slides.length}">${src?`<img src="${app.escape(src)}" alt="${app.escape(slide.alt)}" ${i?'loading="lazy"':'fetchpriority="high"'}>`:placeholder(slide)}</article>`;}).join('');
      track.querySelectorAll('img').forEach((img,i)=>img.addEventListener('error',()=>{img.parentElement.innerHTML=placeholder(slides[i]);}));
      progress.innerHTML=slides.map((_,i)=>`<button type="button" class="gallery-progress-button" data-slide="${i}" aria-label="Mostrar imagen ${vertical?'vertical ':''}${i+1}" aria-current="false"><span class="gallery-progress-fill"></span><span class="progress-tip" aria-hidden="true"></span></button>`).join('');
      const nodes=[...track.children],buttons=[...progress.children],bars=buttons.map(b=>b.querySelector('.gallery-progress-fill'));
      let index=0,elapsed=0,previous=0,raf=null,visible=true,inViewport=true,paused=app.reducedMotion(),keyboard=false,lastIndex=-1;
      function paint(){
        if(lastIndex!==index){
          track.style.transform=`translate${vertical?'Y':'X'}(-${index*100}%)`;
          nodes.forEach((node,i)=>{node.inert=i!==index;node.setAttribute('aria-hidden',String(i!==index));});
          buttons.forEach((button,i)=>{button.classList.toggle('active',i===index);button.classList.toggle('complete',i<index);button.setAttribute('aria-current',String(i===index));});lastIndex=index;
        }
        const fraction=Math.max(0,Math.min(1,elapsed/duration));
        bars.forEach((bar,i)=>{const amount=i===index?fraction:i<index?1:0;bar.style.transform=`scale${vertical?'Y':'X'}(${amount})`;buttons[i].style.setProperty('--progress',amount);});
      }
      function stop(){if(raf!==null)cancelAnimationFrame(raf);raf=null;previous=0;}
      function step(time){if(!previous)previous=time;elapsed+=Math.max(0,time-previous);previous=time;if(elapsed>=duration){index=(index+1)%slides.length;elapsed=0;}paint();raf=requestAnimationFrame(step);}
      function sync(){stop();pause.textContent=paused?'▶':'Ⅱ';pause.setAttribute('aria-label',(paused?'Reanudar':'Pausar')+' galería'+(vertical?' vertical':''));pause.setAttribute('aria-pressed',String(paused));root.classList.toggle('is-paused',paused||!inViewport);if(visible&&inViewport&&!paused&&!keyboard&&!document.hidden)raf=requestAnimationFrame(step);}
      function select(next){index=(next+slides.length)%slides.length;elapsed=0;paint();sync();}
      document.getElementById(previousId).addEventListener('click',()=>select(index-1));document.getElementById(nextId).addEventListener('click',()=>select(index+1));
      pause.addEventListener('click',()=>{paused=!paused;sync();});
      progress.addEventListener('click',event=>{const button=event.target.closest('[data-slide]');if(button)select(Number(button.dataset.slide));});
      root.addEventListener('focusin',event=>{if(event.target.matches(':focus-visible')&&event.target!==pause){keyboard=true;sync();}});
      root.addEventListener('focusout',event=>{if(!root.contains(event.relatedTarget)){keyboard=false;sync();}});
      root.addEventListener('pointerdown',()=>{keyboard=false;sync();});
      let start=null;
      root.addEventListener('touchstart',event=>{start={x:event.changedTouches[0].clientX,y:event.changedTouches[0].clientY};},{passive:true});
      root.addEventListener('touchend',event=>{if(!start)return;const dx=event.changedTouches[0].clientX-start.x,dy=event.changedTouches[0].clientY-start.y;if(!vertical&&Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy))select(index+(dx<0?1:-1));start=null;},{passive:true});
      // En la galería vertical se conserva el gesto vertical nativo de scroll en móvil.
      // Flechas y líneas permiten avanzar sin bloquear el desplazamiento de la página.
      if('IntersectionObserver'in window)new IntersectionObserver(entries=>{inViewport=entries[0].isIntersecting;sync();},{threshold:.05}).observe(root);
      document.addEventListener('visibilitychange',sync);matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',event=>{paused=event.matches;sync();});
      paint();sync();return{setVisible(value){visible=value;sync();}};
    }
    const galleries=[create({rootId:'gallery',trackId:'galleryTrack',progressId:'galleryProgress',previousId:'galleryPrevious',nextId:'galleryNext',pauseId:'galleryPause',slides:app.config.gallery}),create({rootId:'portraitGallery',trackId:'portraitTrack',progressId:'portraitProgress',previousId:'portraitPrevious',nextId:'portraitNext',pauseId:'portraitPause',slides:app.config.portraitGallery,vertical:true})];
    app.gallery={setVisible(value){galleries.forEach(g=>g.setVisible(value));}};
  };
})(ISP67);
