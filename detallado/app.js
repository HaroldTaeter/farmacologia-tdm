/* =========================================================
   Infografía TDM · render + interacciones
   ========================================================= */

// ===================================================================
// RENDER FUNCTIONS
// ===================================================================

function renderHero(app) {
  const h = window.HERO;
  const s = document.createElement("section");
  s.id = "hero";
  s.className = "hero";
  s.dataset.screenLabel = "01 Hero";
  s.innerHTML = `
    <div class="hero-grid">
      <div class="hero-text">
        <div class="eyebrow"><span>${h.eyebrow}</span></div>
        <h1 class="display">${h.title}</h1>
        <p class="lede">${h.lede}</p>
        <div class="hero-meta">
          ${h.meta.map(m => `<div><span class="lbl">${m.label}</span><span class="num">${m.value}</span></div>`).join("")}
        </div>
      </div>
      <div class="hero-art">
        <svg viewBox="0 0 420 520" class="hero-svg" aria-hidden="true">
          <g transform="translate(40, 50) scale(2.3)">
            <g transform="translate(-25.375733,187.915837) scale(0.1,-0.1)" fill="#2C5282">
              <path d="M906 1864 c-243 -53 -416 -183 -477 -362 -27 -79 -40 -208 -28 -282 l9 -60 -58 -88 c-76 -112 -104 -169 -97 -192 3 -10 30 -30 60 -44 l55 -26 -17 -41 c-16 -41 -16 -43 5 -59 15 -13 18 -20 9 -29 -8 -8 -4 -18 16 -39 27 -28 27 -30 12 -65 -23 -54 -20 -109 8 -134 35 -32 103 -53 196 -62 150 -14 164 -37 138 -235 -1 -10 3 -21 10 -23 14 -5 28 68 27 144 0 39 -6 61 -22 83 -25 33 -27 31 51 49 106 25 235 99 262 151 17 34 19 50 5 50 -5 0 -10 -6 -10 -14 0 -48 -148 -139 -280 -172 -136 -34 -347 1 -370 61 -6 15 -3 44 8 83 16 61 16 62 -6 85 -21 22 -21 25 -6 38 15 12 14 15 -11 35 -26 20 -27 24 -16 54 17 51 14 57 -44 84 -71 32 -71 47 1 162 103 162 96 145 85 213 -18 109 10 265 63 354 122 209 486 330 771 257 123 -32 219 -84 301 -165 116 -114 164 -233 164 -405 0 -161 -31 -248 -149 -413 -90 -126 -105 -171 -104 -312 0 -107 36 -378 53 -406 18 -29 17 1 -6 131 -15 82 -25 182 -27 255 -2 135 11 186 66 266 107 154 136 203 155 265 94 297 -4 575 -253 721 -155 91 -370 125 -549 87z"/>
            </g>
          </g>
          <g transform="translate(40,75)">
            <circle r="18" fill="#E9B949"/>
            <g stroke="#E9B949" stroke-width="2" stroke-linecap="round">
              <line x1="0" y1="-28" x2="0" y2="-34"/>
              <line x1="0" y1="28" x2="0" y2="34"/>
              <line x1="-28" y1="0" x2="-34" y2="0"/>
              <line x1="28" y1="0" x2="34" y2="0"/>
              <line x1="-20" y1="-20" x2="-25" y2="-25"/>
              <line x1="20" y1="20" x2="25" y2="25"/>
              <line x1="-20" y1="20" x2="-25" y2="25"/>
              <line x1="20" y1="-20" x2="25" y2="-25"/>
            </g>
          </g>
          <g class="cloud-group" stroke-linecap="round" stroke-linejoin="round">
            <g transform="translate(135, 115) scale(2.9)" fill="#8AA9C4" stroke="#5C7A96" stroke-width="1.2">
              <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
            </g>
            <g transform="translate(240, 95) scale(3.4)" fill="#4A90C2" stroke="#2C5282" stroke-width="1.2">
              <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
            </g>
            <g transform="translate(225, 90) scale(2.2)" fill="#8AA9C4" stroke="#5C7A96" stroke-width="1.0">
              <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
            </g>
            <g transform="translate(165, 85) scale(4.5)" fill="#2C5282" stroke="#1E3A5C" stroke-width="1.3">
              <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
            </g>
            <g transform="translate(155, 85) scale(2.7)" fill="#4A90C2" stroke="#2C5282" stroke-width="1.0">
              <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"/>
            </g>
          </g>
          <g class="rain" stroke="#4A90C2" stroke-width="2" stroke-linecap="round">
            <line x1="180" y1="180" x2="180" y2="195"/>
            <line x1="210" y1="195" x2="210" y2="212"/>
            <line x1="240" y1="185" x2="240" y2="200"/>
            <line x1="270" y1="200" x2="270" y2="218"/>
            <line x1="195" y1="230" x2="195" y2="247"/>
            <line x1="225" y1="245" x2="225" y2="262"/>
            <line x1="260" y1="230" x2="260" y2="248"/>
            <line x1="175" y1="275" x2="175" y2="293"/>
            <line x1="205" y1="285" x2="205" y2="303"/>
            <line x1="240" y1="275" x2="240" y2="292"/>
            <line x1="275" y1="285" x2="275" y2="302"/>
            <line x1="215" y1="310" x2="215" y2="328"/>
          </g>
        </svg>
      </div>
    </div>
  `;
  app.appendChild(s);
}

