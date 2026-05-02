/* =========================================================
   Data layer · DSM-5, regiones cerebrales y farmacología
   ========================================================= */

window.SYNAPSE_CAPTIONS = {
  normal:     "Funcionamiento normal: la neurona presináptica libera neurotransmisores que cruzan la hendidura sináptica y activan receptores en la neurona postsináptica. Después, los transportadores recogen el exceso y lo devuelven a la neurona presináptica.",
  depression: "En la depresión hay menos neurotransmisores disponibles en la hendidura sináptica. Esto reduce la activación de los receptores y afecta a los circuitos del estado de ánimo, la motivación y el pensamiento.",
  ssri:       "Los ISRS bloquean el transportador que recoge la serotonina, así esta se queda más tiempo en la hendidura sináptica y puede seguir activando los receptores. El efecto clínico tarda entre 2 y 4 semanas en aparecer."
};

window.DSM5 = [
  { t: "Ánimo deprimido", s: "Tristeza, vacío o desesperanza durante casi todo el día, casi todos los días", req: true },
  { t: "Anhedonia", s: "Pérdida clara de interés o placer en casi todas las actividades", req: true },
  { t: "Cambios en peso o apetito", s: "Pérdida o aumento importante de peso sin proponérselo" },
  { t: "Alteraciones del sueño", s: "Insomnio o necesidad de dormir mucho más de lo habitual" },
  { t: "Agitación o lentitud", s: "Cambios visibles desde fuera: moverse o hablar más rápido o más lento de lo normal" },
  { t: "Fatiga", s: "Cansancio o falta de energía casi todos los días" },
  { t: "Culpa o sentirse inútil", s: "Sentimientos excesivos o inapropiados de culpa o de no valer nada" },
  { t: "Dificultades cognitivas", s: "Problemas para concentrarse, pensar o tomar decisiones" },
  { t: "Pensamientos de muerte", s: "Pensamientos recurrentes sobre la muerte, ideación, plan o intento de suicidio" }
];

window.BRAIN = {
  pfc: {
    name: "Corteza Prefrontal",
    body: "Es el centro de control del cerebro: planifica, toma decisiones y regula las emociones. En la depresión funciona peor de lo normal, lo que dificulta concentrarse, decidir y controlar pensamientos negativos.",
    nts: ["5HT", "NA", "DA"],
    changes: [
      "Menor actividad → problemas para concentrarse, decidir y mantener la atención",
      "Pierde capacidad para regular las emociones desde arriba (sobre la amígdala)",
      "Pueden aparecer cambios de volumen tras varios episodios, parcialmente reversibles con el tratamiento",
      "Los antidepresivos eficaces restauran su actividad en pocas semanas"
    ]
  },
  acc: {
    name: "Corteza Cingulada Anterior",
    body: "Conecta las emociones con el pensamiento: detecta conflictos y dirige la atención. En la depresión está sobreactivada, lo que ayuda a mantener el estado de ánimo bajo de forma persistente.",
    nts: ["5HT", "glutamato"],
    changes: [
      "Sobreactividad que mantiene el estado de ánimo negativo",
      "Menor capacidad para detectar errores y resolver conflictos",
      "Es una de las dianas principales de la estimulación cerebral profunda en depresión resistente",
      "Los antidepresivos eficaces normalizan su actividad"
    ]
  },
  amygdala: {
    name: "Amígdala",
    body: "Es el detector de amenazas del cerebro: procesa el miedo y otras emociones intensas. En la depresión está hiperactiva, lo que explica el sesgo hacia lo negativo y la frecuente coexistencia con ansiedad.",
    nts: ["5HT", "NA"],
    changes: [
      "Reacciona de forma exagerada a estímulos negativos (caras tristes, palabras amenazantes)",
      "Mantiene a la persona en un estado de alerta crónico, con dificultad para relajarse",
      "Amplifica los pensamientos negativos y la rumiación",
      "Los ISRS empiezan a calmar la amígdala antes incluso de que mejore el estado de ánimo"
    ]
  },
  hippocampus: {
    name: "Hipocampo",
    body: "Es esencial para la memoria y el aprendizaje, y también ayuda a regular el eje del estrés. El exceso prolongado de cortisol lo daña, especialmente cuando los episodios depresivos se repiten o no se tratan.",
    nts: ["5HT", "glutamato"],
    changes: [
      "Reducción de su tamaño, proporcional al número de episodios sin tratar",
      "Menor formación de neuronas nuevas (neurogénesis), bloqueada por el cortisol elevado",
      "Quejas frecuentes: olvidos, dificultad para aprender o ubicarse",
      "El tratamiento eficaz ayuda a recuperar parcialmente la neurogénesis"
    ]
  },
  hypothalamus: {
    name: "Hipotálamo · Eje del estrés",
    body: "Coordina la respuesta al estrés a través del eje del estrés (hipotálamo → hipófisis → glándulas suprarrenales → cortisol). En la depresión este sistema queda activado de forma crónica, manteniendo niveles altos de cortisol con consecuencias sobre el sueño, el apetito y el cerebro.",
    nts: ["CRH", "cortisol"],
    changes: [
      "Activación crónica del eje del estrés, incluso sin amenaza real",
      "Niveles elevados de cortisol que dañan el hipocampo y favorecen la inflamación",
      "Alteraciones del sueño: insomnio, despertar precoz, sueño poco reparador",
      "Cambios en el apetito y el peso corporal"
    ]
  },
  raphe: {
    name: "Núcleos del Rafe",
    body: "Son la principal fuente de serotonina del cerebro y envían proyecciones a casi todas las regiones implicadas en el estado de ánimo. Los ISRS actúan aquí bloqueando la recaptación de serotonina.",
    nts: ["5HT"],
    changes: [
      "Menor cantidad y disponibilidad de serotonina en el cerebro",
      "Los ISRS bloquean el transportador de serotonina, aumentando su disponibilidad",
      "El cerebro tarda 2–4 semanas en adaptarse a este aumento, lo que explica por qué los antidepresivos no funcionan de inmediato"
    ]
  },
  accumbens: {
    name: "Núcleo Accumbens",
    body: "Es el centro del circuito de recompensa del cerebro y funciona principalmente con dopamina. Su menor funcionamiento explica la anhedonia, uno de los dos síntomas principales de la depresión.",
    nts: ["DA"],
    changes: [
      "Menor liberación de dopamina ante recompensas → incapacidad para sentir placer (anhedonia)",
      "Falta de motivación: el esfuerzo necesario para conseguir recompensas parece excesivo",
      "Algunos antidepresivos (bupropión, agomelatina) actúan sobre este circuito",
      "La anhedonia suele tardar más en mejorar que el estado de ánimo durante el tratamiento"
    ]
  }
};

