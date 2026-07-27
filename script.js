/* ============================================================
   TALHA AHMED PORTFOLIO — MAIN SCRIPT
   ============================================================ */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------------------------------------------------
   ICONS (tiny inline SVG set, no external icon lib needed)
--------------------------------------------------------- */
const ICON = {
  scissors:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M8.5 8.5 20 20M20 4 8.5 15.5"/></svg>`,
  film:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/></svg>`,
  spark:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>`,
  mic:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>`,
  layers:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 13 9 5 9-5"/></svg>`,
  ad:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 10v4M11 9v5M15 11v3"/></svg>`,
  gamepad:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="8" width="20" height="9" rx="4"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18.5 10.5h.01"/></svg>`,
  doc:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h5M9 13h6M9 17h6"/></svg>`,
  building:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 21V6l8-3 8 3v15"/><path d="M9 21v-6h6v6M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/></svg>`,
  bot:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 3v5M9 13v2M15 13v2"/></svg>`,
  phone:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/></svg>`,
  reel:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="8" cy="8" r="1.4"/><circle cx="16" cy="16" r="1.4"/><path d="m9 15 6-6"/></svg>`,
  yt:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 5 3-5 3Z" fill="currentColor" stroke="none"/></svg>`,
  check:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 13 4 4 10-10"/></svg>`,
  play:`<svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none"><path d="M8 5v14l11-7Z"/></svg>`
};

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const SERVICES = [
  ['reel','Short Form Editing','Punchy, high-retention cuts built for the first three seconds — Reels, TikTok and Shorts.'],
  ['film','Long Form Editing','Full YouTube episodes edited for pacing, story and watch time, start to finish.'],
  ['yt','YouTube Videos','Thumbnails-ready, chapter-marked, optimized edits built for the algorithm.'],
  ['phone','TikTok & Reels','Native-feel edits with trending pacing, captions and sound design.'],
  ['mic','Podcast Editing','Multi-cam cleanup, noise removal, pacing tightened, clip-ready moments pulled out.'],
  ['spark','Motion Graphics','Kinetic typography, logo stings and animated overlays that elevate every frame.'],
  ['ad','Commercial Ads','Conversion-focused edits for paid social and brand campaigns.'],
  ['layers','Promotional Videos','Product launches and brand promos cut to sell in under 60 seconds.'],
  ['gamepad','Gaming Videos','Highlight reels and montages synced tight to in-game action.'],
  ['doc','Documentary Editing','Long-form narrative structure with careful pacing and sound design.'],
  ['building','Corporate Videos','Polished, on-brand internal and external corporate content.'],
  ['bot','AI Generated Videos','AI-assisted content pipelines using Runway, Kling and ElevenLabs.']
];

const TOOLS_SOFTWARE = ['Premiere Pro','After Effects','Photoshop','CapCut Pro','DaVinci Resolve','Canva'];
const TOOLS_AI = ['ChatGPT','Claude','Gemini','Runway','Kling AI','Higgsfield','ElevenLabs','Midjourney','Flux'];

const SKILLS = [
  ['Video Editing', 97],['Motion Graphics', 92],['Color Grading', 90],['Color Correction', 88],
  ['Audio Mixing', 86],['Sound Design', 89],['Subtitle Animation', 91],['VFX', 82],
  ['Transitions', 94],['Storytelling', 95],['YouTube Optimization', 88],['Social Media Editing', 96]
];

