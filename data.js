/* =========================================================
   Data layer · DSM-5, regiones cerebrales y farmacología
   ========================================================= */

window.HERO = {
  eyebrow: "Infografía clínica · Psicofarmacología · Harold Taeter",
  title: "Trastorno<br><em>Depresivo</em><br>Mayor",
  lede: "Una introducción visual a sus síntomas, sus bases en el cerebro y su tratamiento.",
  meta: [
    { label: "prevalencia global adultos", value: "~5%" },
    { label: "mujeres : hombres", value: "≈2:1" },
    { label: "criterios vigentes", value: "DSM-5-TR" }
  ]
};

window.SYNAPSE_CAPTIONS = {
  normal:     "Funcionamiento normal: la neurona presináptica libera neurotransmisores que cruzan la hendidura sináptica y activan receptores en la neurona postsináptica. Después, los transportadores recogen el exceso y lo devuelven a la neurona presináptica.",
  depression: "En la depresión hay menos neurotransmisores disponibles en la hendidura sináptica. Esto reduce la activación de los receptores y afecta a los circuitos del estado de ánimo, la motivación y el pensamiento.",
  ssri:       "Los ISRS bloquean el transportador que recoge la serotonina, así esta se queda más tiempo en la hendidura sináptica y puede seguir activando los receptores. El efecto clínico tarda entre 2 y 4 semanas en aparecer."
};

window.DSM5_SECTION = {
  title: "Criterios DSM-5-TR",
  sub: "Para diagnosticar un TDM se deben cumplir los cinco criterios (A–E).",
  criterionA: {
    label: "Criterio A",
    title: "Síntomas depresivos",
    body: "Presentar 5 o más síntomas durante al menos 2 semanas, e incluir al menos uno de los dos síntomas principales (ánimo deprimido o anhedonia)."
  },
  criteriaExtra: [
    { label: "Criterio B", title: "Deterioro funcional",  body: "Los síntomas causan malestar importante o dificultan la vida social, laboral o cotidiana de la persona." },
    { label: "Criterio C", title: "Exclusión orgánica",   body: "Los síntomas no se deben al consumo de una sustancia (drogas, fármacos) ni a otra enfermedad médica." },
    { label: "Criterio D", title: "Exclusión de psicosis",body: "Los síntomas no se explican mejor por un trastorno psicótico (como esquizofrenia o trastorno esquizoafectivo)." },
    { label: "Criterio E", title: "Ausencia de manía",    body: "La persona nunca ha tenido un episodio de manía o hipomanía. Si los ha tenido, hay que pensar en un trastorno bipolar." }
  ]
};

window.DSM5 = [
  { t: "Ánimo deprimido",        s: "Tristeza, vacío o desesperanza durante casi todo el día, casi todos los días", req: true },
  { t: "Anhedonia",              s: "Pérdida clara de interés o placer en casi todas las actividades", req: true },
  { t: "Cambios en peso o apetito", s: "Pérdida o aumento importante de peso sin proponérselo" },
  { t: "Alteraciones del sueño", s: "Insomnio o necesidad de dormir mucho más de lo habitual" },
  { t: "Agitación o lentitud",   s: "Cambios visibles desde fuera: moverse o hablar más rápido o más lento de lo normal" },
  { t: "Fatiga",                 s: "Cansancio o falta de energía casi todos los días" },
  { t: "Culpa o sentirse inútil",s: "Sentimientos excesivos o inapropiados de culpa o de no valer nada" },
  { t: "Dificultades cognitivas",s: "Problemas para concentrarse, pensar o tomar decisiones" },
  { t: "Pensamientos de muerte", s: "Pensamientos recurrentes sobre la muerte, ideación, plan o intento de suicidio" }
];

