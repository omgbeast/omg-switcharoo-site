const SITE={installUrl:"https://discord.com/oauth2/authorize?client_id=1536196681505443860",supportUrl:"#support",supportEmail:"xomgbeastx@gmail.com"};
document.querySelectorAll("[data-install]").forEach(a=>a.href=SITE.installUrl);
document.querySelectorAll("[data-support]").forEach(a=>a.href=SITE.supportUrl);
document.querySelectorAll("[data-email]").forEach(n=>{n.textContent=SITE.supportEmail;if(n.tagName==="A")n.href=`mailto:${SITE.supportEmail}`});
document.querySelectorAll("[data-year]").forEach(n=>n.textContent=new Date().getFullYear());

const menu=document.querySelector(".menu-btn"),nav=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{if(glow){glow.style.left=`${e.clientX}px`;glow.style.top=`${e.clientY}px`}});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.13});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".switch-tab").forEach(tab=>tab.addEventListener("click",()=>{
  document.querySelectorAll(".switch-tab,.switch-copy").forEach(el=>el.classList.remove("active"));
  tab.classList.add("active");document.getElementById(tab.dataset.panel)?.classList.add("active");
}));

const logo=document.querySelector(".logo-main");
document.querySelector(".hero-art")?.addEventListener("pointermove",e=>{if(!logo)return;const r=e.currentTarget.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;logo.style.transform=`perspective(700px) rotateY(${x*7}deg) rotateX(${-y*7}deg)`});
document.querySelector(".hero-art")?.addEventListener("pointerleave",()=>{if(logo)logo.style.transform=""});