const PROJECTS = [
  {size:'h1', tag:'YouTube Long-Form', title:'The Growth Playbook — Ep. 12', desc:'A 22-minute business breakdown edited for retention: dynamic pacing, kinetic captions and a custom lower-third system.', client:'Nova Media'},
  {size:'h2', tag:'Short-Form / Reels', title:'Founder Diaries — Reel Series', desc:'A 15-part vertical series distilled from long interviews into punchy, hook-first reels averaging 2.1M views.', client:'Loopline'},
  {size:'h3', tag:'Motion Graphics', title:'Aurora — Brand Sting', desc:'A 6-second animated logo reveal used across every video in the Aurora brand family.', client:'Aurora Studio'},
  {size:'h2', tag:'Commercial Ad', title:'StreamLabs+ Launch Ad', desc:'A 30-second paid social ad built to convert, cut for three different aspect ratios.', client:'StreamLabs+'},
  {size:'h1', tag:'Podcast Editing', title:'Mind & Metrics — Full Season', desc:'Weekly two-hour podcast episodes cleaned, tightened and clipped into 40+ shareable moments.', client:'Northgate'},
  {size:'h3', tag:'Gaming Video', title:'Clutch Moments — Montage', desc:'A tempo-synced highlight reel cut to the beat of the in-game soundtrack.', client:'PixelForge'},
  {size:'h2', tag:'AI Generated Video', title:'Future Cities — AI Concept Film', desc:'A fully AI-generated concept film built with Runway and Kling, voiced with ElevenLabs.', client:'Concept Lab'},
];

const TESTIMONIALS = [
  ['I sent Talha raw footage and got back something that felt like a completely different production. Retention on our channel jumped almost overnight.','Ali Raza','Founder, Nova Media'],
  ['Fastest turnaround I have had with any editor, and the quality never dropped. He understands pacing better than most agencies I have worked with.','Sarah Malik','Content Lead, Loopline'],
  ['The AI-assisted workflow he built for us cut our production time in half. Still looks completely hand-crafted.','Daniyal Khan','Founder, Concept Lab'],
];

const PRICING = [
  {tier:'Starter', price:149, per:'per video', feats:['Up to 5 min raw footage','Basic color correction','Captions & simple transitions','2 revisions','48-hour delivery'], cta:'Get Started', featured:false},
  {tier:'Professional', price:349, per:'per video', feats:['Up to 20 min raw footage','Advanced color grading','Motion graphics & sound design','4 revisions','Priority 24-hour delivery'], cta:'Book Professional', featured:true},
  {tier:'Premium', price:'Custom', per:'monthly retainer', feats:['Unlimited monthly videos','Dedicated editor on-call','Full motion graphics package','Unlimited revisions','Same-day turnaround'], cta:'Talk to Me', featured:false},
];

const TIMELINE = [
  ['2019','Student','Started a CS degree while quietly falling in love with editing timelines instead of textbooks.'],
  ['2020','Learning Editing','Spent nights learning Premiere Pro and After Effects, editing for free to build a reel.'],
  ['2022','Professional Editor','Went full-time freelance, working with YouTubers and startups across three continents.'],
  ['2024','AI Creator','Folded AI tools into the pipeline — Runway, Kling, ElevenLabs — to move faster without losing craft.'],
  ['Next','Future Agency Owner','Building a small, senior editing studio that brands can trust with their entire content pipeline.'],
];

const FAQS = [
  ['What do you need from me to get started?','Just your raw footage (or a Google Drive / Frame.io link), a brief on tone and goals, and any brand assets like logos or fonts. I handle the rest.'],
  ['How fast is turnaround?','Short-form edits are typically delivered in 24–48 hours. Long-form YouTube episodes take 2–4 days depending on length and complexity.'],
  ['Do you offer revisions?','Yes — every package includes revision rounds so the final cut matches your vision exactly.'],
  ['Can you match my existing channel style?','Always. I start every project by studying your best-performing videos so new edits feel consistent with your brand.'],
  ['Do you work with international clients?','Yes, I work remotely with clients worldwide and communicate primarily over WhatsApp, email and Discord.'],
];