window.ETIOLOGY = {
  title: "Etiología",
  sub: "El TDM no tiene una sola causa: factores biológicos, psicológicos y sociales se combinan y se influyen entre sí. Esto explica por qué cada caso es distinto en gravedad y evolución.",
  cards: [
    {
      id: "bio",
      icon: "dna",
      title: "Biológico",
      items: [
        { term: "Genética",                  detail: "Hay un componente hereditario: tener familiares con depresión aumenta el riesgo de desarrollarla." },
        { term: "Hipótesis monoaminérgica",  detail: "Hay menos serotonina, noradrenalina y dopamina disponibles entre las neuronas. Es la base sobre la que actúan la mayoría de antidepresivos." },
        { term: "Eje del estrés (HHA)",      detail: "El sistema que regula la respuesta al estrés está sobreactivado, manteniendo niveles elevados de cortisol que dañan el cerebro a largo plazo." },
        { term: "Menor plasticidad cerebral",detail: "El cerebro pierde capacidad para crear y reforzar conexiones neuronales. El tratamiento y el ejercicio ayudan a recuperarla." },
        { term: "Inflamación",               detail: "En la depresión hay signos de inflamación crónica de bajo grado, que parece interferir con el funcionamiento normal de los neurotransmisores." }
      ]
    },
    {
      id: "psico",
      icon: "brain",
      title: "Psicológico",
      items: [
        { term: "Tríada cognitiva de Beck", detail: "Pensamientos negativos automáticos sobre uno mismo, el mundo y el futuro, que mantienen el estado de ánimo bajo." },
        { term: "Neuroticismo",             detail: "Rasgo de personalidad asociado a una mayor sensibilidad emocional. Es uno de los predictores más sólidos de vulnerabilidad a la depresión." },
        { term: "Trauma temprano",          detail: "Las experiencias adversas en la infancia (abuso, negligencia, pérdidas) aumentan la sensibilidad al estrés y el riesgo de depresión en la vida adulta." },
        { term: "Indefensión aprendida",    detail: "Tras enfrentarse repetidamente a situaciones que no se pueden controlar, la persona deja de intentarlo, incluso cuando sí podría cambiar las cosas." },
        { term: "Rumiación",               detail: "Dar vueltas constantemente a pensamientos negativos. Alarga los episodios depresivos y aumenta el riesgo de recaer." }
      ]
    },
    {
      id: "social",
      icon: "users",
      title: "Social",
      items: [
        { term: "Eventos vitales estresantes", detail: "Una pérdida, un duelo, el desempleo o una enfermedad grave pueden desencadenar un episodio depresivo en personas vulnerables." },
        { term: "Aislamiento y poco apoyo",    detail: "Tener pocas relaciones de apoyo empeora el pronóstico. El apoyo social actúa como amortiguador frente al estrés." },
        { term: "Pobreza y precariedad",       detail: "El estrés crónico por falta de recursos aumenta el riesgo de depresión y dificulta el acceso al tratamiento." },
        { term: "Violencia y abuso",           detail: "Vivir maltrato físico, sexual o psicológico aumenta el riesgo de presentar episodios depresivos más graves y recurrentes." },
        { term: "Estigma cultural",            detail: "El estigma alrededor de la salud mental dificulta pedir ayuda y mantenerse en tratamiento, prolongando el sufrimiento." }
      ]
    }
  ]
};

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

window.SNC_SECTION = {
  title: "Afectaciones del SNC",
  sub: "La depresión afecta al sistema nervioso central en dos niveles: el funcionamiento de algunas regiones del cerebro y el equilibrio de los neurotransmisores en las sinapsis.",
  synapse: {
    title: "Neurotransmisión monoaminérgica",
    subtitle1: "La <b>hipótesis monoaminérgica</b> propone que en la depresión hay menos serotonina, noradrenalina y dopamina disponibles entre las neuronas. La animación muestra cómo la neurona presináptica libera neurotransmisores, que cruzan la hendidura sináptica y activan receptores en la neurona postsináptica.",
    subtitle2: "Después de actuar, los neurotransmisores son recaptados por la neurona presináptica gracias a unos transportadores. Los <b>ISRS</b> bloquean el transportador de la serotonina, así esta permanece más tiempo en la hendidura sináptica y puede seguir activando los receptores. Es el principal mecanismo de acción de los antidepresivos de primera línea.",
    modeLabel: "Selecciona un escenario para ver cómo los ISRS aumentan la cantidad de neurotransmisores en la hendidura sináptica."
  }
};

