/* =========================================================
   Data layer · DSM-5, regiones cerebrales y farmacología
   ========================================================= */

window.DSM5 = [
  { t: "Ánimo deprimido", s: "Tristeza, vacío, desesperanza · la mayor parte del día, casi cada día", req: true },
  { t: "Anhedonia", s: "Pérdida marcada de interés o placer en casi todas las actividades", req: true },
  { t: "Cambios en peso / apetito", s: "↓ o ↑ significativo sin dieta (>5% en un mes)" },
  { t: "Alteraciones del sueño", s: "Insomnio o hipersomnia casi diaria" },
  { t: "Agitación / retardo psicomotor", s: "Observable por otros, no solo autoinformado" },
  { t: "Fatiga", s: "Pérdida de energía casi diaria" },
  { t: "Culpa / inutilidad", s: "Sentimientos excesivos o inapropiados, posiblemente delirantes" },
  { t: "Disfunción cognitiva", s: "↓ concentración, indecisión casi diaria" },
  { t: "Ideación suicida", s: "Pensamientos recurrentes de muerte, plan o intento" }
];

window.BRAIN = {
  pfc: {
    name: "Corteza Prefrontal",
    body: "Centro ejecutivo del cerebro: regula la planificación, la toma de decisiones, la memoria de trabajo y la regulación emocional descendente (top-down). En TDM se observa hipoactividad de la región dorsolateral (DLPFC), responsable del control cognitivo, e hiperactividad de la región ventromedial (vmPFC), implicada en el procesamiento autorreferencial y la valoración afectiva subjetiva como nodo de la red por defecto (DMN).",
    nts: ["5HT", "NA", "DA"],
    changes: [
      "↓ Actividad DLPFC → déficit en concentración, toma de decisiones y memoria de trabajo",
      "↓ Volumen DLPFC con episodios repetidos (parcialmente reversible con tratamiento)",
      "↑ Hiperactividad vmPFC y red por defecto (DMN) → procesamiento autorreferencial negativo y sesgo cognitivo",
      "Fallo de la regulación emocional top-down sobre amígdala e hipotálamo",
      "Los antidepresivos eficaces restauran la actividad DLPFC a las 4–6 semanas"
    ]
  },
  acc: {
    name: "Corteza Cingulada Anterior",
    body: "Nodo de interfaz entre emoción y cognición: detecta conflicto, asigna saliencia emocional y modula la atención. La división subgenual (sgACC, área de Brodmann 25) está crónicamente hiperactiva en TDM y correlaciona con la gravedad del ánimo deprimido; es diana de la estimulación cerebral profunda (DBS) en depresión resistente.",
    nts: ["5HT", "glutamato"],
    changes: [
      "↑ Actividad sgACC (área 25) → mantiene el estado de ánimo negativo de forma autosostenida",
      "↓ Volumen ACC dorsal → menor capacidad de detección de errores y resolución de conflicto",
      "La hiperactividad sgACC predice respuesta a DBS y a ketamina",
      "Diana de EMTr de baja frecuencia (inhibitoria) en protocolos clínicos experimentales",
      "La normalización sgACC con antidepresivos eficaces es un biomarcador de respuesta terapéutica"
    ]
  },
  amygdala: {
    name: "Amígdala",
    body: "Detector de amenaza y modulador del valor emocional de los estímulos. En TDM muestra hiperreactividad a estímulos negativos (caras tristes, palabras amenazantes) con umbral reducido y respuesta sostenida, contribuyendo al sesgo de atención negativa y a la comorbilidad ansiosa.",
    nts: ["5HT", "NA"],
    changes: [
      "↑ Reactividad a caras tristes y estímulos amenazantes (evidencia de neuroimagen funcional)",
      "↓ Umbral de activación → respuesta de alarma exagerada ante estímulos neutros",
      "↑ Actividad basal amigdalina → estado de alerta crónico y dificultad para relajarse",
      "↑ Conectividad funcional con vmPFC → amplifica la rumia y el procesamiento negativo",
      "Los ISRS comienzan a normalizar la hiperreactividad amigdalina a las 3-4 semanas, frecuentemente antes de la mejoría clínica del ánimo"
    ]
  },
  hippocampus: {
    name: "Hipocampo",
    body: "Esencial para la memoria episódica, el aprendizaje contextual y el frenado del eje hipotálamo-hipófiso-adrenal (HHA) a través de receptores glucocorticoides. El exceso crónico de cortisol inhibe la neurogénesis y produce atrofia estructural, que se correlaciona con el número de episodios depresivos previos.",
    nts: ["5HT", "glutamato"],
    changes: [
      "↓ Volumen hipocampal (5–10%), proporcional al número de episodios no tratados",
      "↓ Neurogénesis adulta en el giro dentado, directamente inhibida por glucocorticoides",
      "↓ BDNF → menor supervivencia, plasticidad sináptica y diferenciación neuronal; modificaciones epigenéticas en el promotor del gen BDNF",
      "↓ Expresión de receptores glucocorticoides (NR3C1) por histone deacetilación y metilación de ADN, perpetuando la desregulación del eje HHA",
      "Quejas cognitivas: fallos de memoria, dificultad de aprendizaje y orientación espacial",
      "El tratamiento antidepresivo eficaz restaura parcialmente los niveles de BDNF, la neurogénesis y revierte cambios epigenéticos"
    ]
  },
  hypothalamus: {
    name: "Hipotálamo · Eje HHA",
    body: "Coordina la respuesta al estrés a través del eje hipotálamo-hipófiso-adrenal: CRH hipotalámico → ACTH hipofisaria → cortisol suprarrenal. En TDM el feedback negativo glucocorticoide está desensibilizado, perpetuando hipercortisolemia crónica con consecuencias sobre el sueño, el apetito, la inmunidad y el volumen cerebral.",
    nts: ["CRH", "cortisol"],
    changes: [
      "↑ CRH hipotalámico → activación mantenida del eje HHA independientemente del estrés real",
      "Hipercortisolemia crónica → neurotoxicidad hipocampal, inmunosupresión e inflamación",
      "Test de supresión con dexametasona positivo (no supresión) en ~40% de los pacientes con TDM",
      "Alteración de la arquitectura del sueño: ↓ sueño de ondas lentas, ↑ REM precoz, insomnio de madrugada",
      "Desregulación del apetito y el peso corporal por acción sobre núcleos hipotalámicos laterales y arqueado"
    ]
  },
  raphe: {
    name: "Núcleos del Rafe",
    body: "Fuente principal de serotonina (5-HT) cerebral, con proyecciones difusas a córtex prefrontal, amígdala, hipocampo y ganglios basales. El rafe dorsal regula el estado de ánimo y la ansiedad; el rafe mediano proyecta principalmente al hipocampo y septum, modulando el ritmo theta y procesos cognitivos asociados. Los ISRS actúan aquí bloqueando el transportador SERT, pero la desensibilización lenta de autorreceptores 5-HT1A explica la latencia antidepresiva de 2–4 semanas.",
    nts: ["5HT"],
    changes: [
      "↓ Síntesis y disponibilidad sináptica de 5-HT en circuitos límbicos y corticales",
      "Autorreceptores 5-HT1A somatodendríticos hiperactivos → inhiben el disparo serotoninérgico de los propios núcleos del rafe",
      "Los ISRS bloquean SERT → acumulación de 5-HT en el axón terminal, pero con efecto inicial amortiguado por los autorreceptores",
      "Desensibilización progresiva de autorreceptores 5-HT1A (2–4 semanas) → ↑ 5-HT eficaz en sinapsis diana",
      "La latencia antidepresiva refleja exactamente el tiempo necesario para esa desensibilización"
    ]
  },
  accumbens: {
    name: "Núcleo Accumbens",
    body: "Nodo central del circuito de recompensa mesolímbico (VTA → accumbens). Integra señales dopaminérgicas de predicción de recompensa con información emocional de amígdala e hipocampo. Su hipofunción dopaminérgica es la base neurobiológica de la anhedonia, uno de los dos síntomas nucleares de la TDM.",
    nts: ["DA"],
    changes: [
      "↓ Liberación de DA ante estímulos de recompensa → incapacidad para sentir placer (anhedonia hedónica)",
      "↓ Motivación anticipatoria: el esfuerzo para obtener recompensas parece desproporcionado o sin sentido",
      "↓ Conectividad funcional con VTA y corteza orbitofrontal (OFC)",
      "Bupropión y agomelatina actúan parcialmente sobre este circuito (↑ DA y modulación mesolímbica)",
      "La resolución de la anhedonia suele ser más tardía que la mejoría del ánimo bajo tratamiento antidepresivo"
    ]
  }
};