/* ---------------------------------------------------------
   RENDER: SERVICES
--------------------------------------------------------- */
const servicesGrid = document.getElementById('servicesGrid');
servicesGrid.innerHTML = SERVICES.map(([icon,title,desc])=>`
  <div class="service-card reveal">
    <div class="icon">${ICON[icon]}</div>
    <h3>${title}</h3>
    <p>${desc}</p>
  </div>
`).join('');
servicesGrid.querySelectorAll('.service-card').forEach(card=>{
  card.addEventListener('mousemove', e=>{
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (e.clientX-r.left)+'px');
    card.style.setProperty('--my', (e.clientY-r.top)+'px');
  });
});

/* ---------------------------------------------------------
   RENDER: TOOLS
--------------------------------------------------------- */
function renderTools(target, list){
  target.innerHTML = list.map(name=>`
    <div class="tool-card reveal">
      <div class="tool-mark">${name.slice(0,2).toUpperCase()}</div>
      <span>${name}</span>
    </div>
  `).join('');
}
renderTools(document.getElementById('toolsGridSoftware'), TOOLS_SOFTWARE);
renderTools(document.getElementById('toolsGridAI'), TOOLS_AI);

/* ---------------------------------------------------------
   RENDER: SKILLS
--------------------------------------------------------- */
const skillsWrap = document.getElementById('skillsWrap');
skillsWrap.innerHTML = SKILLS.map(([name,pct])=>`
  <div class="skill-row reveal">
    <div class="skill-name">${name}</div>
    <div class="skill-track"><div class="skill-fill" data-pct="${pct}"></div></div>
    <div class="skill-pct">${pct}%</div>
  </div>
`).join('');

/* ---------------------------------------------------------
   RENDER: PROJECTS
--------------------------------------------------------- */
const projectsGrid = document.getElementById('projectsGrid');
projectsGrid.innerHTML = PROJECTS.map((p,i)=>`
  <div class="project-card ${p.size} reveal" data-idx="${i}">
    <div class="thumb">
      <div class="play"><span>${ICON.play}</span></div>
    </div>
    <div class="meta">
      <span class="tag">${p.tag}</span>
      <h4>${p.title}</h4>
    </div>
  </div>
`).join('');

/* ---------------------------------------------------------
   RENDER: TESTIMONIALS
--------------------------------------------------------- */
const testiGrid = document.getElementById('testiGrid');
testiGrid.innerHTML = TESTIMONIALS.map(([quote,name,role])=>`
  <div class="testi-card reveal">
    <div class="testi-stars">★★★★★</div>
    <p>&ldquo;${quote}&rdquo;</p>
    <div class="testi-person">
      <div class="testi-avatar">${name.split(' ').map(n=>n[0]).join('')}</div>
      <div>
        <div class="name">${name}</div>
        <div class="role">${role}</div>
      </div>
    </div>
  </div>
`).join('');

/* ---------------------------------------------------------
   RENDER: PRICING
--------------------------------------------------------- */
const pricingGrid = document.getElementById('pricingGrid');
pricingGrid.innerHTML = PRICING.map(p=>`
  <div class="price-card reveal ${p.featured?'featured':''}">
    <div class="tier">${p.tier}</div>
    <div class="price">${typeof p.price==='number' ? `<sup>$</sup>${p.price}`:p.price}</div>
    <div class="per">${p.per}</div>
    <ul>
      ${p.feats.map(f=>`<li>${ICON.check}<span>${f}</span></li>`).join('')}
    </ul>
    <a href="#contact" class="btn ${p.featured?'btn-primary':'btn-ghost'} magnetic">${p.cta}</a>
  </div>
`).join('');

/* ---------------------------------------------------------
   RENDER: TIMELINE
--------------------------------------------------------- */
const timelineWrap = document.getElementById('timelineWrap');
timelineWrap.innerHTML = TIMELINE.map(([year,title,desc])=>`
  <div class="tl-item reveal">
    <span class="tl-year">${year}</span>
    <h4>${title}</h4>
    <p>${desc}</p>
  </div>
`).join('');

