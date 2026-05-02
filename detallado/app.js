/* =========================================================
   Infografía TDM · interacciones
   ========================================================= */

// ---------- Side nav active on scroll ----------
const navLinks = document.querySelectorAll(".sidenav a");
const sections = [...document.querySelectorAll("section[id]")];
const onScroll = () => {
  const y = window.scrollY + window.innerHeight * 0.35;
  let current = sections[0].id;
  for (const s of sections) if (s.offsetTop <= y) current = s.id;
  navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Reveal on scroll ----------
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
const countNum = document.getElementById("count-num");
const counterText = document.getElementById("counter-text");
const counterFlag = document.getElementById("counter-flag");

const groupWrap = document.createElement("div");
groupWrap.className = "dsm-group";
const groupLabel = document.createElement("div");
groupLabel.className = "dsm-group-label";
groupLabel.textContent = "Al menos 1 obligatorio";
groupWrap.appendChild(groupLabel);
checklistEl.appendChild(groupWrap);

window.DSM5.forEach((item, i) => {
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

// Equalize all card heights to the tallest natural height
const allCards = [...document.querySelectorAll(".dsm-item")];
const maxH = Math.max(...allCards.map(c => c.offsetHeight));
allCards.forEach(c => { c.style.height = maxH + "px"; });

function updateCounter() {
  const items = [...document.querySelectorAll(".dsm-item")];
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
  counterFlag.className = "counter-flag " + flagClass;
  counterText.textContent = text;
}

// ===================================================================
// 2) BRAIN INTERACTIVE
// ===================================================================
const brainRegions = document.querySelectorAll("#brain-svg .region");
const biTag = document.querySelector(".bi-tag");
const biTitle = document.getElementById("bi-title");
const biBody = document.getElementById("bi-body");
const biChanges = document.getElementById("bi-changes");
const biChips = document.querySelectorAll(".bi-nt .nt-chip");

function selectRegion(key) {
  const r = window.BRAIN[key]; if (!r) return;
  brainRegions.forEach(rg => rg.classList.toggle("active", rg.dataset.region === key));
  biTag.textContent = "Región activa";
  biTitle.textContent = r.name;
  biBody.textContent = r.body;
  biChanges.innerHTML = r.changes.map(c => `<li>${c}</li>`).join("");
  biChips.forEach(c => c.classList.toggle("active", r.nts.includes(c.dataset.nt)));
}

brainRegions.forEach(rg => {
  rg.addEventListener("click", () => selectRegion(rg.dataset.region));
  rg.addEventListener("mouseenter", () => selectRegion(rg.dataset.region));
});

// default
selectRegion("pfc");

// ===================================================================
// 3) SYNAPSE ANIMATION
// ===================================================================
const ntDots        = document.getElementById("nt-dots");
const synCaption    = document.getElementById("synapse-caption");
const synBtns       = document.querySelectorAll("[data-syn]");
const transporterEl = document.getElementById("syn-transporter");
const blockerEl     = document.getElementById("syn-blocker");
const receptorEls   = [...document.querySelectorAll(".syn-receptor")];

let synMode = "depression";
let synAnim = null;

// Cleft boundaries (SVG units)
const CLEFT_L  = 222;
const CLEFT_R  = 676;
const CLEFT_T  = 100;
const CLEFT_B  = 185;
// Destination points
const TRANSPORT_PT = { x: 220, y: 140 }; // cleft-facing edge of SERT/NET
const RECEPTOR_Y   = [121, 151, 181];     // centres of the three receptor bars

// Per-mode settings
const MODE_CFG = {
  normal:     { n: 7,  frac: 0.45 },
  depression: { n: 3,  frac: 0.82 },
  ssri:       { n: 12, frac: 0    },
};


function resetDot(d, frac) {
  d.x        = CLEFT_L + 2 + Math.random() * 6;
  d.y        = CLEFT_T + Math.random() * (CLEFT_B - CLEFT_T);
  d.vx       = 0.55 + Math.random() * 0.55;
  d.vy       = (Math.random() - 0.5) * 0.4;
  d.steered  = false;
  d.fate     = Math.random() < frac ? "reuptake" : "bind";
  d.turnAt   = d.fate === "reuptake" ? CLEFT_L + 35 + Math.random() * 85 : Infinity;
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

  // Tint transporter grey when SSRI mode (transporter is blocked)
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
    // Stagger starting positions so the animation looks established from frame 1
    d.x = CLEFT_L + (i / cfg.n) * (CLEFT_R - CLEFT_L) * 0.65;
    d.el.setAttribute("cx", d.x);
    dots.push(d);
  }

  const tick = () => {
    dots.forEach(d => {
      // — Waiting to respawn —
      if (d.respawn > 0) {
        if (--d.respawn === 0) resetDot(d, cfg.frac);
        return;
      }

      if (d.fate === "reuptake") {
        // Trigger steering once the dot has drifted far enough into the cleft;
        // zero velocity so the arc starts smoothly from rest regardless of stagger position
        if (!d.steered && d.x >= d.turnAt) {
          d.steered = true;
          d.vx = 0; d.vy = 0;
        }

        if (d.steered) {
          const dx = TRANSPORT_PT.x - d.x;
          const dy = TRANSPORT_PT.y - d.y;
          d.vx = d.vx * 0.94 + dx * 0.018;
          d.vy = d.vy * 0.94 + dy * 0.018;
          // cap speed so the return arc is leisurely
          const spd = Math.hypot(d.vx, d.vy);
          if (spd > 1.2) { d.vx = d.vx / spd * 1.2; d.vy = d.vy / spd * 1.2; }

          if (Math.hypot(dx, dy) < 10) {
            d.el.setAttribute("opacity", "0");
            d.respawn = 55 + Math.floor(Math.random() * 55);
            return;
          }
        } else {
          // Normal rightward drift before turning
          if (d.y < CLEFT_T + 8) d.vy += 0.025;
          if (d.y > CLEFT_B - 8) d.vy -= 0.025;
        }
      } else {
        // Bind fate: drift right
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
const detailEl = document.getElementById("drug-detail");

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
  // reveal new cards
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
