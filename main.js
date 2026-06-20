/* ============================================================
   PORTFOLY — MASTER JAVASCRIPT
   Templates data + Platform logic + Editor logic
============================================================ */

/* ── Template Data ── */
const TEMPLATES = [
  { id:1, name:"Midnight Coder", cat:"developer", tags:["dark","minimal","github"], vibe:"Dark & Technical", color:"#2f81f7", grad:"linear-gradient(135deg,#0d1117,#161b22)", desc:"Sleek dark-mode layout with GitHub-style stats, skill bars and project repositories.", file:"new.html", live:true, premium:false, pop:98, emoji:"🌑" },
  { id:2, name:"Terminal Pro", cat:"developer", tags:["dark","terminal","retro"], vibe:"Hacker Aesthetic", color:"#39d353", grad:"linear-gradient(135deg,#0a1f0a,#0d2b0d)", desc:"Command-line themed portfolio that types out content live. Unforgettable first impression.", file:null, live:false, premium:false, pop:94, emoji:"💻" },
  { id:3, name:"Stack Architect", cat:"developer", tags:["clean","structured","tech"], vibe:"Clean & Professional", color:"#58a6ff", grad:"linear-gradient(135deg,#0e1e3a,#1a2e4e)", desc:"Structured layout with open-source contributions, tech stack timeline and project showcase.", file:null, live:false, premium:true, pop:89, emoji:"🏗️" },
  { id:4, name:"Neon Grid", cat:"developer", tags:["neon","dark","cyberpunk"], vibe:"Cyberpunk Vibes", color:"#ff6bff", grad:"linear-gradient(135deg,#1a0033,#2d0066)", desc:"Cyberpunk-inspired with neon highlights, glitch text effects and a high-voltage project grid.", file:null, live:false, premium:true, pop:87, emoji:"⚡" },
  { id:5, name:"Open Source", cat:"developer", tags:["minimal","clean","github"], vibe:"GitHub-Inspired", color:"#e3b341", grad:"linear-gradient(135deg,#1a1200,#2e1f00)", desc:"GitHub profile-style layout with commit graphs, starred repos and a contributions heatmap.", file:null, live:false, premium:false, pop:82, emoji:"🐙" },
  { id:6, name:"DevOps Flow", cat:"developer", tags:["pipeline","dark","infra"], vibe:"Infrastructure Engineer", color:"#4cc9f0", grad:"linear-gradient(135deg,#00142e,#001e40)", desc:"CI/CD focused portfolio with pipeline visualization, tech stack badges and infra sections.", file:null, live:false, premium:false, pop:80, emoji:"🔧" },
  { id:7, name:"Blanc Studio", cat:"designer", tags:["white","minimal","elegant"], vibe:"Pure Minimalism", color:"#1a1a2e", grad:"linear-gradient(135deg,#f5f5f0,#eeeeea)", desc:"Ultra-clean white portfolio with large case study cards, generous whitespace and serif type.", file:null, live:false, premium:false, pop:96, emoji:"🤍" },
  { id:8, name:"Kinetic Art", cat:"designer", tags:["animated","bold","creative"], vibe:"Motion-Driven", color:"#ff4f4f", grad:"linear-gradient(135deg,#2a0808,#400d0d)", desc:"Every scroll triggers a fluid animation. Perfect for motion designers and visual artists.", file:null, live:false, premium:true, pop:91, emoji:"🎞️" },
  { id:9, name:"Polaroid Wall", cat:"designer", tags:["photography","grid","warm"], vibe:"Photography First", color:"#f7c59f", grad:"linear-gradient(135deg,#2a1a0d,#381f0a)", desc:"Photography-first layout with a masonry image wall, lightbox viewer and warm tones.", file:null, live:false, premium:false, pop:88, emoji:"📸" },
  { id:10, name:"Bauhaus Bold", cat:"designer", tags:["brutal","bold","geometric"], vibe:"Neo-Brutalist", color:"#ffd600", grad:"linear-gradient(135deg,#1a1400,#2a2000)", desc:"Bauhaus-inspired with thick borders, bold geometric shapes and high-contrast typography.", file:null, live:false, premium:true, pop:85, emoji:"🟨" },
  { id:11, name:"Pastel Dreams", cat:"designer", tags:["pastel","soft","delicate"], vibe:"Soft & Delicate", color:"#c77dff", grad:"linear-gradient(135deg,#2a0a3a,#3d1054)", desc:"Gentle pastel palette with floating card layouts and lovely micro-interactions.", file:null, live:false, premium:false, pop:79, emoji:"🌸" },
  { id:12, name:"Dark Luxe", cat:"designer", tags:["luxury","gold","dark"], vibe:"Luxury & Prestige", color:"#d4a017", grad:"linear-gradient(135deg,#100a00,#1e1200)", desc:"Ultra-premium dark layout with gold accents, smooth scroll, and a luxury brand feel.", file:null, live:false, premium:true, pop:96, emoji:"👑" },
  { id:13, name:"Campus CV", cat:"student", tags:["academic","clean","professional"], vibe:"Academic & Clean", color:"#00b4d8", grad:"linear-gradient(135deg,#001e2e,#002d40)", desc:"Built for undergrads. Highlights CGPA, projects, internships and certifications beautifully.", file:null, live:false, premium:false, pop:97, emoji:"🎓" },
  { id:14, name:"Research Scholar", cat:"student", tags:["academic","serif","publications"], vibe:"Academic Excellence", color:"#8d6e63", grad:"linear-gradient(135deg,#1a0e0a,#2e1a14)", desc:"For PhD students and researchers — publications list, citations and research areas.", file:null, live:false, premium:true, pop:76, emoji:"📚" },
  { id:15, name:"Grad Showcase", cat:"student", tags:["bright","modern","achievements"], vibe:"Achievement-Focused", color:"#43aa8b", grad:"linear-gradient(135deg,#0a1e18,#0d2e26)", desc:"Showcases your academic journey with vibrant timelines, award cards and skill radars.", file:null, live:false, premium:false, pop:83, emoji:"🏆" },
  { id:16, name:"Internship Hunt", cat:"student", tags:["minimal","resume","clean"], vibe:"Resume-Style", color:"#4361ee", grad:"linear-gradient(135deg,#080e2e,#0e1748)", desc:"Clean, recruiter-friendly layout that reads like a premium resume on screen.", file:null, live:false, premium:false, pop:92, emoji:"💼" },
  { id:17, name:"Story Teller", cat:"creative", tags:["writing","blog","dark"], vibe:"Writers & Bloggers", color:"#e07a5f", grad:"linear-gradient(135deg,#2a1006,#3e170a)", desc:"Long-form content first. Perfect for writers with featured articles, reading list and bio.", file:null, live:false, premium:false, pop:78, emoji:"✍️" },
  { id:18, name:"Podcast Host", cat:"creative", tags:["audio","bold","media"], vibe:"Bold & Loud", color:"#9d4edd", grad:"linear-gradient(135deg,#1a0530,#280a4a)", desc:"For podcasters with episode list, audio player widget and bold social links.", file:null, live:false, premium:true, pop:74, emoji:"🎙️" },
  { id:19, name:"Pixel Artist", cat:"creative", tags:["pixel","retro","gaming"], vibe:"8-Bit Retro", color:"#06d6a0", grad:"linear-gradient(135deg,#001a14,#002b22)", desc:"8-bit pixel art aesthetic with a scrolling game-like experience and interactive sprite.", file:null, live:false, premium:true, pop:81, emoji:"🎮" },
  { id:20, name:"Film Director", cat:"creative", tags:["cinematic","dark","video"], vibe:"Cinematic & Dramatic", color:"#d62828", grad:"linear-gradient(135deg,#200808,#3a0d0d)", desc:"Dark cinematic portfolio with a full-screen video hero, film reel gallery and credits section.", file:null, live:false, premium:true, pop:86, emoji:"🎬" },
  { id:21, name:"Sound Wave", cat:"creative", tags:["music","wave","dark"], vibe:"Musician Portfolio", color:"#ff006e", grad:"linear-gradient(135deg,#200010,#33001a)", desc:"Built for musicians with animated sound wave hero, embedded tracks and event listings.", file:null, live:false, premium:true, pop:82, emoji:"🎵" },
  { id:22, name:"Executive Profile", cat:"corporate", tags:["professional","clean","executive"], vibe:"C-Suite Professional", color:"#1b4332", grad:"linear-gradient(135deg,#0a1a14,#0f2c1e)", desc:"Premium corporate profile for executives with clean metrics, speaking engagements and board positions.", file:null, live:false, premium:true, pop:88, emoji:"👔" },
  { id:23, name:"Consulting Hub", cat:"corporate", tags:["corporate","structured","navy"], vibe:"Structured & Strategic", color:"#023e8a", grad:"linear-gradient(135deg,#000e2a,#001840)", desc:"Built for consultants with case study sections, client logos, testimonials and services.", file:null, live:false, premium:true, pop:75, emoji:"📊" },
  { id:24, name:"Sales Pro", cat:"corporate", tags:["bold","results","kpi"], vibe:"Results-Driven", color:"#f72585", grad:"linear-gradient(135deg,#200010,#380020)", desc:"Highlights KPIs with bold numbers, a deal history timeline and client reviews.", file:null, live:false, premium:false, pop:71, emoji:"📈" },
  { id:25, name:"Minimal Agency", cat:"freelancer", tags:["minimal","white","services"], vibe:"Clean Services", color:"#264653", grad:"linear-gradient(135deg,#0a1418,#0f2028)", desc:"Clean freelancer portfolio with services section, process breakdown, pricing and contact form.", file:null, live:false, premium:false, pop:93, emoji:"🧩" },
  { id:26, name:"Brand Identity", cat:"freelancer", tags:["branding","bold","colorful"], vibe:"Bold & Branded", color:"#fb5607", grad:"linear-gradient(135deg,#1e0c00,#321400)", desc:"For brand designers with logo showcases, brand guidelines and mockup gallery.", file:null, live:false, premium:true, pop:84, emoji:"🎨" },
  { id:27, name:"Web Wizard", cat:"freelancer", tags:["web","dark","interactive"], vibe:"Interactive Showcase", color:"#3a86ff", grad:"linear-gradient(135deg,#060e2a,#0d1a42)", desc:"Showcases live web projects inside browser-frame mockups with hover-play previews.", file:null, live:false, premium:false, pop:90, emoji:"🌐" },
  { id:28, name:"Three.js Space", cat:"special", tags:["3d","webgl","animated"], vibe:"3D Interactive", color:"#7400b8", grad:"linear-gradient(135deg,#0a0020,#180040)", desc:"Fully interactive 3D space with floating project orbs. Pure WOW factor.", file:null, live:false, premium:true, pop:99, emoji:"🚀" },
  { id:29, name:"AI Persona", cat:"special", tags:["ai","chatbot","futuristic"], vibe:"AI-Powered", color:"#00f5d4", grad:"linear-gradient(135deg,#001e1a,#003030)", desc:"An AI chatbot greeter that gives visitors a guided tour of your portfolio.", file:null, live:false, premium:true, pop:97, emoji:"🤖" },
  { id:30, name:"Split Screen", cat:"special", tags:["creative","split","contrast"], vibe:"Dual Identity", color:"#f8961e", grad:"linear-gradient(135deg,#1a0c00,#2e1600)", desc:"Stunning split-screen layout contrasting your professional and creative sides.", file:null, live:false, premium:false, pop:89, emoji:"◐" },
  { id:31, name:"Glassmorphic", cat:"special", tags:["glass","blur","modern"], vibe:"Frosted Glass", color:"#4cc9f0", grad:"linear-gradient(135deg,#060e2a,#0c1e42)", desc:"Frosted glass cards over a vibrant gradient mesh background. iOS-inspired aesthetic.", file:null, live:false, premium:false, pop:95, emoji:"🔮" },
  { id:32, name:"Horizontal Scroll", cat:"special", tags:["horizontal","swipe","cinematic"], vibe:"Scroll-Driven Experience", color:"#480ca8", grad:"linear-gradient(135deg,#0e0028,#180044)", desc:"Cinematic horizontal scrolling experience presenting your work like frames in a film.", file:null, live:false, premium:true, pop:92, emoji:"↔️" },
  { id:33, name:"Vite Flash", cat:"developer", tags:["vite","fast","glow"], vibe:"Insanely Fast", color:"#646cff", grad:"linear-gradient(135deg,#050510,#101025)", desc:"Inspired by the Vite.js homepage. Lightning fast, purple glows, and sharp typography.", file:null, live:false, premium:false, pop:94, emoji:"⚡" },
  { id:34, name:"Solana Blue", cat:"developer", tags:["web3","crypto","gradient"], vibe:"Web3 / Crypto App", color:"#14f195", grad:"linear-gradient(135deg,#0a0a1a,#0d1f2d)", desc:"Perfect for Web3 devs. Ethereal green-blue gradients and sleek component layouts.", file:null, live:false, premium:true, pop:88, emoji:"💎" },
  { id:35, name:"Mac OS Window", cat:"developer", tags:["macos","window","ui"], vibe:"Desktop App Frame", color:"#9898b0", grad:"linear-gradient(135deg,#1e1e1e,#2d2d2d)", desc:"Your content lives inside a realistic macOS application window. Very playful.", file:null, live:false, premium:false, pop:95, emoji:"🍏" },
  { id:36, name:"Gallery Curator", cat:"designer", tags:["gallery","art","clean"], vibe:"Fine Art Vibe", color:"#333333", grad:"linear-gradient(135deg,#e8e8e8,#f5f5f5)", desc:"A brutalist yet pristine white canvas for art directors and traditional artists.", file:null, live:false, premium:true, pop:81, emoji:"🖼️" },
  { id:37, name:"Typographic Poster", cat:"designer", tags:["typography","huge","text"], vibe:"Type-Driven", color:"#ff2a2a", grad:"linear-gradient(135deg,#111111,#222222)", desc:"Massive, overlapping typography layout. Let your words and font choices do the talking.", file:null, live:false, premium:false, pop:85, emoji:"🅰️" },
  { id:38, name:"Pastel Bento", cat:"designer", tags:["bento","grid","pastel"], vibe:"Bento Grid Style", color:"#ffb5a7", grad:"linear-gradient(135deg,#fff0f3,#ffd6ba)", desc:"Trendy Bento Box grid pattern with soft, playful pastel colors.", file:null, live:false, premium:true, pop:98, emoji:"🍱" },
  { id:39, name:"Medical Pro", cat:"student", tags:["medical","clean","blue"], vibe:"Clinical & Crisp", color:"#0077b6", grad:"linear-gradient(135deg,#e0fbfc,#c2dfe3)", desc:"Clean profile for med students and healthcare professionals displaying research and rotations.", file:null, live:false, premium:false, pop:73, emoji:"⚕️" },
  { id:40, name:"Law Associate", cat:"student", tags:["traditional","serif","law"], vibe:"Traditional & Formal", color:"#2b2d42", grad:"linear-gradient(135deg,#d8e2dc,#edede9)", desc:"Formal, traditional layout highlighting moot court experience, publications, and academics.", file:null, live:false, premium:false, pop:77, emoji:"⚖️" },
  { id:41, name:"Film Reviewer", cat:"creative", tags:["film","dark","grid"], vibe:"Cinematic Critique", color:"#e50914", grad:"linear-gradient(135deg,#000000,#111111)", desc:"Display movie reviews, video essays, or screenplays in a sleek Netflix-inspired grid.", file:null, live:false, premium:true, pop:80, emoji:"🍿" },
  { id:42, name:"Digital Nomad", cat:"creative", tags:["travel","map","photos"], vibe:"Travel & Lifestyle", color:"#ffb703", grad:"linear-gradient(135deg,#219ebc,#023047)", desc:"Interactive map hero showing your current location, with travel galleries below.", file:null, live:false, premium:false, pop:82, emoji:"✈️" },
  { id:43, name:"Agency Dark", cat:"corporate", tags:["agency","dark","bold"], vibe:"Modern Agency", color:"#f72585", grad:"linear-gradient(135deg,#10002b,#240046)", desc:"Showcase case studies and client rosters with robust, full-width dark sections.", file:null, live:false, premium:true, pop:89, emoji:"🏢" },
  { id:44, name:"SaaS Founder", cat:"corporate", tags:["saas","clean","metrics"], vibe:"Founder Profile", color:"#43aa8b", grad:"linear-gradient(135deg,#ffffff,#f1faee)", desc:"Highlights your ventures, MRR metrics, exit timelines, and thought leadership.", file:null, live:false, premium:false, pop:91, emoji:"📈" },
  { id:45, name:"E-commerce Expert", cat:"freelancer", tags:["shop","products","web"], vibe:"Shopify Specialist", color:"#95d5b2", grad:"linear-gradient(135deg,#081c15,#1b4332)", desc:"Tailored for Shopify/WooCommerce devs highlighting store conversions and case studies.", file:null, live:false, premium:true, pop:84, emoji:"🛍️" },
  { id:46, name:"Copywriter Pro", cat:"freelancer", tags:["text","minimal","serif"], vibe:"Words that Sell", color:"#d4a373", grad:"linear-gradient(135deg,#faedcd,#fefae0)", desc:"Minimalist, focus-mode layout emphasizing headlines and conversion-driven text.", file:null, live:false, premium:false, pop:86, emoji:"📝" },
  { id:47, name:"Voice Actor", cat:"freelancer", tags:["audio","visualizer","dark"], vibe:"Audio Reel Console", color:"#7209b7", grad:"linear-gradient(135deg,#03071e,#370617)", desc:"Interactive soundboard and voice reel visualizers. Click to play audio samples.", file:null, live:false, premium:true, pop:79, emoji:"🎤" },
  { id:48, name:"Terminal Arcade", cat:"special", tags:["retro","game","arcade"], vibe:"Playable Arcade", color:"#39ff14", grad:"linear-gradient(135deg,#000000,#001a00)", desc:"Turn your portfolio into a playable retro arcade game. Discover skills to win.", file:null, live:false, premium:true, pop:99, emoji:"🕹️" },
  { id:49, name:"Hologram Base", cat:"special", tags:["3d","hologram","sci-fi"], vibe:"Sci-Fi Interface", color:"#0df2c9", grad:"linear-gradient(135deg,#011126,#022c43)", desc:"Futuristic HUD with glowing edges, sound effects on hover, and a hologram centerpiece.", file:null, live:false, premium:true, pop:93, emoji:"🛸" },
  { id:50, name:"Origami Fold", cat:"special", tags:["paper","fold","3d"], vibe:"Digital Papercraft", color:"#f08080", grad:"linear-gradient(135deg,#ffdab9,#ffe4e1)", desc:"Sections playfully unfold like origami as you scroll down the page.", file:null, live:false, premium:true, pop:90, emoji:"🦢" },
  { id:51, name:"Vinyl Record", cat:"special", tags:["music","spin","interactive"], vibe:"Interactive Turntable", color:"#22223b", grad:"linear-gradient(135deg,#4a4e69,#9a8c98)", desc:"A virtual record player. Drag the needle to explore different chapters of your career.", file:null, live:false, premium:true, pop:87, emoji:"📀" },
  { id:52, name:"AI Generator", cat:"special", tags:["prompt","ai","magic"], vibe:"Generated on the Fly", color:"#e0aaff", grad:"linear-gradient(135deg,#10002b,#240046)", desc:"Simulates a prompt generating your profile live. Type a prompt to switch aesthetics.", file:null, live:false, premium:true, pop:96, emoji:"✨" }
];