/* ---------------------------------------------------------
   RENDER: FAQ
--------------------------------------------------------- */
const faqList = document.getElementById('faqList');
faqList.innerHTML = FAQS.map((f,i)=>`
  <div class="faq-item reveal" data-i="${i}">
    <button class="faq-q" aria-expanded="false">
      <span>${f[0]}</span><span class="plus"></span>
    </button>
    <div class="faq-a"><p>${f[1]}</p></div>
  </div>
`).join('');
faqList.querySelectorAll('.faq-item').forEach(item=>{
  const q = item.querySelector('.faq-q');
  const a = item.querySelector('.faq-a');
  q.addEventListener('click', ()=>{
    const isOpen = item.classList.contains('open');
    faqList.querySelectorAll('.faq-item.open').forEach(o=>{
      o.classList.remove('open');
      o.querySelector('.faq-a').style.maxHeight = null;
      o.querySelector('.faq-q').setAttribute('aria-expanded','false');
    });
    if(!isOpen){
      item.classList.add('open');
      a.style.maxHeight = a.scrollHeight+'px';
      q.setAttribute('aria-expanded','true');
    }
  });
});

/* ---------------------------------------------------------
   PROJECT MODAL
--------------------------------------------------------- */
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', e=>{ if(e.target===modal) closeModal(); });
document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeModal(); });

projectsGrid.addEventListener('click', e=>{
  const card = e.target.closest('.project-card');
  if(!card) return;
  const p = PROJECTS[card.dataset.idx];
  modalContent.innerHTML = `
    <span class="modal-tag">${p.tag}</span>
    <h3>${p.title}</h3>
    <div class="modal-video"><span>${ICON.play}</span></div>
    <p>${p.desc}</p>
    <p style="color:var(--accent);font-weight:600;">Client: ${p.client}</p>
    <div class="ba-slider">
      <div class="side before">BEFORE</div>
      <div class="side after" id="baAfter">AFTER</div>
      <div class="ba-handle" id="baHandle"></div>
      <input type="range" min="0" max="100" value="50" id="baRange" aria-label="Before and after comparison">
    </div>
  `;
  const range = document.getElementById('baRange');
  const after = document.getElementById('baAfter');
  const handle = document.getElementById('baHandle');
  range.addEventListener('input', ()=>{
    after.style.clipPath = `inset(0 ${100-range.value}% 0 0)`;
    handle.style.left = range.value+'%';
  });
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
});
function closeModal(){
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

/* ---------------------------------------------------------
   LOADER
--------------------------------------------------------- */
window.addEventListener('load', ()=>{
  const fill = document.getElementById('loader-fill');
  const count = document.getElementById('loader-count');
  let n = 0;
  const iv = setInterval(()=>{
    n += Math.random()*18;
    if(n>=100){ n=100; clearInterval(iv); }
    fill.style.width = n+'%';
    count.textContent = Math.floor(n)+'%';
    if(n===100){
      setTimeout(()=>{
        document.getElementById('loader').style.transition = 'opacity .6s ease, transform .6s ease';
        document.getElementById('loader').style.opacity = '0';
        document.getElementById('loader').style.transform = 'translateY(-10px)';
        document.body.classList.remove('is-loading');
        setTimeout(()=>{ document.getElementById('loader').style.display='none'; initEntranceAnim(); }, 620);
      }, 200);
    }
  }, 110);
});

/* ---------------------------------------------------------
   CUSTOM CURSOR
--------------------------------------------------------- */
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx=0,my=0, rx=0, ry=0;
window.addEventListener('mousemove', e=>{
  mx=e.clientX; my=e.clientY;
  dot.style.left = mx+'px'; dot.style.top = my+'px';
});
(function loop(){
  rx += (mx-rx)*0.16; ry += (my-ry)*0.16;
  ring.style.left = rx+'px'; ring.style.top = ry+'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a, button, .service-card, .project-card, .price-card, input, textarea, select, .faq-q').forEach(el=>{
  el.addEventListener('mouseenter', ()=>ring.classList.add('is-active'));
  el.addEventListener('mouseleave', ()=>ring.classList.remove('is-active'));
});

/* ---------------------------------------------------------
   MAGNETIC BUTTONS
--------------------------------------------------------- */
document.querySelectorAll('.magnetic').forEach(btn=>{
  btn.addEventListener('mousemove', e=>{
    const r = btn.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width/2) * 0.35;
    const y = (e.clientY - r.top - r.height/2) * 0.35;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  });
  btn.addEventListener('mouseleave', ()=>{ btn.style.transform = 'translate(0,0)'; });
});

/* ---------------------------------------------------------
   NAV: scroll state + mobile menu
--------------------------------------------------------- */
const nav = document.getElementById('siteNav');
const progress = document.getElementById('scroll-progress');
function onScroll(){
  nav.classList.toggle('scrolled', window.scrollY > 40);
  const h = document.documentElement;
  const p = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = p+'%';
}
window.addEventListener('scroll', onScroll);

const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobile-menu');
burger.addEventListener('click', ()=>{
  const open = mobileMenu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>mobileMenu.classList.remove('open')));

/* ---------------------------------------------------------
   LENIS SMOOTH SCROLL + GSAP TICKER
--------------------------------------------------------- */
let lenis;
try{
  lenis = new Lenis({ lerp:0.1, smoothWheel:true });
  lenis.on('scroll', onScroll);
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);
}catch(e){ /* Lenis failed to load, native scroll still works */ }