function renderDSM5(app) {
  const d = window.DSM5_SECTION;
  const s = document.createElement("section");
  s.id = "sintomas";
  s.className = "section";
  s.dataset.screenLabel = "02 Criterios DSM-5-TR";
  s.innerHTML = `
    <header class="section-head">
      <h2>${d.title}</h2>
      <p class="sub">${d.sub}</p>
    </header>

    <div class="criterion-card dsm-criterion-a">
      <div class="criterion-label" style="margin: 0">${d.criterionA.label}</div>
      <div class="dsm-a-body" style="margin: 0">
        <div class="dsm-a-desc">
          <div class="criterion-title">${d.criterionA.title}</div>
          <p class="criterion-body">${d.criterionA.body}</p>
        </div>
        <div class="dsm-a-counter">
          <div class="dsm-a-num"><span id="count-num">0</span><small> / 9</small></div>
          <div class="counter-flag" id="counter-flag">—</div>
          <p class="dsm-a-feedback" id="counter-text">Selecciona los síntomas presentes</p>
        </div>
      </div>
    </div>

    <div class="checklist-wrap">
      <div class="checklist" id="dsm-checklist" role="group" aria-label="Criterio A · síntomas"></div>
    </div>

    <div class="criteria-extra">
      ${d.criteriaExtra.map(c => `
        <div class="criterion-card">
          <div class="criterion-label">${c.label}</div>
          <div class="criterion-title">${c.title}</div>
          <p class="criterion-body">${c.body}</p>
        </div>
      `).join("")}
    </div>
  `;
  app.appendChild(s);
}