const CATEGORIES = [
  { id:"all",        label:"All Templates",  emoji:"✨" },
  { id:"developer",  label:"Developer",      emoji:"💻" },
  { id:"designer",   label:"Designer",       emoji:"🎨" },
  { id:"student",    label:"Student",        emoji:"🎓" },
  { id:"creative",   label:"Creative",       emoji:"✍️" },
  { id:"corporate",  label:"Corporate",      emoji:"👔" },
  { id:"freelancer", label:"Freelancer",     emoji:"🧩" },
  { id:"special",    label:"Special FX",     emoji:"🚀" },
];

/* ──────────────────────────────────────────────
   PLATFORM LOGIC
────────────────────────────────────────────── */

/* === PRELOADER === */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    // Artificial minimum delay so the smooth loading screen can be seen locally
    setTimeout(() => {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.visibility = 'hidden';
        loader.style.display = 'none';
        document.body.classList.add('loaded');
      }, 600);
    }, 1500);
  }
});

document.addEventListener('DOMContentLoaded', () => {

  /* === NAV SCROLL SHRINK + HERO PARALLAX === */
  const nav = document.getElementById('mainNav');
  const heroContent = document.getElementById('heroContent');

  let ticking = false;

  function onScroll() {
    const y = window.scrollY;

    // Nav shrink
    nav.classList.toggle('shrunk', y > 60);

    // Hero scale + fade parallax (GPU-only)
    if (heroContent) {
      const scale  = Math.max(0.82, 1 - y / 1600);
      const opa    = Math.max(0, 1 - y / 520);
      const transY = y * 0.28;
      heroContent.style.transform = `scale(${scale}) translateY(${transY}px)`;
      heroContent.style.opacity   = opa;
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });

  /* === HAMBURGER === */
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobMenu');
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
    document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
  });

  /* === STAT COUNTER ANIMATION === */
  const statEls = document.querySelectorAll('.stat-num[data-count]');
  const countObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.getAttribute('data-count'));
      let current = 0;
      const step = target / 42;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current);
        if (current >= target) clearInterval(timer);
      }, 28);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  statEls.forEach(el => countObserver.observe(el));

  /* === SCROLL REVEAL === */
  const revObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); revObserver.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revObserver.observe(el));

  /* === TEMPLATE GALLERY === */
  let activeCat = 'all';

  // Render filter buttons
  const filterContainer = document.getElementById('categoryFilters');
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat.id === 'all' ? ' active' : '');
    btn.innerHTML = `<span class="filter-emoji">${cat.emoji}</span><span>${cat.label}</span>`;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCat = cat.id;
      renderTemplates();
    });
    filterContainer.appendChild(btn);
  });

  // Render template cards
  function renderTemplates() {
    const grid = document.getElementById('templateGrid');
    const count = document.getElementById('templateCount');
    grid.innerHTML = '';

    const list = activeCat === 'all' ? TEMPLATES : TEMPLATES.filter(t => t.cat === activeCat);

    if (count) count.innerHTML = `${list.length} <span>Designs</span>`;

    list.forEach((t, i) => {
      const card = document.createElement('div');
      card.className = 'tpl-card';
      card.style.animationDelay = `${(i % 8) * 0.04}s`;

      // Badge
      let badge = '';
      if (t.live)         badge = `<div class="tpl-badge tpl-badge-live">● Live</div>`;
      else if (t.premium) badge = `<div class="tpl-badge tpl-badge-premium">✦ Premium</div>`;
      else                badge = `<div class="tpl-badge tpl-badge-soon">Coming Soon</div>`;

      card.innerHTML = `
        <div class="tpl-card__thumb">
          <div class="tpl-card__thumb-inner" style="background:${t.grad}">
            ${badge}
            <div class="mock-bar">
              <div class="mock-dot" style="background:#ff5f57"></div>
              <div class="mock-dot" style="background:#febc2e"></div>
              <div class="mock-dot" style="background:#27c93f"></div>
            </div>
            <div class="mock-body">
              <div class="mock-avatar"></div>
              <div class="mock-line mock-line-w"></div>
              <div class="mock-line mock-line-s"></div>
              <div class="mock-blocks">
                <div class="mock-block"></div>
                <div class="mock-block mock-block-acc" style="background:${t.color}33"></div>
              </div>
            </div>
            <div style="font-size:52px;opacity:.12;position:absolute;right:-6px;bottom:-6px;line-height:1;pointer-events:none">${t.emoji}</div>
          </div>
          <div class="tpl-hover-overlay">
            <button class="tpl-hover-btn">Use This Template</button>
          </div>
        </div>
        <div class="tpl-card__body">
          <div class="tpl-name">${t.name}</div>
          <div class="tpl-vibe">${t.vibe}</div>
          <div class="tpl-tags">${t.tags.slice(0,3).map(g=>`<span class="tpl-tag">${g}</span>`).join('')}</div>
          <div class="tpl-footer">
            <div class="tpl-pop"><span class="tpl-pop-heart">♥</span> ${t.pop}% Match</div>
            <button class="tpl-use-btn">Use →</button>
          </div>
        </div>
      `;

      // Click handlers
      const openEditor = () => openEditorWith(t);
      card.querySelector('.tpl-hover-btn').addEventListener('click', e => { e.stopPropagation(); openEditor(); });
      card.querySelector('.tpl-use-btn').addEventListener('click', e => { e.stopPropagation(); openEditor(); });
      card.addEventListener('click', openEditor);

      grid.appendChild(card);

      // Trigger card-in animation
      requestAnimationFrame(() => {
        card.style.animation = `card-in .45s var(--ease) ${i * 0.035}s both`;
      });
    });
  }

  renderTemplates();

  /* === SMOOTH SCROLL === */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const el = document.querySelector(a.getAttribute('href'));
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

}); // end DOMContentLoaded