window.TREATMENT_SECTION = {
  title: "Tratamiento",
  sub: "El tratamiento del TDM combina varias estrategias. La unión de fármacos y psicoterapia funciona mejor que cualquiera de los dos por separado, sobre todo en depresiones moderadas o graves. La elección depende de la gravedad, la respuesta previa y las preferencias del paciente.",
  pillars: [
    {
      id: "farma",
      num: "01",
      title: "Farmacoterapia",
      items: [
        { term: "Primera elección: ISRS o IRSN", detail: "Son los fármacos más usados por su buena tolerancia y seguridad. Empiezan a hacer efecto a las 2–4 semanas." },
        { term: "Duración del tratamiento",       detail: "Se mantiene entre 6 y 12 meses tras la mejoría. Si la persona ha tenido varios episodios, puede prolongarse durante años." },
        { term: "Depresión resistente",           detail: "Cuando un fármaco no funciona, se prueba otro o se combinan varios. La ketamina intranasal es una opción nueva con efecto rápido." },
        { term: "Seguimiento",                    detail: "Se evalúa la respuesta a las 4 semanas. Si no hay mejoría, se ajusta la dosis antes de cambiar de fármaco." }
      ]
    },
    {
      id: "psico",
      num: "02",
      title: "Psicoterapia",
      items: [
        { term: "Terapia cognitivo-conductual (TCC)", detail: "Identifica y modifica los pensamientos negativos y las conductas de evitación. Es la psicoterapia con más evidencia en depresión." },
        { term: "Terapia interpersonal (TIP)",        detail: "Centrada en el duelo, los conflictos con otras personas y los cambios vitales importantes. Útil cuando el episodio se asocia a pérdidas o transiciones." },
        { term: "Activación conductual",              detail: "Recuperar poco a poco actividades agradables y significativas. Rompe el círculo de aislamiento y falta de placer." },
        { term: "Mindfulness (MBCT)",                 detail: "Combina meditación y técnicas cognitivas. Es especialmente útil para prevenir recaídas en personas con varios episodios previos." }
      ]
    },
    {
      id: "neuro",
      num: "03",
      title: "Neuroestimulación",
      items: [
        { term: "Terapia electroconvulsiva (TEC)",              detail: "Tratamiento de elección en depresiones muy graves o resistentes. Es muy eficaz, sobre todo cuando hay riesgo de suicidio inmediato." },
        { term: "Estimulación magnética transcraneal (EMTr)",   detail: "Aplica pulsos magnéticos sobre la corteza prefrontal desde fuera del cráneo. No requiere anestesia y se utiliza en depresiones resistentes." },
        { term: "Estimulación cerebral profunda (DBS)",         detail: "Implanta electrodos en zonas profundas del cerebro. Es un tratamiento experimental, reservado a casos graves que no responden a nada más." },
        { term: "Estimulación del nervio vago (VNS)",           detail: "Un dispositivo estimula el nervio vago de forma continua. Es una opción para depresiones de larga duración que no responden a otros tratamientos." }
      ]
    },
    {
      id: "vida",
      num: "04",
      title: "Estilo de vida",
      items: [
        { term: "Ejercicio aeróbico",            detail: "Hacer al menos 150 minutos a la semana de actividad moderada tiene un efecto antidepresivo comparable al de los fármacos en depresiones leves o moderadas." },
        { term: "Higiene del sueño",             detail: "Dormir mal mantiene la depresión. Recuperar horarios regulares de sueño ayuda a mejorar y reduce el riesgo de recaída." },
        { term: "Alimentación",                  detail: "La dieta mediterránea se asocia a menor riesgo de depresión. Una mala alimentación puede empeorar el estado de ánimo." },
        { term: "Apoyo social y psicoeducación", detail: "El aislamiento mantiene la depresión. Tener apoyo y entender la enfermedad mejora la adherencia al tratamiento y reduce las recaídas." }
      ]
    }
  ]
};