if(window.gsap && window.ScrollTrigger){
  gsap.registerPlugin(ScrollTrigger);
}

/* ---------------------------------------------------------
   REVEAL ON SCROLL (IntersectionObserver)
--------------------------------------------------------- */
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      io.unobserve(entry.target);

      // Skill bars
      if(entry.target.classList.contains('skill-row')){
        const fill = entry.target.querySelector('.skill-fill');
        fill.style.width = fill.dataset.pct+'%';
      }
    }
  });
}, { threshold:0.15, rootMargin:'0px 0px -60px 0px' });
revealEls.forEach((el,i)=>{
  el.style.transitionDelay = (Math.min(i%6,5)*0.06)+'s';
  io.observe(el);
});

/* Skill rows need their own class for the observer above */
document.querySelectorAll('.skill-row').forEach(r=>r.classList.add('reveal'));

/* ---------------------------------------------------------
   HERO HEADLINE — line reveal
--------------------------------------------------------- */
function initEntranceAnim(){
  if(window.gsap){
    gsap.set('.hero h1 .line span', { yPercent:120 });
    gsap.to('.hero h1 .line span', { yPercent:0, duration:1, ease:'power4.out', stagger:0.12, delay:0.1 });
    gsap.fromTo('.hero .eyebrow', {opacity:0,y:14}, {opacity:1,y:0,duration:.8,delay:.05});
    gsap.utils.toArray('.hero .reveal').forEach((el,i)=>{
      gsap.fromTo(el, {opacity:0,y:22}, {opacity:1,y:0,duration:.9,delay:0.25+i*0.08,ease:'power3.out'});
    });
  } else {
    document.querySelectorAll('.hero .reveal, .hero h1 .line span').forEach(el=>{ el.style.opacity=1; el.style.transform='none'; });
  }
}

/* ---------------------------------------------------------
   COUNTERS
--------------------------------------------------------- */
const counters = document.querySelectorAll('.num[data-count]');
const counterIO = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      counterIO.unobserve(entry.target);
      const target = parseInt(entry.target.dataset.count,10);
      const suffix = entry.target.dataset.suffix || '';
      let cur = 0;
      const dur = 1600, start = performance.now();
      function tick(t){
        const p = Math.min((t-start)/dur, 1);
        const eased = 1 - Math.pow(1-p, 3);
        cur = Math.floor(eased*target);
        entry.target.textContent = cur.toLocaleString()+suffix;
        if(p<1) requestAnimationFrame(tick);
        else entry.target.textContent = target.toLocaleString()+suffix;
      }
      requestAnimationFrame(tick);
    }
  });
}, {threshold:0.5});
counters.forEach(c=>counterIO.observe(c));