/* ── Global helpers ── */
function scrollToTemplates() {
  document.getElementById('templates').scrollIntoView({ behavior:'smooth', block:'start' });
}

function closeMob() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobMenu').classList.remove('open');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────────
   EDITOR LOGIC
────────────────────────────────────────────── */
function openEditorWith(template) {
  const platform = document.getElementById('platformView');
  const editor   = document.getElementById('editorView');

  platform.style.opacity = '0';
  platform.style.transition = 'opacity .3s';

  setTimeout(() => {
    platform.style.display = 'none';
    editor.style.display = 'block';
    document.body.style.overflow = 'hidden';
    initEditor(template);

    editor.style.opacity = '0';
    editor.style.transition = 'opacity .3s';
    requestAnimationFrame(() => { editor.style.opacity = '1'; });
  }, 280);
}

function closeEditor() {
  const platform = document.getElementById('platformView');
  const editor   = document.getElementById('editorView');

  editor.style.opacity = '0';
  editor.style.transition = 'opacity .28s';

  setTimeout(() => {
    editor.style.display = 'none';
    platform.style.display = 'block';
    document.body.style.overflow = '';

    platform.style.opacity = '0';
    requestAnimationFrame(() => {
      platform.style.transition = 'opacity .3s';
      platform.style.opacity = '1';
    });
  }, 260);
}