function renderEtiology(app) {
  const e = window.ETIOLOGY;
  const s = document.createElement("section");
  s.id = "etiologia";
  s.className = "section alt";
  s.dataset.screenLabel = "03 Etiología";
  s.innerHTML = `
    <header class="section-head">
      <h2>${e.title}</h2>
      <p class="sub">${e.sub}</p>
    </header>
    <div class="etio-grid">
      ${e.cards.map(card => `
        <article class="etio-card ${card.id}">
          <div class="etio-head">
            <i data-lucide="${card.icon}"></i>
            <h3>${card.title}</h3>
          </div>
          <ul>
            ${card.items.map(item => `
              <li><b>${item.term}</b><span class="etio-detail">${item.detail}</span></li>
            `).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;
  app.appendChild(s);
}

function renderSNC(app) {
  const d = window.SNC_SECTION;
  const syn = d.synapse;
  const s = document.createElement("section");
  s.id = "snc";
  s.className = "section";
  s.dataset.screenLabel = "04 SNC";
  s.innerHTML = `
    <header class="section-head">
      <h2>${d.title}</h2>
      <p class="sub">${d.sub}</p>
    </header>

    <div class="snc-sub-label">Nivel neuroanatómico</div>
    <div class="brain-layout">
      <div class="brain-holder">
        <img src="detallado/brain.jpg" class="brain-img" alt="Cerebro · vista sagital lateral">
        <svg id="brain-svg" class="brain-overlay" viewBox="0 0 560 440" aria-label="Regiones cerebrales interactivas">

          <g class="region" data-region="pfc"
             transform="translate(-90, -30) rotate(0, 155, 195) translate(155,195) scale(-1.3, 1.3) translate(-155,-195)">
            <path class="region-shape" fill="rgba(74,144,194,0.32)" stroke="#2C5282" stroke-width="1.2" d="M 130,150 C 115,175 110,210 125,240 C 145,260 180,255 195,230 C 205,200 195,165 175,145 C 160,132 142,135 130,150 Z"/>
            <text x="155" y="200" class="region-label" transform="translate(155,0) scale(-1,1) translate(-155,0)">CPF</text>
          </g>

          <g class="region" data-region="acc"
             transform="translate(-130, 10) rotate(90, 273, 175) translate(273,175) scale(1) translate(-273,-175)">
            <path class="region-shape" fill="rgba(74,144,194,0.32)" stroke="#2C5282" stroke-width="1.2" d="M 230,160 C 255,148 290,148 315,158 C 322,168 318,182 308,188 C 280,195 250,195 232,185 C 225,178 225,168 230,160 Z"/>
            <text x="273" y="175" class="region-label" transform="rotate(-90, 273, 175)">CCA</text>
          </g>

          <g class="region" data-region="hippocampus"
             transform="translate(-55, -5) rotate(-30, 325, 285) translate(325,285) scale(1) translate(-325,-285)">
            <path class="region-shape" fill="rgba(74,144,194,0.32)" stroke="#2C5282" stroke-width="1.2" d="M 295,275 C 315,268 340,270 358,280 C 365,290 358,300 345,302 C 325,302 305,298 292,288 C 288,283 290,278 295,275 Z"/>
            <text x="325" y="290" class="region-label">Hipoc.</text>
          </g>

          <g class="region" data-region="amygdala"
             transform="translate(-55, 25) rotate(0, 268, 268)">
            <ellipse class="region-shape" fill="rgba(74,144,194,0.32)" stroke="#2C5282" stroke-width="1.2" cx="268" cy="268" rx="20" ry="15"/>
            <text x="268" y="272" class="region-label">Amíg.</text>
          </g>

          <g class="region" data-region="hypothalamus"
             transform="translate(0, 20) rotate(0, 235, 240)">
            <ellipse class="region-shape" fill="rgba(74,144,194,0.32)" stroke="#2C5282" stroke-width="1.2" cx="235" cy="240" rx="18" ry="12"/>
            <text x="235" y="244" class="region-label">Hipot.</text>
          </g>

          <g class="region" data-region="accumbens"
             transform="translate(-20, -30) rotate(0, 200, 265)">
            <ellipse class="region-shape" fill="rgba(74,144,194,0.32)" stroke="#2C5282" stroke-width="1.2" cx="200" cy="265" rx="18" ry="14"/>
            <text x="200" y="269" class="region-label">NAc</text>
          </g>

          <g class="region" data-region="raphe"
             transform="translate(-110, -30) rotate(0, 425, 378)">
            <ellipse class="region-shape" fill="rgba(74,144,194,0.32)" stroke="#2C5282" stroke-width="1.2" cx="425" cy="378" rx="14" ry="20"/>
            <text x="425" y="382" class="region-label">Rafe</text>
          </g>

          <g id="brain-connectors"></g>
        </svg>
      </div>

      <aside class="brain-info" id="brain-info">
        <div class="bi-tag">Selecciona una región</div>
        <h3 id="bi-title">Corteza Prefrontal · Amígdala · Hipocampo…</h3>
        <p id="bi-body">La depresión afecta a las regiones cerebrales que regulan las emociones, la memoria, el placer y la respuesta al estrés.</p>
        <div class="bi-nt">
          <span class="nt-chip" data-nt="5HT">Serotonina</span>
          <span class="nt-chip" data-nt="NA">Noradrenalina</span>
          <span class="nt-chip" data-nt="DA">Dopamina</span>
        </div>
        <ul id="bi-changes" class="bi-changes">
          <li>Menor actividad en la corteza prefrontal y el hipocampo</li>
          <li>Mayor reactividad de la amígdala</li>
          <li>Sobreactivación del eje del estrés (más cortisol)</li>
        </ul>
      </aside>
    </div>

    <div class="snc-sep"></div>
    <div class="snc-sub-label">Nivel sináptico</div>
    <div class="synapse-wrap">
      <h4 class="synapse-title">${syn.title}</h4>
      <p class="synapse-subtitle">${syn.subtitle1}</p>
      <p class="synapse-subtitle">${syn.subtitle2}</p>
      <svg id="synapse" viewBox="0 0 900 260" aria-label="Sinapsis">
        <path d="M220,60 C140,60 80,110 40,130 L40,170 C80,190 140,240 220,240 Z" fill="#E6EEF7" stroke="#2C5282"/>
        <text x="130" y="40" class="syn-label">Presináptico</text>
        <path d="M680,60 C760,60 820,110 860,130 L860,170 C820,190 760,240 680,240 Z" fill="#E6EEF7" stroke="#2C5282"/>
        <text x="770" y="40" class="syn-label">Postsináptico</text>
        <g stroke="#2C5282">
          <rect class="syn-receptor" x="680" y="110" width="14" height="22" rx="3" fill="#4A90C2"/>
          <rect class="syn-receptor" x="680" y="140" width="14" height="22" rx="3" fill="#4A90C2"/>
          <rect class="syn-receptor" x="680" y="170" width="14" height="22" rx="3" fill="#4A90C2"/>
        </g>
        <g transform="translate(206,140)">
          <rect id="syn-transporter" x="0" y="-12" width="14" height="24" rx="3" fill="#E9B949" stroke="#2C5282"/>
        </g>
        <g id="syn-blocker" display="none">
          <circle cx="221" cy="140" r="7" fill="#B5483C" stroke="#F7F9FC" stroke-width="1.5"/>
          <line x1="217" y1="136" x2="225" y2="144" stroke="#F7F9FC" stroke-width="2" stroke-linecap="round"/>
          <line x1="225" y1="136" x2="217" y2="144" stroke="#F7F9FC" stroke-width="2" stroke-linecap="round"/>
        </g>
        <g class="vesicles" fill="#2C5282" opacity="0.85">
          <circle cx="160" cy="120" r="14"/>
          <circle cx="120" cy="170" r="12"/>
          <circle cx="180" cy="180" r="10"/>
        </g>
        <g id="nt-dots" fill="#E9B949" stroke="#2C5282" stroke-width="1"></g>
        <text x="450" y="30" text-anchor="middle" class="syn-label">Hendidura sináptica</text>
        <line x1="240" y1="50" x2="670" y2="50" stroke="#2C5282" stroke-dasharray="3 4" opacity="0.5"/>
      </svg>
      <p class="syn-mode-label">${syn.modeLabel}</p>
      <div class="synapse-controls">
        <button class="btn-ghost" data-syn="normal">Normal</button>
        <button class="btn-ghost active" data-syn="depression">Depresión</button>
        <button class="btn-ghost" data-syn="ssri">+ ISRS</button>
      </div>
      <p class="synapse-caption" id="synapse-caption">${window.SYNAPSE_CAPTIONS.depression}</p>
    </div>
  `;
  app.appendChild(s);
}

function renderTreatment(app) {
  const t = window.TREATMENT_SECTION;
  const s = document.createElement("section");
  s.id = "tratamiento";
  s.className = "section alt";
  s.dataset.screenLabel = "05 Tratamiento";
  s.innerHTML = `
    <header class="section-head">
      <h2>${t.title}</h2>
      <p class="sub">${t.sub}</p>
    </header>
    <div class="tx-pillars">
      ${t.pillars.map(p => `
        <article class="tx-pillar tx-${p.id}">
          <div class="tx-head">
            <div><span class="tx-num">${p.num}</span><h4>${p.title}</h4></div>
          </div>
          <ul>
            ${p.items.map(item => `<li><b>${item.term}</b><span class="tx-detail">${item.detail}</span></li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;
  app.appendChild(s);
}

function renderDrugs(app) {
  const d = window.DRUGS_SECTION;
  const s = document.createElement("section");
  s.id = "farmacos";
  s.className = "section";
  s.dataset.screenLabel = "06 Fármacos";
  s.innerHTML = `
    <header class="section-head">
      <h2>${d.title}</h2>
      <p class="sub">${d.sub}</p>
    </header>
    <div class="drug-classes" id="drug-classes" role="tablist"></div>
    <div class="drug-detail" id="drug-detail"></div>
  `;
  app.appendChild(s);
}

function renderReferences(app) {
  const r = window.REFERENCES;
  const s = document.createElement("section");
  s.id = "referencias";
  s.className = "section alt refs";
  s.dataset.screenLabel = "07 Referencias";
  s.innerHTML = `
    <header class="section-head">
      <h2>${r.title}</h2>
    </header>
    <ol class="ref-list">
      ${r.items.map(item => `<li>${item}</li>`).join("")}
    </ol>
  `;
  app.appendChild(s);
}

// ===================================================================
// BOOT — render all sections, then wire up interactivity
// ===================================================================

const app = document.getElementById("app");
renderHero(app);
renderDSM5(app);
renderEtiology(app);
renderSNC(app);
renderTreatment(app);
renderDrugs(app);
renderReferences(app);

lucide.createIcons();

// ===================================================================
// Reveal on scroll
// ===================================================================
const revealables = document.querySelectorAll(".section-head, .etio-card, .tx-pillar, .brain-holder, .synapse-wrap, .drug-detail, .checklist-wrap, .dsm-item");
revealables.forEach(el => el.classList.add("reveal"));
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}, { threshold: 0.12 });
revealables.forEach(el => io.observe(el));


// ===================================================================
// 1) DSM-5 CHECKLIST
// ===================================================================
const checklistEl = document.getElementById("dsm-checklist");
const countNum    = document.getElementById("count-num");
const counterText = document.getElementById("counter-text");
const counterFlag = document.getElementById("counter-flag");

const groupWrap  = document.createElement("div");
groupWrap.className = "dsm-group";
const groupLabel = document.createElement("div");
groupLabel.className = "dsm-group-label";
groupLabel.textContent = "Al menos 1 obligatorio";
groupWrap.appendChild(groupLabel);
checklistEl.appendChild(groupWrap);

window.DSM5.forEach((item) => {
  const el = document.createElement("div");
  el.className = "dsm-item";
  el.innerHTML = `
    <div class="dsm-box"></div>
    <div>
      <div class="dsm-title">${item.t}</div>
      <div class="dsm-sub">${item.s}</div>
    </div>
  `;
  el.addEventListener("click", () => {
    el.classList.toggle("checked");
    updateCounter();
  });
  if (item.req) {
    groupWrap.appendChild(el);
  } else {
    checklistEl.appendChild(el);
  }
});

const allCards = [...document.querySelectorAll(".dsm-item")];
const maxH = Math.max(...allCards.map(c => c.offsetHeight));
allCards.forEach(c => { c.style.height = maxH + "px"; });

function updateCounter() {
  const items   = [...document.querySelectorAll(".dsm-item")];
  const checked = items.filter(i => i.classList.contains("checked"));
  const n = checked.length;
  countNum.textContent = n;

  const coreChecked = items.slice(0, 2).some(i => i.classList.contains("checked"));
  let flag = "—", flagClass = "flag-none", text = "Selecciona los síntomas presentes";
  if (n === 0) { /* default */ }
  else if (n < 5) { flag = "Insuficiente"; flagClass = "flag-mild"; text = "Se necesitan 5 o más síntomas durante al menos 2 semanas."; }
  else if (n >= 5 && !coreChecked) { flag = "Falta criterio A"; flagClass = "flag-mild"; text = "Debe estar presente el ánimo deprimido o la anhedonia."; }
  else { flag = "Compatible con TDM"; flagClass = "flag-mdd"; text = "5 o más síntomas con al menos 1 síntoma nuclear · evaluar deterioro funcional."; }
  counterFlag.textContent = flag;
  counterFlag.className   = "counter-flag " + flagClass;
  counterText.textContent = text;
}

// ===================================================================
// 2) BRAIN INTERACTIVE
// ===================================================================
const brainRegions = document.querySelectorAll("#brain-svg .region");
const biTag        = document.querySelector(".bi-tag");
const biTitle      = document.getElementById("bi-title");
const biBody       = document.getElementById("bi-body");
const biChanges    = document.getElementById("bi-changes");
const biChips      = document.querySelectorAll(".bi-nt .nt-chip");

function selectRegion(key) {
  const r = window.BRAIN[key]; if (!r) return;
  brainRegions.forEach(rg => rg.classList.toggle("active", rg.dataset.region === key));
  biTag.textContent    = "Región activa";
  biTitle.textContent  = r.name;
  biBody.textContent   = r.body;
  biChanges.innerHTML  = r.changes.map(c => `<li>${c}</li>`).join("");
  biChips.forEach(c => c.classList.toggle("active", r.nts.includes(c.dataset.nt)));
}

brainRegions.forEach(rg => {
  rg.addEventListener("click",      () => selectRegion(rg.dataset.region));
  rg.addEventListener("mouseenter", () => selectRegion(rg.dataset.region));
});

selectRegion("pfc");

// ===================================================================
// 3) SYNAPSE ANIMATION
// ===================================================================
const ntDots        = document.getElementById("nt-dots");
const synCaption    = document.getElementById("synapse-caption");
const synBtns       = document.querySelectorAll("[data-syn]");
const transporterEl = document.getElementById("syn-transporter");
const blockerEl     = document.getElementById("syn-blocker");

let synMode = "depression";
let synAnim = null;

const CLEFT_L      = 222;
const CLEFT_R      = 676;
const CLEFT_T      = 100;
const CLEFT_B      = 185;
const TRANSPORT_PT = { x: 220, y: 140 };

const MODE_CFG = {
  normal:     { n: 7,  frac: 0.45 },
  depression: { n: 3,  frac: 0.82 },
  ssri:       { n: 12, frac: 0    },
};

function resetDot(d, frac) {
  d.x       = CLEFT_L + 2 + Math.random() * 6;
  d.y       = CLEFT_T + Math.random() * (CLEFT_B - CLEFT_T);
  d.vx      = 0.55 + Math.random() * 0.55;
  d.vy      = (Math.random() - 0.5) * 0.4;
  d.steered = false;
  d.fate    = Math.random() < frac ? "reuptake" : "bind";
  d.turnAt  = d.fate === "reuptake" ? CLEFT_L + 35 + Math.random() * 85 : Infinity;
  d.receptor = Math.floor(Math.random() * 3);
  d.el.setAttribute("opacity", "1");
  d.el.setAttribute("cx", d.x);
  d.el.setAttribute("cy", d.y);
}

function makeDotEl() {
  const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  c.setAttribute("r", 4);
  c.setAttribute("fill", "#E9B949");
  c.setAttribute("stroke", "#2C5282");
  c.setAttribute("stroke-width", "1");
  ntDots.appendChild(c);
  return c;
}

function runSynapse() {
  cancelAnimationFrame(synAnim);
  ntDots.innerHTML = "";

  if (transporterEl) {
    transporterEl.setAttribute("fill", synMode === "ssri" ? "#9DB8CC" : "#E9B949");
  }
  if (blockerEl) blockerEl.setAttribute("display", synMode === "ssri" ? "" : "none");

  const cfg  = MODE_CFG[synMode];
  const dots = [];

  for (let i = 0; i < cfg.n; i++) {
    const d = { el: makeDotEl(), x: 0, y: 0, vx: 0, vy: 0,
                fate: "", steered: false, turnAt: 0, receptor: 0, respawn: 0 };
    resetDot(d, cfg.frac);
    d.x = CLEFT_L + (i / cfg.n) * (CLEFT_R - CLEFT_L) * 0.65;
    d.el.setAttribute("cx", d.x);
    dots.push(d);
  }

  const tick = () => {
    dots.forEach(d => {
      if (d.respawn > 0) {
        if (--d.respawn === 0) resetDot(d, cfg.frac);
        return;
      }

      if (d.fate === "reuptake") {
        if (!d.steered && d.x >= d.turnAt) {
          d.steered = true;
          d.vx = 0; d.vy = 0;
        }

        if (d.steered) {
          const dx = TRANSPORT_PT.x - d.x;
          const dy = TRANSPORT_PT.y - d.y;
          d.vx = d.vx * 0.94 + dx * 0.018;
          d.vy = d.vy * 0.94 + dy * 0.018;
          const spd = Math.hypot(d.vx, d.vy);
          if (spd > 1.2) { d.vx = d.vx / spd * 1.2; d.vy = d.vy / spd * 1.2; }

          if (Math.hypot(dx, dy) < 10) {
            d.el.setAttribute("opacity", "0");
            d.respawn = 55 + Math.floor(Math.random() * 55);
            return;
          }
        } else {
          if (d.y < CLEFT_T + 8) d.vy += 0.025;
          if (d.y > CLEFT_B - 8) d.vy -= 0.025;
        }
      } else {
        if (d.y < CLEFT_T + 8) d.vy += 0.025;
        if (d.y > CLEFT_B - 8) d.vy -= 0.025;

        if (d.x >= CLEFT_R - 4) {
          d.el.setAttribute("opacity", "0");
          d.respawn = 45 + Math.floor(Math.random() * 40);
          return;
        }
      }

      d.x += d.vx;
      d.y += d.vy;
      d.el.setAttribute("cx", d.x);
      d.el.setAttribute("cy", d.y);
    });

    synAnim = requestAnimationFrame(tick);
  };
  tick();
}

synBtns.forEach(b => b.addEventListener("click", () => {
  synBtns.forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  synMode = b.dataset.syn;
  synCaption.textContent = window.SYNAPSE_CAPTIONS[synMode];
  runSynapse();
}));
runSynapse();

// ===================================================================
// 4) DRUG CLASSES
// ===================================================================
const classBtnsEl = document.getElementById("drug-classes");
const detailEl    = document.getElementById("drug-detail");

window.DRUG_CLASSES.forEach((cls, i) => {
  const b = document.createElement("button");
  b.className = "drug-class-btn" + (i === 0 ? " active" : "");
  b.setAttribute("role", "tab");
  b.innerHTML = `<span class="dc-dot"></span> ${cls.name}`;
  b.title = cls.long;
  b.addEventListener("click", () => {
    [...classBtnsEl.children].forEach(c => c.classList.remove("active"));
    b.classList.add("active");
    renderDrugDetail(cls.id);
  });
  classBtnsEl.appendChild(b);
});

function renderDrugDetail(id) {
  const cls = window.DRUG_CLASSES.find(c => c.id === id);
  detailEl.innerHTML = `
    <div class="dd-header">
      <div class="dd-title">
        <div class="dd-sub">${cls.long}</div>
        <h3>${cls.name}</h3>
        <p class="dd-moa">${cls.moa}</p>
      </div>
    </div>
    <div class="dd-grid">
      ${cls.drugs.map(d => `
        <article class="dd-drug">
          <h4>${d.n}</h4>
          <div class="dose"><span class="dose-val">${d.dose}</span><span class="dose-u">${d.u}</span></div>
        </article>`).join("")}
    </div>
    <p class="dd-note">Dosis expresadas como rango habitual adulto, ajustar según paciente y guía local.</p>
    <div class="dd-footer">
      <div class="dd-panel warn">
        <h5>Efectos adversos principales</h5>
        <ul>${cls.effects.map(e => `<li>${e}</li>`).join("")}</ul>
      </div>
      <div class="dd-panel">
        <h5>Precauciones clínicas</h5>
        <ul>${cls.cautions.map(c => `<li>${c}</li>`).join("")}</ul>
      </div>
    </div>
  `;
  detailEl.querySelectorAll(".dd-drug").forEach((c, i) => {
    c.style.opacity = "0"; c.style.transform = "translateY(10px)";
    setTimeout(() => { c.style.transition = "opacity .4s, transform .4s"; c.style.opacity = "1"; c.style.transform = "translateY(0)"; }, 40 + i * 55);
  });
}
renderDrugDetail("ssri");

// ===================================================================
// Smooth anchor scroll
// ===================================================================
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) { e.preventDefault(); window.scrollTo({ top: el.offsetTop - 20, behavior: "smooth" }); }
  });
});