window.DRUG_CLASSES = [
  {
    id: "ssri",
    name: "ISRS",
    long: "Inhibidores Selectivos de la Recaptación de Serotonina",
    moa: "Bloquean el transportador SERT → ↑ 5-HT en hendidura sináptica. Primera línea por perfil de seguridad y tolerancia.",
    drugs: [
      { n: "Fluoxetina",  sub: "t½ larga · activante", dose: "20–60", u: "mg/día oral", notes: "Larga vida media → menos síndrome de retirada. Útil en adolescentes." },
      { n: "Sertralina",  sub: "perfil amplio",       dose: "50–200", u: "mg/día oral", notes: "Buena evidencia post-IAM y en ancianos.", tag: "1ª línea" },
      { n: "Escitalopram",sub: "S-enantiómero",       dose: "10–20", u: "mg/día oral",  notes: "Alta selectividad 5-HT; bajo potencial de interacciones.", tag: "1ª línea" },
      { n: "Paroxetina",  sub: "sedante · anticolinérg.", dose: "20–50", u: "mg/día oral", notes: "Mayor retirada; evitar en embarazo." },
      { n: "Fluvoxamina", sub: "más usado en TOC",    dose: "100–300", u: "mg/día oral", notes: "Inhibe CYP1A2 (interacciones con teofilina, clozapina)." }
    ],
    effects: [
      "Náusea, diarrea (primeros días)",
      "Disfunción sexual (hasta 40%)",
      "Cefalea, insomnio o somnolencia",
      "Hiponatremia (SIADH, ancianos)",
      "↑ Riesgo hemorrágico (con AINE/AAS)",
      "Síndrome de retirada si suspensión brusca"
    ],
    cautions: [
      "↑ Riesgo de ideación suicida en <25 años (aviso de clase: aplica a todos los antidepresivos): monitorear",
      "Síndrome serotoninérgico (con IMAO, tramadol, triptanes)",
      "Síndrome de discontinuación al suspender bruscamente · retirar gradualmente",
      "Fluoxetina y paroxetina inhiben CYP2D6 (interacciones con tamoxifeno, codeína, β-bloqueantes, antipsicóticos); fluvoxamina inhibe CYP1A2 (teofilina, clozapina)",
      "Embarazo: preferir sertralina; evitar paroxetina",
      "Efecto clínico a las 2–4 semanas"
    ]
  },
  {
    id: "snri",
    name: "IRSN",
    long: "Inhibidores de la Recaptación de Serotonina-Noradrenalina",
    moa: "Bloquean SERT y NET → ↑ 5-HT y NA. Útiles con dolor crónico, fatiga y síntomas cognitivos.",
    drugs: [
      { n: "Venlafaxina", sub: "dosis-dependiente", dose: "75–225", u: "mg/día oral", notes: "<150 mg actúa como ISRS; >150 recluta NA. Vigilar TA." },
      { n: "Desvenlafaxina", sub: "metabolito activo", dose: "50–100", u: "mg/día oral", notes: "Farmacocinética más predecible." },
      { n: "Duloxetina",     sub: "dolor neuropático", dose: "60–120", u: "mg/día oral", notes: "Aprobado en dolor crónico, fibromialgia, neuropatía diabética.", tag: "dolor+" },
      { n: "Levomilnaciprán",sub: "mayor afinidad NA", dose: "40–120", u: "mg/día oral", notes: "Perfil noradrenérgico predominante." }
    ],
    effects: [
      "Náusea, boca seca, estreñimiento",
      "HTA dosis-dependiente (venlafaxina)",
      "Sudoración, taquicardia",
      "Insomnio, agitación",
      "Disfunción sexual",
      "Retirada marcada (venlafaxina)"
    ],
    cautions: [
      "↑ Riesgo de ideación suicida en <25 años (aviso de clase)",
      "Síndrome de discontinuación marcado, especialmente con venlafaxina · retirar gradualmente",
      "Monitorizar presión arterial",
      "Evitar en HTA no controlada",
      "Precaución hepática (duloxetina)",
      "No combinar con IMAO · lavado 14 días"
    ]
  },
  {
    id: "tca",
    name: "Tricíclicos",
    long: "Antidepresivos Tricíclicos (ATC)",
    moa: "Inhiben recaptación 5-HT y NA + bloqueo M1, H1, α1. Eficacia comparable a ISRS pero peor tolerados y letales en sobredosis.",
    drugs: [
      { n: "Amitriptilina", sub: "sedante, dolor",     dose: "75–150", u: "mg/día oral", notes: "Dolor crónico, migraña profiláctica, insomnio." },
      { n: "Imipramina",    sub: "referente histórico", dose: "75–200", u: "mg/día oral", notes: "Primer antidepresivo descrito (1958)." },
      { n: "Nortriptilina", sub: "menos anticolinérg.", dose: "50–150", u: "mg/día oral", notes: "Mejor tolerado en ancianos; útil monitorizar niveles." },
      { n: "Clomipramina",  sub: "más serotoninérgico", dose: "75–250", u: "mg/día oral", notes: "Elección en TOC." }
    ],
    effects: [
      "Anticolinérgicos: boca seca, visión borrosa, estreñimiento, retención urinaria",
      "Sedación (H1)",
      "Hipotensión ortostática (α1)",
      "Ganancia de peso",
      "Cardiotoxicidad: prolongación QT, arritmias",
      "Bajar umbral convulsivo"
    ],
    cautions: [
      "↑ Riesgo de ideación suicida en <25 años (aviso de clase)",
      "Síndrome de discontinuación con rebote colinérgico · retirar gradualmente",
      "Letales en sobredosis (índice terapéutico estrecho)",
      "ECG previo en >40 años o cardiópatas",
      "Evitar en glaucoma ángulo cerrado, HPB, arritmias",
      "Iniciar dosis bajas y titular"
    ]
  },
  {
    id: "maoi",
    name: "IMAO",
    long: "Inhibidores de la Monoaminoxidasa",
    moa: "Inhiben MAO-A/B → ↑ 5-HT, NA, DA intracelular. Reservados para depresión atípica o resistente.",
    drugs: [
      { n: "Fenelzina",    sub: "IMAO no selectivo irrev.", dose: "45–90", u: "mg/día oral", notes: "Depresión atípica; requiere dieta baja en tiramina." },
      { n: "Tranilcipromina", sub: "estructura anfet.",     dose: "30–60", u: "mg/día oral", notes: "Estimulante; insomnio frecuente." },
      { n: "Moclobemida",  sub: "RIMA selectivo A",        dose: "300–600", u: "mg/día oral", notes: "Reversible → menor riesgo hipertensivo." },
      { n: "Selegilina",   sub: "parche transdérmico",      dose: "6–12", u: "mg/24h transdérmico", notes: "A 6 mg/24 h no requiere dieta baja en tiramina; a 9–12 mg/24 h sí se recomienda restricción dietética." }
    ],
    effects: [
      "Crisis hipertensiva por tiramina (queso, vino, embutidos)",
      "Hipotensión ortostática",
      "Insomnio, agitación",
      "Ganancia de peso",
      "Disfunción sexual",
      "Edema"
    ],
    cautions: [
      "↑ Riesgo de ideación suicida en <25 años (aviso de clase)",
      "Dieta estricta baja en tiramina (IMAO irreversibles)",
      "Lavado 14 días al cambiar a/desde ISRS-IRSN (5 semanas si fluoxetina)",
      "Riesgo de síndrome serotoninérgico",
      "Evitar con simpaticomiméticos, meperidina, dextrometorfano"
    ]
  },
  {
    id: "atypical",
    name: "Atípicos",
    long: "Antidepresivos atípicos · mecanismos diversos",
    moa: "Mecanismos únicos fuera de las clases tradicionales. Útiles ante efectos adversos de ISRS o síntomas específicos.",
    drugs: [
      { n: "Bupropión",    sub: "IRDN · ↑ DA y NA",       dose: "150–450", u: "mg/día oral", notes: "No afecta función sexual ni peso. Cesación tabáquica.", tag: "sin DS" },
      { n: "Mirtazapina",  sub: "NaSSA · α2, 5HT2/3, H1", dose: "15–45", u: "mg/noche oral",  notes: "Mejora sueño y apetito. Útil en ancianos, caquexia." },
      { n: "Trazodona",    sub: "SARI · 5HT2A, α1, H1",   dose: "150–400", u: "mg/día oral",  notes: "Dosis bajas (25–100 mg) como hipnótico. Antagonismo α1 explica hipotensión ortostática y priapismo." },
      { n: "Vortioxetina", sub: "multimodal 5-HT",        dose: "10–20", u: "mg/día oral",    notes: "Mejoría cognitiva; náusea al inicio." },
      { n: "Vilazodona",   sub: "ISRS + agonista 5HT1A",  dose: "20–40", u: "mg/día oral",    notes: "Tomar con alimentos." },
      { n: "Agomelatina",  sub: "agonista MT1/MT2, 5HT2C", dose: "25–50", u: "mg/noche oral", notes: "Restablece ritmos circadianos. Monitor hepático." }
    ],
    effects: [
      "Bupropión: insomnio, temblor, ↓ umbral convulsivo",
      "Mirtazapina: sedación, ↑ peso, ↑ colesterol",
      "Trazodona: priapismo (raro), somnolencia",
      "Vortioxetina: náusea",
      "Agomelatina: hepatotoxicidad (monitorear ALT)"
    ],
    cautions: [
      "↑ Riesgo de ideación suicida en <25 años (aviso de clase)",
      "Bupropión: contraindicado en epilepsia, bulimia/anorexia",
      "Mirtazapina: agranulocitosis (muy rara)",
      "Agomelatina: control de transaminasas 3, 6, 12 y 24 sem",
      "Vortioxetina: ajustar con inhibidores CYP2D6"
    ]
  },
  {
    id: "adjunct",
    name: "Adyuvantes",
    long: "Potenciadores · ketamina · litio · antipsicóticos",
    moa: "Añadidos a un antidepresivo en depresión resistente o para fenómenos específicos.",
    drugs: [
      { n: "Litio",        sub: "potenciador clásico",   dose: "600–1200", u: "mg/día oral", notes: "Nivel sérico 0.4–0.8 mEq/L (potenciación antidepresiva). ↓ Riesgo suicida.", tag: "anti-suicida" },
      { n: "Quetiapina",sub: "antipsicótico atípico", dose: "150–300", u: "mg/día oral",  notes: "Aprobado como adjunto; sedación, metabólico." },
      { n: "Aripiprazol",  sub: "agonista parcial D2",   dose: "2–15", u: "mg/día oral",     notes: "Menor ganancia de peso; acatisia." },
      { n: "Esketamina",   sub: "antagonista NMDA",      dose: "56–84", u: "mg intranasal 1–2×/sem", notes: "Depresión resistente; supervisar 2 h post-dosis.", tag: "efecto rápido" },
      { n: "Ketamina",     sub: "uso off-label",         dose: "0.5", u: "mg/kg intravenoso", notes: "Alivio en horas; duración 3–7 días." },
      { n: "T3 (liotironina)",sub: "hormona tiroidea",   dose: "25–50", u: "µg/día oral",    notes: "Potenciación histórica (STAR*D)." }
    ],
    effects: [
      "Litio: temblor, poliuria, hipotiroidismo, nefrotoxicidad; índice terapéutico estrecho",
      "Quetiapina: sedación, síndrome metabólico",
      "Aripiprazol: acatisia, insomnio",
      "Esketamina/Ketamina: disociación, ↑ TA, sedación transitoria",
      "T3: palpitaciones, insomnio"
    ],
    cautions: [
      "Litio: monitor litemia, función renal y tiroidea cada 6 m",
      "Esketamina: REMS · administrar en clínica",
      "Antipsicóticos: vigilar peso, glucosa, lípidos",
      "Evaluar riesgo/beneficio en uso prolongado"
    ]
  }
];