/* ---------------------------------------------------------
   HERO TIMELINE SCRUBBER (signature element)
--------------------------------------------------------- */
(function buildScrubber(){
  const track = document.getElementById('tsTrack');
  const playhead = document.getElementById('tsPlayhead');
  const barCount = 46;
  for(let i=0;i<barCount;i++){
    const bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = (18 + Math.random()*26)+'px';
    track.insertBefore(bar, playhead);
  }
  let pos = 0;
  setInterval(()=>{
    pos = (pos + 0.6) % 100;
    playhead.style.left = pos+'%';
  }, 40);
  // subtle bar height pulsing
  setInterval(()=>{
    track.querySelectorAll('.bar').forEach(b=>{
      if(Math.random()>0.7) b.style.height = (14 + Math.random()*30)+'px';
    });
  }, 400);
})();

/* About waveform bars */
(function buildAboutWave(){
  const wave = document.getElementById('aboutWave');
  for(let i=0;i<40;i++){
    const bar = document.createElement('i');
    const h = 20 + Math.sin(i*0.5)*40 + Math.random()*30;
    bar.style.height = Math.max(10,h)+'px';
    wave.appendChild(bar);
  }
})();

/* ---------------------------------------------------------
   THREE.JS AMBIENT PARTICLE BACKGROUND
--------------------------------------------------------- */
(function initThree(){
  if(!window.THREE) return;
  const canvas = document.getElementById('bg-canvas');
  const renderer = new THREE.WebGLRenderer({ canvas, alpha:true, antialias:true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
  camera.position.z = 18;

  const count = window.innerWidth < 760 ? 260 : 620;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count*3);
  for(let i=0;i<count;i++){
    positions[i*3] = (Math.random()-0.5)*40;
    positions[i*3+1] = (Math.random()-0.5)*24;
    positions[i*3+2] = (Math.random()-0.5)*20;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions,3));
  const mat = new THREE.PointsMaterial({ color:0x60A5FA, size:0.045, transparent:true, opacity:0.55 });
  const points = new THREE.Points(geo, mat);
  scene.add(points);

  let mouseX=0, mouseY=0;
  window.addEventListener('mousemove', e=>{
    mouseX = (e.clientX/window.innerWidth - 0.5);
    mouseY = (e.clientY/window.innerHeight - 0.5);
  });

  function animate(){
    points.rotation.y += 0.0007;
    points.rotation.x += 0.0002;
    camera.position.x += (mouseX*1.4 - camera.position.x)*0.02;
    camera.position.y += (-mouseY*1.4 - camera.position.y)*0.02;
    camera.lookAt(scene.position);
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();

  window.addEventListener('resize', ()=>{
    camera.aspect = window.innerWidth/window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
})();

/* ---------------------------------------------------------
   CONTACT FORM (EmailJS-ready; falls back to mailto)
--------------------------------------------------------- */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(contactForm);
  const name = data.get('name'), email = data.get('email'), type = data.get('type'), message = data.get('message');

  // If EmailJS is configured (see README), replace this block with:
  // emailjs.send('SERVICE_ID','TEMPLATE_ID',{name,email,type,message}, 'PUBLIC_KEY')
  formStatus.textContent = 'Sending...';
  setTimeout(()=>{
    formStatus.textContent = `Thanks ${name.split(' ')[0]}! Your message has been prepared — opening your email client to send it.`;
    const subject = encodeURIComponent(`New project inquiry: ${type}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${type}\n\n${message}`);
    window.location.href = `mailto:hello@talhaahmed.com?subject=${subject}&body=${body}`;
    contactForm.reset();
  }, 700);
});
