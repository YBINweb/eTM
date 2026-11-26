const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu&&links){
  menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open?'true':'false')});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
}
const bar=document.querySelector('.progress');
if(bar){
  const upd=()=>{const h=document.documentElement,max=h.scrollHeight-h.clientHeight;bar.style.width=(max>0?Math.min(100,h.scrollTop/max*100):0)+'%'};
  addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
}
