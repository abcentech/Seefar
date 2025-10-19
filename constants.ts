import { Country, CountryCode, LanguageCode } from './types';

export const COUNTRIES: Country[] = [
  {
    code: CountryCode.NG,
    name: 'Nigeria',
    flag: '🇳🇬',
    languages: [
      { code: LanguageCode.EN, name: 'English' },
      { code: LanguageCode.HA, name: 'Hausa' },
      { code: LanguageCode.YO, name: 'Yoruba' },
      { code: LanguageCode.IG, name: 'Igbo' },
    ],
    defaultLanguage: LanguageCode.EN,
    content: {
      [LanguageCode.EN]: {
        myths: [
          "It's easy to find a high-paying job in Europe as soon as you arrive, even without papers.",
          "The journey across the desert and sea is dangerous but quick and managed by professionals.",
          "Once you are in a European country, you will automatically get asylum and be allowed to stay.",
          "You don't need a visa; you can just pay an agent to smuggle you into any country you want."
        ],
        faqs: [
            { question: "What are the main legal pathways to migrate from Nigeria for work?", answer: "Legal pathways include applying for skilled worker visas, which require a job offer, qualifications, and language proficiency. Common destinations have specific programs like the UK's Skilled Worker visa or Canada's Express Entry system." },
            { question: "How can I verify if a job offer from abroad is legitimate?", answer: "Verify the company's registration, check for a professional website and contact details. Be wary of offers that ask for money upfront for visa processing or travel. Contact the embassy of the destination country in Nigeria to verify the employer's credentials." },
        ],
        contacts: [
            { type: 'Police', name: 'Nigeria Police Force (NPF)', phone: '112' },
            { type: 'NGO', name: 'NAPTIP (Human Trafficking)', phone: '0703-000-0203' },
        ],
        pathways: [
            { name: "Skilled Worker Visa", description: "For professionals with a job offer in a high-demand field.", steps: ["Secure a job offer", "Obtain Certificate of Sponsorship", "Apply for visa online", "Attend biometric appointment"] },
            { name: "Student Visa", description: "For individuals admitted to a recognized educational institution.", steps: ["Receive admission letter", "Show proof of funds", "Apply for student visa", "Prepare for interview"] },
        ],
        resources: [
            { title: "IOM Nigeria", description: "The UN Migration Agency provides support and information for migrants.", link: "https://nigeria.iom.int/" },
            { title: "NIDCOM", description: "Nigerians in Diaspora Commission offers resources and support.", link: "https://nidcom.gov.ng/" },
        ]
      },
      // --- Placeholder for other Nigerian languages ---
      [LanguageCode.HA]: {
        myths: ["(Hausa) Tafiya zuwa Turai abu ne mai sauƙi kuma ana samun aiki nan da nan."],
        faqs: [{ question: "(Hausa) Ta yaya zan iya tabbatar da tayin aiki na gaskiya?", answer: "(Hausa) A bincika rajistar kamfanin kuma a guji biyan kuɗi a gaba." }],
        contacts: [{ type: 'Police', name: '(Hausa) Rundunar Yan Sanda', phone: '112' }],
        pathways: [{ name: "(Hausa) Visa na Ma'aikata Masu Kwarewa", description: "Ga kwararru masu tayin aiki.", steps: ["Samun tayin aiki", "Neman tallafi", "Cika takardar visa"] }],
        resources: [{ title: "(Hausa) Hukumar Kula da Shige da Fice", description: "Bayani ga masu son yin kaura.", link: "#" }]
      }
    }
  },
  {
    code: CountryCode.SN,
    name: 'Senegal',
    flag: '🇸🇳',
    languages: [
      { code: LanguageCode.FR, name: 'French' },
      { code: LanguageCode.WO, name: 'Wolof' },
    ],
    defaultLanguage: LanguageCode.FR,
    content: {
      [LanguageCode.FR]: {
        myths: [
            "Payer un 'passeur' garantit un passage sûr vers l'Espagne en bateau.",
            "Il y a beaucoup d'emplois informels qui attendent les travailleurs sénégalais en France et en Italie.",
            "Si vous arrivez en Europe, votre famille au Sénégal recevra immédiatement un soutien financier du gouvernement local."
        ],
        faqs: [
            { question: "Quels sont les risques de 'Barça ou Barsax' (le voyage en bateau vers l'Espagne)?", answer: "Le voyage est extrêmement dangereux, avec des risques élevés de noyade, de déshydratation et d'exploitation par les trafiquants. De nombreux bateaux ne sont pas en état de naviguer et des milliers de personnes ont perdu la vie." },
        ],
        contacts: [
            { type: 'Police', name: 'Police Nationale', phone: '17' },
            { type: 'Ambulance', name: 'SAMU Senegal', phone: '1515' },
        ],
        pathways: [
            { name: "Travail Saisonnier en Espagne/France", description: "Des accords spécifiques permettent un travail temporaire, principalement dans l'agriculture.", steps: ["Vérifier les programmes gouvernementaux officiels", "Postuler via les agences désignées", "Obtenir un visa de travail temporaire"] },
        ],
        resources: [
            { title: "Sénégalais de l'Extérieur", description: "Portail officiel du gouvernement pour la diaspora sénégalaise.", link: "http://www.senegalaisexterieur.sn/" }
        ]
      },
      [LanguageCode.WO]: {
        myths: ["(Wolof) Fay 'passeur' mooy garanti dem Espaañ ci gaal ci jàmm."],
        faqs: [{ question: "(Wolof) Lan mooy risku 'Barça ou Barsax'?", answer: "(Wolof) Tukki bi amna risk bu mag, ñak sa bakkan ci ndox mi." }],
        contacts: [{ type: 'Police', name: 'Police Nationale', phone: '17' }],
        pathways: [{ name: "(Wolof) Ligéeyu Saison ci Espaañ", description: "Amna ay déggoo ngir ligéey diir bu gànt.", steps: ["Seetal programi nguur gi", "Jokkoo ak ajans yi"] }],
        resources: [{ title: "(Wolof) Senegaal ca Biti Réew", description: "Portal nguur gi ngir Senegaal yi nekk ca biti.", link: "#" }]
      }
    }
  },
  {
    code: CountryCode.MA,
    name: 'Morocco',
    flag: '🇲🇦',
    languages: [
      { code: LanguageCode.AR, name: 'Arabic' },
      { code: LanguageCode.FR, name: 'French' },
    ],
    defaultLanguage: LanguageCode.AR,
    content: {
      [LanguageCode.AR]: {
        myths: [
            "(Arabic) من السهل عبور الحدود إلى جيوب سبتة ومليلية الإسبانية.",
            "(Arabic) العمل في الزراعة في إسبانيا مربح للغاية ولا يتطلب عقدًا.",
            "(Arabic) كمغربي، يمكنك بسهولة الحصول على تأشيرة لأي دولة أوروبية بسبب القرب."
        ],
        faqs: [
            { question: "(Arabic) هل توجد اتفاقيات ثنائية للعمل بين المغرب والدول الأوروبية؟", answer: "(Arabic) نعم، لدى المغرب العديد من الاتفاقيات، خاصة مع إسبانيا وفرنسا وألمانيا، للعمل الموسمي والعمالة الماهرة. من الضروري المرور عبر القنوات الرسمية مثل ANAPEC (الوكالة الوطنية لإنعاش التشغيل والكفاءات)." },
        ],
        contacts: [
            { type: 'Police', name: '(Arabic) المديرية العامة للأمن الوطني', phone: '19' },
            { type: 'Ambulance', name: '(Arabic) SAMU المغرب', phone: '141' },
        ],
        pathways: [
            { name: "(Arabic) عقود العمل عبر ANAPEC", description: "الوكالة الوطنية للتشغيل تسهل العمل القانوني في الخارج.", steps: ["التسجيل في ANAPEC", "التقديم على عروض العمل الدولية", "اجتياز عملية الاختيار", "إكمال إجراءات التأشيرة"] },
        ],
        resources: [
            { title: "(Arabic) ANAPEC الدولية", description: "الوكالة المغربية الوطنية لإنعاش التشغيل والكفاءات.", link: "http://www.anapec.org/internationale/" }
        ]
      },
      [LanguageCode.FR]: {
        myths: [
            "Il est facile de traverser la frontière vers les enclaves espagnoles de Ceuta et Melilla.",
        ],
        faqs: [
            { question: "Existe-t-il des accords bilatéraux pour le travail entre le Maroc et les pays européens ?", answer: "Oui, le Maroc a plusieurs accords, notamment avec l'Espagne, la France et l'Allemagne. Il est essentiel de passer par les canaux officiels comme l'ANAPEC." },
        ],
        contacts: [],
        pathways: [],
        resources: []
      }
    }
  },
  {
    code: CountryCode.KE,
    name: 'Kenya',
    flag: '🇰🇪',
    languages: [
      { code: LanguageCode.EN, name: 'English' },
      { code: LanguageCode.SW, name: 'Swahili' },
    ],
    defaultLanguage: LanguageCode.EN,
    content: {
      [LanguageCode.EN]: {
        myths: [
            "Recruitment agencies promising jobs in the Middle East are always legitimate and safe.",
            "You can easily get a scholarship for any university in the US or UK just by applying.",
            "The 'American Dream' is guaranteed for any Kenyan who manages to get to the USA."
        ],
        faqs: [
            { question: "How do I identify a fraudulent recruitment agency?", answer: "A legitimate agency is registered with the National Employment Authority (NEA) in Kenya. Be suspicious if they ask for large sums of money upfront, refuse to provide a written contract, or are vague about the employer and job details." },
        ],
        contacts: [
            { type: 'Police', name: 'Kenya Police Service', phone: '999' },
            { type: 'NGO', name: 'Awareness Against Human Trafficking (HAART)', phone: '+254 738 607 013' },
        ],
        pathways: [
            { name: "GCC Labour Migration", description: "Regulated pathways for work in Gulf countries.", steps: ["Use a government-registered agency", "Verify your contract", "Attend pre-departure training"] },
            { name: "USA Diversity Visa (Green Card Lottery)", description: "An annual lottery for a US Permanent Resident Card.", steps: ["Check eligibility", "Apply online during the registration period", "Await selection results", "Attend interview if selected"] }
        ],
        resources: [
            { title: "National Employment Authority (NEA) Kenya", description: "Registers and regulates recruitment agencies in Kenya.", link: "https://nea.go.ke/" }
        ]
      },
      [LanguageCode.SW]: {
        myths: ["(Swahili) Mashirika ya ajira ya Mashariki ya Kati ni salama kila wakati."],
        faqs: [{ question: "(Swahili) Nitajuaje wakala wa ulaghai wa kuajiri?", answer: "(Swahili) Wakala halali amesajiliwa na Mamlaka ya Kitaifa ya Ajira (NEA). Kuwa mwangalifu ikiwa wanaomba pesa nyingi mbele." }],
        contacts: [{ type: 'Police', name: '(Swahili) Huduma ya Polisi ya Kenya', phone: '999' }],
        pathways: [{ name: "(Swahili) Uhamiaji wa Kazi wa GCC", description: "Njia zilizodhibitiwa za kufanya kazi katika nchi za Ghuba.", steps: ["Tumia wakala aliyesajiliwa na serikali", "Thibitisha mkataba wako"] }],
        resources: [{ title: "(Swahili) Mamlaka ya Kitaifa ya Ajira (NEA) Kenya", description: "Inasajili na kudhibiti mashirika ya kuajiri nchini Kenya.", link: "https://nea.go.ke/" }]
      }
    }
  },
];