window.DRUGS_SECTION = {
  title: "Farmacología",
  sub: "La farmacoterapia antidepresiva abarca seis clases de fármacos con mecanismos, perfiles de tolerabilidad e indicaciones diferenciadas. Selecciona una clase para explorar sus fármacos principales, rangos de dosis habituales, efectos adversos frecuentes y consideraciones clínicas relevantes."
};

window.DRUG_CLASSES = [
  {
    id: "ssri",
    name: "ISRS",
    long: "Inhibidores Selectivos de la Recaptación de Serotonina",
    moa: "Bloquean el transportador SERT → aumentada 5-HT en hendidura sináptica. Primera línea por perfil de seguridad y tolerancia.",
    drugs: [
      { n: "Fluoxetina",   sub: "t½ larga · activante",       dose: "20–60",   u: "mg/día oral",          notes: "Larga vida media → menos síndrome de retirada. Útil en adolescentes." },
      { n: "Sertralina",   sub: "perfil amplio",               dose: "50–200",  u: "mg/día oral",          notes: "Buena evidencia post-IAM y en ancianos.", tag: "1ª línea" },
      { n: "Escitalopram", sub: "S-enantiómero",               dose: "10–20",   u: "mg/día oral",          notes: "Alta selectividad 5-HT; bajo potencial de interacciones.", tag: "1ª línea" },
      { n: "Paroxetina",   sub: "sedante · anticolinérg.",     dose: "20–50",   u: "mg/día oral",          notes: "Mayor retirada; evitar en embarazo." },
      { n: "Fluvoxamina",  sub: "más usado en TOC",            dose: "100–300", u: "mg/día oral",          notes: "Inhibe CYP1A2 (interacciones con teofilina, clozapina)." }
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
      { n: "Venlafaxina",     sub: "dosis-dependiente",    dose: "75–225",  u: "mg/día oral", notes: "<150 mg actúa como ISRS; >150 recluta NA. Vigilar TA." },
      { n: "Desvenlafaxina",  sub: "metabolito activo",    dose: "50–100",  u: "mg/día oral", notes: "Farmacocinética más predecible." },
      { n: "Duloxetina",      sub: "dolor neuropático",    dose: "60–120",  u: "mg/día oral", notes: "Aprobado en dolor crónico, fibromialgia, neuropatía diabética.", tag: "dolor+" },
      { n: "Levomilnaciprán", sub: "mayor afinidad NA",    dose: "40–120",  u: "mg/día oral", notes: "Perfil noradrenérgico predominante." }
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
      { n: "Amitriptilina", sub: "sedante, dolor",          dose: "75–150",  u: "mg/día oral", notes: "Dolor crónico, migraña profiláctica, insomnio." },
      { n: "Imipramina",    sub: "referente histórico",     dose: "75–200",  u: "mg/día oral", notes: "Primer antidepresivo descrito (1958)." },
      { n: "Nortriptilina", sub: "menos anticolinérg.",     dose: "50–150",  u: "mg/día oral", notes: "Mejor tolerado en ancianos; útil monitorizar niveles." },
      { n: "Clomipramina",  sub: "más serotoninérgico",     dose: "75–250",  u: "mg/día oral", notes: "Elección en TOC." }
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
      { n: "Fenelzina",       sub: "IMAO no selectivo irrev.", dose: "45–90",   u: "mg/día oral",          notes: "Depresión atípica; requiere dieta baja en tiramina." },
      { n: "Tranilcipromina", sub: "estructura anfet.",        dose: "30–60",   u: "mg/día oral",          notes: "Estimulante; insomnio frecuente." },
      { n: "Moclobemida",     sub: "RIMA selectivo A",         dose: "300–600", u: "mg/día oral",          notes: "Reversible → menor riesgo hipertensivo." },
      { n: "Selegilina",      sub: "parche transdérmico",      dose: "6–12",    u: "mg/24h transdérmico",  notes: "A 6 mg/24 h no requiere dieta baja en tiramina; a 9–12 mg/24 h sí se recomienda restricción dietética." }
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
      { n: "Bupropión",    sub: "IRDN · ↑ DA y NA",        dose: "150–450", u: "mg/día oral",   notes: "No afecta función sexual ni peso. Cesación tabáquica.", tag: "sin DS" },
      { n: "Mirtazapina",  sub: "NaSSA · α2, 5HT2/3, H1", dose: "15–45",   u: "mg/noche oral", notes: "Mejora sueño y apetito. Útil en ancianos, caquexia." },
      { n: "Trazodona",    sub: "SARI · 5HT2A, α1, H1",   dose: "150–400", u: "mg/día oral",   notes: "Dosis bajas (25–100 mg) como hipnótico. Antagonismo α1 explica hipotensión ortostática y priapismo." },
      { n: "Vortioxetina", sub: "multimodal 5-HT",         dose: "10–20",   u: "mg/día oral",   notes: "Mejoría cognitiva; náusea al inicio." },
      { n: "Vilazodona",   sub: "ISRS + agonista 5HT1A",  dose: "20–40",   u: "mg/día oral",   notes: "Tomar con alimentos." },
      { n: "Agomelatina",  sub: "agonista MT1/MT2, 5HT2C",dose: "25–50",   u: "mg/noche oral", notes: "Restablece ritmos circadianos. Monitor hepático." }
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
      { n: "Litio",           sub: "potenciador clásico",  dose: "600–1200", u: "mg/día oral",              notes: "Nivel sérico 0.4–0.8 mEq/L (potenciación antidepresiva). Disminuido riesgo suicida.", tag: "anti-suicida" },
      { n: "Quetiapina",      sub: "antipsicótico atípico",dose: "150–300",  u: "mg/día oral",              notes: "Aprobado como adjunto; sedación, metabólico." },
      { n: "Aripiprazol",     sub: "agonista parcial D2",  dose: "2–15",     u: "mg/día oral",              notes: "Menor ganancia de peso; acatisia." },
      { n: "Esketamina",      sub: "antagonista NMDA",     dose: "56–84",    u: "mg intranasal 1–2×/sem",   notes: "Depresión resistente; supervisar 2 h post-dosis.", tag: "efecto rápido" },
      { n: "Ketamina",        sub: "uso off-label",        dose: "0.5",      u: "mg/kg intravenoso",        notes: "Alivio en horas; duración 3–7 días." },
      { n: "T3 (liotironina)",sub: "hormona tiroidea",     dose: "25–50",    u: "µg/día oral",              notes: "Potenciación histórica (STAR*D)." }
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

window.REFERENCES = {
  title: "Referencias",
  items: [
    "American Psychiatric Association. (2022). <i>Diagnostic and statistical manual of mental disorders</i> (5th ed., text rev.). American Psychiatric Publishing. https://doi.org/10.1176/appi.books.9780890425787",
    "Cipriani, A., Furukawa, T. A., Salanti, G., Chaimani, A., Atkinson, L. Z., Ogawa, Y., … Geddes, J. R. (2018). Comparative efficacy and acceptability of 21 antidepressant drugs for the acute treatment of adults with major depressive disorder. <i>The Lancet, 391</i>(10128), 1357–1366.",
    "Malhi, G. S., &amp; Mann, J. J. (2018). Depression. <i>The Lancet, 392</i>(10161), 2299–2312.",
    "National Institute for Health and Care Excellence. (2022). <i>Depression in adults: Treatment and management</i> (NICE Guideline NG222). https://www.nice.org.uk/guidance/ng222",
    "Otte, C., Gold, S. M., Penninx, B. W., Pariante, C. M., Etkin, A., Fava, M., … Schatzberg, A. F. (2016). Major depressive disorder. <i>Nature Reviews Disease Primers, 2</i>, 16065.",
    "Stahl, S. M. (2021). <i>Stahl’s essential psychopharmacology: Neuroscientific basis and practical applications</i> (5th ed.). Cambridge University Press.",
    "World Health Organization. (2023). <i>Depressive disorder (depression)</i>. https://www.who.int/news-room/fact-sheets/detail/depression"
  ]
};
