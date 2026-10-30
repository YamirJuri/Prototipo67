/* 08 · CONTROLES COMPARTIDOS · Elección accesible y desplazamiento de página.
 * Los selectores usan disclosures y botones nativos. No simulan un listbox incompleto.
 * El name/value de cada input oculto sigue disponible para FormData/PHP.
 */
(function(app){
  'use strict';
  app.initChoices=()=>{
    document.addEventListener('click',event=>{
      const option=event.target.closest('.choice-option');
      if(option){
        const picker=option.closest('.choice-picker'),name=picker.dataset.choiceName,input=document.getElementById(name);
        input.value=option.dataset.choiceValue;
        picker.querySelectorAll('.choice-option').forEach(n=>n.setAttribute('aria-pressed',String(n===option)));
        document.getElementById('value-'+name).textContent=option.querySelector('span').textContent;
        picker.open=false;picker.querySelector('summary').focus({preventScroll:true});
        input.dispatchEvent(new Event('input',{bubbles:true}));input.dispatchEvent(new Event('change',{bubbles:true}));
        return;
      }
      document.querySelectorAll('.choice-picker[open]').forEach(picker=>{if(!picker.contains(event.target))picker.open=false;});
    });
    document.addEventListener('keydown',event=>{
      const picker=event.target.closest('.choice-picker');if(!picker)return;
      if(event.key==='Escape'){event.preventDefault();event.stopImmediatePropagation();picker.open=false;picker.querySelector('summary').focus();return;}
      if(event.target===picker.querySelector('summary')&&event.key==='ArrowDown'){
        event.preventDefault();picker.open=true;picker.querySelector('.choice-group>summary,.choice-option')?.focus();return;
      }
      if(!event.target.matches('.choice-option'))return;
      const options=[...picker.querySelectorAll('.choice-option')].filter(n=>n.getClientRects().length),index=options.indexOf(event.target);
      let next;
      if(event.key==='ArrowDown')next=(index+1)%options.length;
      else if(event.key==='ArrowUp')next=(index-1+options.length)%options.length;
      else if(event.key==='Home')next=0;
      else if(event.key==='End')next=options.length-1;
      if(next!==undefined){event.preventDefault();options[next]?.focus();}
    });
  };
  app.initPageScroll=()=>{
    const indicator=document.querySelector('.page-scroll-progress');let scheduled=false,timer;
    const paint=()=>{const distance=document.documentElement.scrollHeight-innerHeight;indicator.style.transform=`scaleY(${distance>0?Math.max(0,Math.min(1,scrollY/distance)):0})`;scheduled=false;};
    addEventListener('scroll',()=>{document.documentElement.classList.add('is-scrolling');clearTimeout(timer);timer=setTimeout(()=>document.documentElement.classList.remove('is-scrolling'),220);if(!scheduled){scheduled=true;requestAnimationFrame(paint);}},{passive:true});
    addEventListener('resize',paint);paint();
  };
})(ISP67);
