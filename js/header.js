// header.js — ES module
const header = document.getElementById('site-header');
const nav = document.getElementById('site-nav');
const toggle = document.getElementById('nav-toggle');
const main = document.getElementById('main');

// set CSS variable to header height to prevent layout jump
function setHeaderHeight(){
  const h = header.getBoundingClientRect().height;
  document.documentElement.style.setProperty('--header-height', `${h}px`);
}
setHeaderHeight();
window.addEventListener('resize', setHeaderHeight);

// mobile toggle
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

// close mobile nav when a link is clicked (good UX)
nav.addEventListener('click', (e)=>{
  if(e.target.matches('.nav-link')){
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
  }
});

// highlight active link (hash-based routing example)
function setActiveLink(){
  const path = location.hash || '#/';
  document.querySelectorAll('.nav-link').forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === path);
  });
}
window.addEventListener('hashchange', setActiveLink);
setActiveLink();
