document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  const navToggle=document.getElementById('navToggle');const nav=document.getElementById('nav');
  navToggle.addEventListener('click',()=>nav.classList.toggle('show'));
  const lb=document.getElementById('lightbox');const lbImage=document.getElementById('lbImage');const lbClose=document.getElementById('lbClose');
  document.querySelectorAll('.gallery-item img').forEach(img=>{img.addEventListener('click',()=>{lbImage.src=img.dataset.full||img.src;lb.classList.add('show');});});
  lbClose.addEventListener('click',()=>{lb.classList.remove('show');lbImage.src='';});
  lb.addEventListener('click',e=>{if(e.target===lb){lb.classList.remove('show');lbImage.src='';}});
  function initCounts(){document.querySelectorAll('.download-count').forEach(el=>{const key=el.dataset.key;const c=parseInt(localStorage.getItem('dlcount_'+key)||'0');el.textContent=c+' downloads';});}
  initCounts();
  document.querySelectorAll('.download-btn').forEach(btn=>{btn.addEventListener('click',()=>{const key=btn.dataset.key;const s='dlcount_'+key;const c=parseInt(localStorage.getItem(s)||'0');localStorage.setItem(s,c+1);document.querySelector('.download-count[data-key="'+key+'"]').textContent=(c+1)+' downloads';});});
});