function initEditor(template) {
  // Set template name in topbar
  document.getElementById('editorTplName').textContent = `Editing: ${template.name}`;

  // Load iframe
  const iframe = document.getElementById('editorIframe');
  if (template.file) {
    iframe.src = template.file;
  } else {
    iframe.srcdoc = buildPlaceholderHTML(template);
  }

  // Back button
  document.getElementById('editorBackBtn').onclick = closeEditor;

  // Device buttons
  const canvas = document.getElementById('editorCanvas');
  document.querySelectorAll('.device-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.device-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const device = btn.getAttribute('data-device');
      canvas.className = 'editor-canvas' + (device === 'desktop' ? '' : ` ${device}`);
    });
  });

  // Tab switching
  document.querySelectorAll('.editor-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.editor-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.getAttribute('data-panel'));
      if (panel) panel.classList.add('active');
    });
  });

  // Swatch selection (visual only)
  document.querySelectorAll('.swatch').forEach(sw => {
    sw.addEventListener('click', function() {
      const parent = this.closest('.swatches');
      parent.querySelectorAll('.swatch').forEach(s => s.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Font option selection
  document.querySelectorAll('.font-opt').forEach(opt => {
    opt.addEventListener('click', function() {
      document.querySelectorAll('.font-opt').forEach(o => o.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Save button
  document.getElementById('editorSaveBtn').onclick = () => showToast('Draft saved ✓', '');

  // Create Link button
  document.getElementById('editorPublishBtn').onclick = () => {
    const rawName = document.getElementById('ep-name').value.trim() || 'candidate';
    const slug = rawName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const generatedUrl = `portfoly.me/${slug}`;
    showToast(`Link created!`, generatedUrl);
  };
}

function buildPlaceholderHTML(template) {
  return `<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      background: linear-gradient(145deg, #07070a, #111);
      min-height: 100vh;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Outfit', system-ui, sans-serif;
      color: white; text-align: center;
    }
    .wrap { max-width: 500px; padding: 40px 24px; }
    .emoji { font-size: 64px; margin-bottom: 24px; display: block;
      animation: float 3s ease-in-out infinite; }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
    h1 { font-size: 32px; font-weight: 800; letter-spacing: -.03em; margin-bottom: 12px;
      background: linear-gradient(135deg, #fff, #9898b0);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .badge {
      display: inline-block; padding: 5px 14px; border-radius: 100px;
      font-size: 12px; margin-bottom: 20px; letter-spacing: .04em;
      background: ${template.color}22; border: 1px solid ${template.color}44; color: ${template.color};
    }
    p { color: rgba(255,255,255,.45); font-size: 14px; line-height: 1.7; }
    .grad-block {
      width: 200px; height: 4px; border-radius: 4px;
      background: linear-gradient(90deg, ${template.color}, transparent);
      margin: 24px auto 0;
    }
  </style>
</head>
<body>
  <div class="wrap">
    <span class="emoji">${template.emoji}</span>
    <div class="badge">${template.cat.toUpperCase()} · ${template.vibe}</div>
    <h1>${template.name}</h1>
    <p>${template.desc}</p>
    <p style="margin-top:16px;color:rgba(255,255,255,.25);font-size:12px">Full template available with backend integration</p>
    <div class="grad-block"></div>
  </div>
</body>
</html>`;
}

function showToast(msg, url) {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toastMsg');
  const urlEl = document.getElementById('toastUrl');
  const copyBtn = document.getElementById('toastCopyBtn');

  if (msgEl) msgEl.textContent = msg;
  if (urlEl) urlEl.textContent = url || '';

  toast.classList.add('show');

  if (copyBtn && url) {
    copyBtn.classList.remove('copied');
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(url).then(() => {
        copyBtn.classList.add('copied');
        if (msgEl) msgEl.textContent = 'Link copied to clipboard!';
        setTimeout(() => {
          if (msgEl) msgEl.textContent = msg;
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    };
  }

  // Auto-hide after 5s unless hovered
  let hideTimer = setTimeout(() => toast.classList.remove('show'), 5000);
  toast.onmouseenter = () => clearTimeout(hideTimer);
  toast.onmouseleave = () => {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(() => toast.classList.remove('show'), 2000);
  };
}