window.DRUG_CLASSES = [
  {
    id: "ssri",
    name: "ISRS",
    long: "Inhibidores Selectivos de la Recaptación de Serotonina",
    moa: "Bloquean el transportador SERT → aumentada 5-HT en hendidura sináptica. Primera línea por perfil de seguridad y tolerancia.",
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
      "Aumentado riesgo hemorrágico (con AINE/AAS)",
      "Síndrome de retirada si suspensión brusca"
    ],
    cautions: [
      "Aumentado riesgo de ideación suicida en <25 años (aviso de clase: aplica a todos los antidepresivos): monitorear",
      "Síndrome serotoninérgico (con IMAO, tramadol, triptanes)",
      "Síndrome de discontinuación al suspender bruscamente (retirar gradualmente)",
      "Fluoxetina y paroxetina inhiben CYP2D6 (interacciones con tamoxifeno, codeína, β-bloqueantes, antipsicóticos); fluvoxamina inhibe CYP1A2 (teofilina, clozapina)",
      "Embarazo: preferir sertralina; evitar paroxetina",
      "Efecto clínico a las 2–4 semanas"
    ]
  },
  {
    id: "snri",
    name: "IRSN",
    long: "Inhibidores de la Recaptación de Serotonina-Noradrenalina",
    moa: "Bloquean SERT y NET → aumentada 5-HT y NA. Útiles con dolor crónico, fatiga y síntomas cognitivos.",
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
      "Aumentado riesgo de ideación suicida en <25 años (aviso de clase)",
      "Síndrome de discontinuación marcado, especialmente con venlafaxina (retirar gradualmente)",
      "Monitorizar presión arterial",
      "Evitar en HTA no controlada",
      "Precaución hepática (duloxetina)",
      "No combinar con IMAO"
    ]
  },
  {
    id: "tca",
    name: "Tricíclicos",
    long: "Antidepresivos Tricíclicos",
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
      "Aumentado riesgo de ideación suicida en <25 años (aviso de clase)",
      "Síndrome de discontinuación con rebote colinérgico (retirar gradualmente)",
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
    moa: "Inhiben MAO-A/B → aumentada 5-HT, NA, DA intracelular. Reservados para depresión atípica o resistente.",
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
      "Aumentado riesgo de ideación suicida en <25 años (aviso de clase)",
      "Dieta estricta baja en tiramina (IMAO irreversibles)",
      "Lavado 14 días al cambiar a/desde ISRS-IRSN (5 semanas si fluoxetina)",
      "Riesgo de síndrome serotoninérgico",
      "Evitar con simpaticomiméticos, meperidina, dextrometorfano"
    ]
  },
  {
    id: "atypical",
    name: "Atípicos",
    long: "Antidepresivos atípicos",
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
      "Bupropión: insomnio, temblor, disminuido umbral convulsivo",
      "Mirtazapina: sedación, aumentado peso, aumentado colesterol",
      "Trazodona: priapismo (raro), somnolencia",
      "Vortioxetina: náusea",
      "Agomelatina: hepatotoxicidad (monitorear ALT)"
    ],
    cautions: [
      "Aumentado riesgo de ideación suicida en <25 años (aviso de clase)",
      "Bupropión: contraindicado en epilepsia, bulimia/anorexia",
      "Mirtazapina: agranulocitosis (muy rara)",
      "Agomelatina: control de transaminasas 3, 6, 12 y 24 sem",
      "Vortioxetina: ajustar con inhibidores CYP2D6"
    ]
  },
  {
    id: "adjunct",
    name: "Adyuvantes",
    long: "Potenciadores · Ketamina · Litio · Antipsicóticos",
    moa: "Añadidos a un antidepresivo en depresión resistente o para fenómenos específicos.",
    drugs: [
      { n: "Litio",        sub: "potenciador clásico",   dose: "600–1200", u: "mg/día oral", notes: "Nivel sérico 0.4–0.8 mEq/L (potenciación antidepresiva). Disminuido riesgo suicida.", tag: "anti-suicida" },
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
      "Esketamina/Ketamina: disociación, aumentada TA, sedación transitoria",
      "T3: palpitaciones, insomnio"
    ],
    cautions: [
      "Litio: monitor litemia, función renal y tiroidea cada 6 m",
      "Esketamina: REMS (administrar en clínica)",
      "Antipsicóticos: vigilar peso, glucosa, lípidos",
      "Evaluar riesgo/beneficio en uso prolongado"
    ]
  }
];
