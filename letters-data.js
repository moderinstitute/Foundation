var LETTERS = {
  a: {
    chip: "Aa",
    subScreens: [
      {type:"pattern", ipa:"/æ/", soundHint:"a", combo:null,
        desc:"صوت قصير — عندما يتبع الحرف A حرفٌ ساكن.",
        compare:"يشبه تقريباً صوت الفتحة القصيرة",
        words:[{w:"ant",emoji:"🐜",ar:"نملة"},{w:"cat",emoji:"🐱",ar:"قطة"},{w:"aunt",ar:"عمة / خالة (كلمة واحدة للاثنتين بالإنجليزية)"}],
        bonus:"لاحظ: في الأمريكية العامة، aunt تُنطق غالباً تماماً مثل ant — حرف U فيها صامت! لكن بعض اللهجات (مثل نيو إنغلاند) تنطقها بشكل مختلف قليلاً."},
      {type:"pattern", ipa:"/eɪ/", soundHint:"ay", combo:"A ...E",
        desc:"صوت طويل — عندما تنتهي الكلمة بحرف ساكن ثم حرف e صامت.",
        compare:"يشبه تقريباً ياء مفتوحة مع المد",
        words:[{w:"face",emoji:"🙂",ar:"وجه"},{w:"cake",emoji:"🎂",ar:"كعكة"}]},
      {type:"pattern", ipa:"/eɪ/", soundHint:"ay", combo:"A + I",
        desc:"نفس الصوت السابق، لكن بطريقة كتابة مختلفة.",
        words:[{w:"rain",emoji:"🌧️",ar:"مطر"},{w:"train",emoji:"🚂",ar:"قطار"}],
        bonus:"لاحظ: نفس الصوت الذي سمعته في face و cake — لكن مكتوب بشكل مختلف."},
      {type:"pattern", ipa:"/ɔː/", soundHint:"aw", combo:"A + LL",
        desc:"عندما يأتي بعد A حرفا LL معاً.",
        compare:"يشبه تقريباً الضمة الممدودة",
        words:[{w:"ball",emoji:"⚽",ar:"كرة"},{w:"wall",emoji:"🧱",ar:"جدار"}]},
      {type:"pattern", ipa:"/ɑːr/", soundHint:"ar", combo:"A + R",
        desc:"عندما يأتي بعد A حرف R.",
        compare:"يشبه تقريباً الألف الممدودة (مد)",
        words:[{w:"car",emoji:"🚗",ar:"سيارة"},{w:"star",emoji:"⭐",ar:"نجمة"}]},
      {type:"note", title:"اختلافات وكلمات غير منتظمة",
        desc:"أحياناً لا تتبع الكلمة أياً من هذه الأنماط. هذا قد يكون بسبب تغيّر نطق الكلمة عبر الزمن دون تغيّر كتابتها، أو لأن الكلمة أصلها من لغة أخرى.",
        words:[{w:"said",ipa:"/sɛd/",ar:"قال"},{w:"was",ipa:"/wʌz/",ar:"كان"},{w:"many",ipa:"/ˈmɛni/",ar:"كثير"},{w:"any",ipa:"/ˈɛni/",ar:"أيّ"}]}
    ],
    quizSoundPool: ["/æ/","/eɪ/","/ɔː/","/ɑːr/"],
    quizItems: [
      {w:"ant",correct:"/æ/"},{w:"cat",correct:"/æ/"},{w:"aunt",correct:"/æ/",options:["/æ/","/ɑːnt/","/eɪ/"]},{w:"face",correct:"/eɪ/"},{w:"cake",correct:"/eɪ/"},
      {w:"rain",correct:"/eɪ/"},{w:"train",correct:"/eɪ/"},{w:"ball",correct:"/ɔː/"},{w:"wall",correct:"/ɔː/"},
      {w:"car",correct:"/ɑːr/"},{w:"star",correct:"/ɑːr/"},
      {w:"said",correct:"/sɛd/",options:["/sɛd/","/seɪd/","/sɑːd/"]},
      {w:"was",correct:"/wʌz/",options:["/wʌz/","/weɪz/","/wæz/"]},
      {w:"many",correct:"/ˈmɛni/",options:["/ˈmɛni/","/ˈmeɪni/","/ˈmæni/"]},
      {w:"any",correct:"/ˈɛni/",options:["/ˈɛni/","/ˈeɪni/","/ˈæni/"]}
    ],
    dictationWords: ["cat","cake","rain","wall","star"],
    sentences: [
      {en:"The ant ran past the cat.",ar:"ركض النمل بجانب القطة."},
      {en:"I ate the cake and wiped my face.",ar:"أكلتُ الكعكة ومسحتُ وجهي."},
      {en:"The rain came just as the train left.",ar:"جاء المطر تماماً عندما غادر القطار."},
      {en:"The ball hit the wall.",ar:"ضربت الكرة الجدار."},
      {en:"The car has a star on it.",ar:"توجد نجمة على السيارة."},
      {en:"Many people said it was true.",ar:"قال كثير من الناس إن الأمر صحيح."}
    ],
    nextLetter: "b"
  },

  b: {
    chip: "Bb",
    subScreens: [
      {type:"pattern", ipa:"/b/", soundHint:"buh", combo:null,
        desc:"الصوت الأساسي لحرف B — يظهر في بداية أو وسط أو نهاية معظم الكلمات.",
        compare:"مثل حرف ب في العربية تقريباً",
        words:[{w:"bear",emoji:"🐻",ar:"دب"},{w:"boat",emoji:"⛵",ar:"قارب"},{w:"bag",emoji:"👜",ar:"حقيبة"},{w:"bee",emoji:"🐝",ar:"نحلة"}]},
      {type:"note", title:"لا يُنطق",
        desc:"أحياناً يُكتب حرف B لكن لا يُنطق أبداً — عندما يأتي بعد حرف M في نهاية الكلمة.",
        words:[{w:"thumb",emoji:"👍",ar:"إبهام"},{w:"comb",emoji:"🪮",ar:"مشط"},{w:"lamb",emoji:"🐑",ar:"خروف"},{w:"climb",emoji:"🧗",ar:"يتسلّق"}]}
    ],
    quizSoundPool: ["/d/","/g/","/p/","/v/"],
    quizItems: [
      {w:"bear",correct:"/b/"},{w:"boat",correct:"/b/"},{w:"bag",correct:"/b/"},{w:"bee",correct:"/b/"},
      {w:"thumb",correct:"لا يُنطق",options:["/b/","لا يُنطق","/d/"]},
      {w:"comb",correct:"لا يُنطق",options:["/b/","لا يُنطق","/g/"]},
      {w:"lamb",correct:"لا يُنطق",options:["/b/","لا يُنطق","/p/"]},
      {w:"climb",correct:"لا يُنطق",options:["/b/","لا يُنطق","/v/"]}
    ],
    dictationWords: ["bag","bee"],
    sentences: [
      {en:"The bear got into the boat.",ar:"دخل الدب إلى القارب."},
      {en:"I put my bag down and picked up the comb.",ar:"وضعتُ حقيبتي والتقطتُ المشط."},
      {en:"A bee landed on my thumb.",ar:"حطّت نحلة على إبهامي."},
      {en:"The lamb tried to climb the hill.",ar:"حاول الخروف تسلّق التل."}
    ],
    nextLetter: "c"
  },

  c: {
    chip: "Cc",
    subScreens: [
      {type:"pattern", ipa:"/k/", soundHint:"kuh", combo:"C Hard",
        desc:"صوت C الصلب — عندما يأتي بعده a أو o أو u أو حرف ساكن.",
        compare:"مثل حرف ك في العربية تقريباً",
        words:[{w:"cup",emoji:"☕",ar:"كوب"},{w:"corn",emoji:"🌽",ar:"ذرة"}]},
      {type:"pattern", ipa:"/s/", soundHint:"sss", combo:"C Soft",
        desc:"صوت C الناعم — عندما يأتي بعده e أو i أو y.",
        compare:"مثل حرف س في العربية تقريباً",
        words:[{w:"city",emoji:"🏙️",ar:"مدينة"},{w:"cell",emoji:"📱",ar:"خلية / هاتف"}]},
      {type:"pattern", ipa:"/tʃ/", soundHint:"ch", combo:"C + H",
        desc:"عندما يأتي بعد C حرف H معاً — صوت مختلف تماماً عن C المفردة.",
        words:[{w:"chair",emoji:"🪑",ar:"كرسي"},{w:"church",emoji:"⛪",ar:"كنيسة"}]},
      {type:"note", title:"غير منتظم",
        desc:"أحياناً لا تتبع الكلمة أياً من هذه القواعد — بسبب أصل الكلمة من لغة أخرى أو تطور تاريخي في النطق.",
        words:[{w:"muscle",emoji:"💪",ar:"عضلة"},{w:"cello",emoji:"🎻",ar:"تشيلو (آلة موسيقية)"}]}
    ],
    quizSoundPool: ["/k/","/s/","/tʃ/"],
    quizItems: [
      {w:"cup",correct:"/k/"},{w:"corn",correct:"/k/"},{w:"city",correct:"/s/"},{w:"cell",correct:"/s/"},
      {w:"chair",correct:"/tʃ/"},{w:"church",correct:"/tʃ/"}
    ],
    dictationWords: ["cup","city","chair"],
    sentences: [
      {en:"I drink from my cup.",ar:"أشرب من كوبي."},
      {en:"We ate corn in the city.",ar:"أكلنا الذرة في المدينة."},
      {en:"She sat in the chair at church.",ar:"جلست على الكرسي في الكنيسة."}
    ],
    nextLetter: "d"
  },

  d: {
    chip: "Dd",
    subScreens: [
      {type:"pattern", ipa:"/d/", soundHint:"duh", combo:null,
        desc:"الصوت الأساسي لحرف D.",
        compare:"مثل حرف د في العربية تقريباً",
        words:[{w:"dog",emoji:"🐶",ar:"كلب"},{w:"door",emoji:"🚪",ar:"باب"}]},
      {type:"note", title:"-ed — 3 sounds",
        desc:"نهاية -ed للفعل الماضي لها ثلاثة أصوات مختلفة حسب الصوت الذي قبلها — قاعدة مهمة جداً وشائعة.",
        words:[{w:"played",ipa:"/d/",emoji:"🎮",ar:"لعب"},{w:"called",ipa:"/d/",emoji:"📞",ar:"اتصل"},
               {w:"walked",ipa:"/t/",emoji:"🚶",ar:"مشى"},{w:"watched",ipa:"/t/",emoji:"📺",ar:"شاهد"},
               {w:"wanted",ipa:"/ɪd/",emoji:"🙋",ar:"أراد"},{w:"needed",ipa:"/ɪd/",emoji:"🆘",ar:"احتاج"}]},
      {type:"note", title:"غير منتظم",
        desc:"في النطق الطبيعي السريع، أول D في هذه الكلمة يكاد لا يُسمع.",
        words:[{w:"Wednesday",emoji:"📅",ar:"الأربعاء"}]}
    ],
    quizSoundPool: ["/d/","/t/","/ɪd/"],
    quizItems: [
      {w:"played",correct:"/d/"},{w:"called",correct:"/d/"},{w:"walked",correct:"/t/"},
      {w:"watched",correct:"/t/"},{w:"wanted",correct:"/ɪd/"},{w:"needed",correct:"/ɪd/"}
    ],
    dictationWords: ["dog","door"],
    sentences: [
      {en:"The dog sat by the door.",ar:"جلس الكلب بجانب الباب."},
      {en:"I played and then walked home.",ar:"لعبتُ ثم مشيتُ إلى المنزل."},
      {en:"She wanted to see the dog on Wednesday.",ar:"أرادت رؤية الكلب يوم الأربعاء."}
    ],
    nextLetter: "e"
  },

  e: {
    chip: "Ee",
    subScreens: [
      {type:"pattern", ipa:"/ɛ/", soundHint:"eh", combo:null,
        desc:"صوت قصير — عندما يتبع الحرف E حرفٌ ساكن.",
        compare:"يشبه تقريباً صوت الكسرة المفتوحة قليلاً",
        words:[{w:"bed",emoji:"🛏️",ar:"سرير"},{w:"ten",emoji:"🔟",ar:"عشرة"}]},
      {type:"pattern", ipa:"/iː/", soundHint:"ee", combo:"E + E",
        desc:"صوت طويل — عندما يأتي حرفا E معاً.",
        compare:"يشبه تقريباً الكسرة الممدودة",
        words:[{w:"bee",emoji:"🐝",ar:"نحلة"},{w:"tree",emoji:"🌳",ar:"شجرة"}]},
      {type:"pattern", ipa:"/iː/", soundHint:"ee", combo:"E + A",
        desc:"نفس الصوت السابق، بطريقة كتابة مختلفة — عندما يأتي بعد E حرف A.",
        words:[{w:"eat",emoji:"🍽️",ar:"يأكل"},{w:"tea",emoji:"🍵",ar:"شاي"}]},
      {type:"pattern", ipa:"/ɝ/", soundHint:"er", combo:"E + R",
        desc:"صوت ملوّن بالراء — عندما يأتي بعد E حرف R.",
        compare:"لا يوجد مقابل مباشر له في العربية — لسانك يرتفع للخلف قليلاً مع صوت الراء",
        words:[{w:"her",emoji:"👩",ar:"لها (ضمير مؤنث)"},{w:"term",emoji:"📅",ar:"فصل دراسي / مصطلح"}]},
      {type:"note", title:"دور خاص",
        desc:"حرف E في نهاية الكلمة غالباً لا يُنطق أبداً — لكنه يخبرك أن الحرف المتحرك قبله يُنطق طويلاً. هذا ليس صوتاً لحرف E نفسه، بل قاعدة مهمة تتذكرها لاحقاً.",
        words:[{w:"like",emoji:"👍",ar:"يحب"},{w:"home",emoji:"🏠",ar:"منزل"}]},
      {type:"pattern", ipa:"/ə/", soundHint:"schwa", combo:null,
        desc:"هذا صوت خاص جداً: لا ينتمي لحرف واحد، بل يظهر مع أي حرف متحرك (A, E, I, O, U) عندما يكون في مقطع غير منبور (غير مشدَّد). إنه أكثر صوت متحرك شائع في اللغة الإنجليزية كلها!",
        compare:"صوت ضعيف ومحايد، أقرب لصوت سريع غير واضح",
        words:[{w:"about",ar:"حول / بخصوص (A غير منبورة)"},{w:"item",ar:"عنصر (E غير منبورة)"}]},
      {type:"note", title:"غير منتظم",
        desc:"لاحظ: bread تستخدم نفس تركيب EA مثل eat وtea — لكنها لا تُنطق بنفس الصوت! هذا مثال حقيقي على أن حتى القواعد التي نتعلمها لها استثناءات.",
        words:[{w:"bread",emoji:"🍞",ar:"خبز"}]}
    ],
    quizSoundPool: ["/ɛ/","/iː/","/eɪ/","/ɝ/"],
    quizItems: [
      {w:"bed",correct:"/ɛ/"},{w:"ten",correct:"/ɛ/"},{w:"bee",correct:"/iː/"},
      {w:"tree",correct:"/iː/"},{w:"eat",correct:"/iː/"},{w:"tea",correct:"/iː/"},
      {w:"her",correct:"/ɝ/"},{w:"term",correct:"/ɝ/"}
    ],
    dictationWords: ["bed","tree","tea","term"],
    sentences: [
      {en:"I sat on the bed and counted to ten.",ar:"جلستُ على السرير وعددتُ إلى عشرة."},
      {en:"The bee flew up to the tree.",ar:"طارت النحلة إلى الشجرة."},
      {en:"We drank tea before we ate.",ar:"شربنا الشاي قبل أن نأكل."},
      {en:"The bread was on the table.",ar:"كان الخبز على الطاولة."},
      {en:"Her new term starts soon.",ar:"سيبدأ فصلها الدراسي الجديد قريباً."}
    ],
    nextLetter: "f"
  },

  f: {
    chip: "Ff",
    subScreens: [
      {type:"pattern", ipa:"/f/", soundHint:"fff", combo:null,
        desc:"الصوت الأساسي لحرف F.",
        compare:"مثل حرف ف في العربية تقريباً",
        words:[{w:"fish",emoji:"🐟",ar:"سمكة"},{w:"fork",emoji:"🍴",ar:"شوكة"},{w:"farm",emoji:"🚜",ar:"مزرعة"}],
        bonus:"أحياناً يُكتب FF معاً في نهاية كلمات قصيرة (مثل off, stuff) — نفس الصوت، فقط طريقة كتابة مضاعفة."},
      {type:"note", title:"غير منتظم",
        desc:"كلمة of شائعة جداً، لكن حرف F فيها يُنطق /v/ وليس /f/ — استثناء يستحق الانتباه لأنك ستستخدم هذه الكلمة كثيراً.",
        words:[{w:"of",ar:"مِن / ملكية"}]}
    ],
    quizSoundPool: ["/v/","/p/","/s/"],
    quizItems: [
      {w:"fish",correct:"/f/"},{w:"fork",correct:"/f/"},{w:"farm",correct:"/f/"},
      {w:"of",correct:"/v/",options:["/v/","/f/","/p/"]}
    ],
    dictationWords: ["fish","fork"],
    sentences: [
      {en:"The fish swam near the farm.",ar:"سبحت السمكة قرب المزرعة."},
      {en:"I ate with a fork.",ar:"أكلتُ بالشوكة."},
      {en:"One of the farmers had a fish.",ar:"كان لدى أحد المزارعين سمكة."}
    ],
    reviewAfter: "review-a-f",
    nextLetter: "g"
  },

  g: {
    chip: "Gg",
    subScreens: [
      {type:"pattern", ipa:"/g/", soundHint:"guh", combo:"G Hard",
        desc:"صوت G الصلب — عندما يأتي بعده a أو o أو u أو حرف ساكن.",
        compare:"مثل حرف غ في العربية تقريباً",
        words:[{w:"goat",emoji:"🐐",ar:"ماعز"},{w:"flag",emoji:"🚩",ar:"علم"},{w:"log",emoji:"🪵",ar:"جذع خشب"}]},
      {type:"pattern", ipa:"/dʒ/", soundHint:"djh", combo:"G Soft",
        desc:"صوت G الناعم — عندما يأتي بعده e أو i أو y.",
        compare:"مثل حرف ج في العربية تقريباً",
        words:[{w:"giraffe",emoji:"🦒",ar:"زرافة"},{w:"gem",emoji:"💎",ar:"جوهرة"}]},
      {type:"note", title:"استثناءات شائعة",
        desc:"هاتان الكلمتان يجب أن تكونا G ناعمة حسب القاعدة (يتبعهما i أو e) — لكنهما تُنطقان G صلبة! كلمات شائعة جداً تستحق الحفظ.",
        words:[{w:"girl",emoji:"👧",ar:"فتاة"},{w:"give",emoji:"🎁",ar:"يعطي"}]},
      {type:"note", title:"G صامتة قبل N",
        desc:"عندما يأتي حرف G قبل N مباشرة، يصبح G صامتاً تماماً — لا يُنطق أبداً.",
        words:[{w:"sign",emoji:"✍️",ar:"يوقّع / لافتة"},{w:"gnome",emoji:"🧙",ar:"قزم (كائن خرافي)"}]}
    ],
    quizSoundPool: ["/g/","/dʒ/","/k/"],
    quizItems: [
      {w:"goat",correct:"/g/"},{w:"flag",correct:"/g/"},{w:"log",correct:"/g/"},
      {w:"giraffe",correct:"/dʒ/"},{w:"gem",correct:"/dʒ/"},
      {w:"girl",correct:"/g/",options:["/g/","/dʒ/","/k/"]},
      {w:"give",correct:"/g/",options:["/g/","/dʒ/","/k/"]},
      {w:"sign",correct:"لا يُنطق",options:["/g/","لا يُنطق","/dʒ/"]},
      {w:"gnome",correct:"لا يُنطق",options:["/g/","لا يُنطق","/dʒ/"]}
    ],
    dictationWords: ["goat","flag"],
    sentences: [
      {en:"The goat jumped over the log.",ar:"قفز الماعز فوق جذع الخشب."},
      {en:"She waved the flag.",ar:"لوّحت بالعلم."},
      {en:"I saw a giraffe today.",ar:"رأيتُ زرافة اليوم."},
      {en:"The girl will give me a gift.",ar:"ستعطيني الفتاة هدية."},
      {en:"I saw a sign near the garden gnome.",ar:"رأيتُ لافتة بجانب تمثال القزم في الحديقة."}
    ],
    nextLetter: "h"
  },

  h: {
    chip: "Hh",
    subScreens: [
      {type:"pattern", ipa:"/h/", soundHint:"huh", combo:null,
        desc:"الصوت الأساسي لحرف H — نفَس يخرج من الحلق دون شكل ثابت للسان.",
        compare:"مثل حرف هـ في العربية تقريباً",
        words:[{w:"hat",emoji:"🎩",ar:"قبعة"},{w:"house",emoji:"🏠",ar:"منزل"},{w:"hand",emoji:"✋",ar:"يد"}]},
      {type:"note", title:"H صامتة",
        desc:"في بعض الكلمات، حرف H في البداية لا يُنطق أبداً. لاحظ: نقول \u0022an hour\u0022 وليس \u0022a hour\u0022 — لأن الكلمة تبدأ بصوت متحرك رغم أن أول حرف مكتوب هو H.",
        words:[{w:"hour",emoji:"⏰",ar:"ساعة (وقت)"},{w:"honest",emoji:"💯",ar:"صادق"}]}
    ],
    quizSoundPool: ["/h/","لا يُنطق","/k/"],
    quizItems: [
      {w:"hat",correct:"/h/"},{w:"house",correct:"/h/"},{w:"hand",correct:"/h/"},
      {w:"hour",correct:"لا يُنطق",options:["/h/","لا يُنطق","/k/"]},
      {w:"honest",correct:"لا يُنطق",options:["/h/","لا يُنطق","/k/"]}
    ],
    dictationWords: ["hat","hand"],
    sentences: [
      {en:"I wear a hat.",ar:"ألبس قبعة."},
      {en:"She raised her hand.",ar:"رفعت يدها."},
      {en:"It took an hour to clean the house.",ar:"استغرق تنظيف المنزل ساعة."},
      {en:"He is an honest man.",ar:"إنه رجل صادق."}
    ],
    nextLetter: "i"
  },

  i: {
    chip: "Ii",
    subScreens: [
      {type:"pattern", ipa:"/ɪ/", soundHint:"ih", combo:null,
        desc:"صوت قصير — عندما يتبع الحرف I حرفٌ ساكن.",
        compare:"يشبه تقريباً الكسرة القصيرة",
        words:[{w:"pig",emoji:"🐷",ar:"خنزير"},{w:"six",emoji:"6️⃣",ar:"ستة"}]},
      {type:"pattern", ipa:"/aɪ/", soundHint:"eye", combo:"I ...E",
        desc:"صوت طويل — عندما تنتهي الكلمة بحرف ساكن ثم حرف e صامت.",
        compare:"يشبه تقريباً الفتحة الممدودة بالياء",
        words:[{w:"bike",emoji:"🚲",ar:"دراجة"},{w:"time",emoji:"⏰",ar:"وقت"}]},
      {type:"pattern", ipa:"/aɪ/", soundHint:"eye", combo:"I + GH",
        desc:"نفس الصوت السابق، بطريقة كتابة مختلفة — عندما يأتي بعد I حرفا GH.",
        words:[{w:"night",emoji:"🌙",ar:"ليل"},{w:"light",emoji:"💡",ar:"ضوء"}]},
      {type:"note", title:"غير منتظم",
        desc:"في بعض الكلمات القادمة من الفرنسية، حرف I يُنطق /iː/ (مثل E) بدلاً من صوته المعتاد.",
        words:[{w:"machine",emoji:"⚙️",ar:"آلة"},{w:"ski",emoji:"⛷️",ar:"يتزلج"}]}
    ],
    quizSoundPool: ["/ɪ/","/aɪ/","/iː/"],
    quizItems: [
      {w:"pig",correct:"/ɪ/"},{w:"six",correct:"/ɪ/"},{w:"bike",correct:"/aɪ/"},{w:"time",correct:"/aɪ/"},
      {w:"night",correct:"/aɪ/"},{w:"light",correct:"/aɪ/"},
      {w:"machine",correct:"/iː/",options:["/iː/","/ɪ/","/aɪ/"]},
      {w:"ski",correct:"/iː/",options:["/iː/","/ɪ/","/aɪ/"]}
    ],
    dictationWords: ["pig","bike"],
    sentences: [
      {en:"I counted six pigs.",ar:"عددتُ ستة خنازير."},
      {en:"I rode my bike at night.",ar:"ركبتُ دراجتي في الليل."},
      {en:"Turn on the light, please.",ar:"أضئ الضوء من فضلك."},
      {en:"The machine started to work.",ar:"بدأت الآلة تعمل."}
    ],
    nextLetter: "j"
  },

  j: {
    chip: "Jj",
    subScreens: [
      {type:"pattern", ipa:"/dʒ/", soundHint:"djh", combo:null,
        desc:"الصوت الأساسي لحرف J — نفس صوت G الناعمة تماماً.",
        compare:"مثل حرف ج في العربية تقريباً",
        words:[{w:"jacket",emoji:"🧥",ar:"سترة"},{w:"jump",emoji:"🤸",ar:"يقفز"},{w:"jar",emoji:"🫙",ar:"جرة / برطمان"}]}
    ],
    quizSoundPool: ["/dʒ/","/g/","/tʃ/"],
    quizItems: [
      {w:"jacket",correct:"/dʒ/"},{w:"jump",correct:"/dʒ/"},{w:"jar",correct:"/dʒ/"}
    ],
    dictationWords: ["jump","jar"],
    sentences: [
      {en:"I wore my jacket.",ar:"ارتديتُ سترتي."},
      {en:"The frog can jump high.",ar:"يستطيع الضفدع القفز عالياً."},
      {en:"She put jam in the jar.",ar:"وضعت المربى في البرطمان."}
    ],
    nextLetter: "k"
  },

  k: {
    chip: "Kk",
    subScreens: [
      {type:"pattern", ipa:"/k/", soundHint:"kuh", combo:null,
        desc:"الصوت الأساسي لحرف K.",
        compare:"مثل حرف ك في العربية تقريباً",
        words:[{w:"kite",emoji:"🪁",ar:"طائرة ورقية"},{w:"king",emoji:"👑",ar:"ملك"}]},
      {type:"pattern", ipa:"/k/", soundHint:"kuh", combo:"CK",
        desc:"نفس الصوت، عندما يأتي بعد حرف متحرك قصير في نهاية كلمة قصيرة.",
        words:[{w:"sock",emoji:"🧦",ar:"جورب"},{w:"duck",emoji:"🦆",ar:"بطة"}]},
      {type:"note", title:"KN صامتة",
        desc:"عندما يأتي حرف K في بداية الكلمة متبوعاً بحرف N، يكون K صامتاً تماماً — لا يُنطق أبداً.",
        words:[{w:"knee",emoji:"🦵",ar:"ركبة"},{w:"knife",emoji:"🔪",ar:"سكين"}]}
    ],
    quizSoundPool: ["/k/","/g/","/t/"],
    quizItems: [
      {w:"kite",correct:"/k/"},{w:"king",correct:"/k/"},{w:"sock",correct:"/k/"},{w:"duck",correct:"/k/"},
      {w:"knee",correct:"لا يُنطق",options:["/k/","لا يُنطق","/g/"]},
      {w:"knife",correct:"لا يُنطق",options:["/k/","لا يُنطق","/t/"]}
    ],
    dictationWords: ["kite","sock"],
    sentences: [
      {en:"The king flew a kite.",ar:"طيّر الملك طائرة ورقية."},
      {en:"I lost my sock.",ar:"فقدتُ جوربي."},
      {en:"The duck swam in the pond.",ar:"سبحت البطة في البركة."},
      {en:"She cut the cake with a knife.",ar:"قطّعت الكعكة بسكين."},
      {en:"I hurt my knee while running.",ar:"آذيتُ ركبتي أثناء الجري."}
    ],
    reviewAfter: "review-g-k",
    nextLetter: "l"
  },

  l: {
    chip: "Ll",
    subScreens: [
      {type:"pattern", ipa:"/l/", soundHint:"luh", combo:null,
        desc:"الصوت الأساسي لحرف L.",
        compare:"مثل حرف ل في العربية تقريباً",
        words:[{w:"lion",emoji:"🦁",ar:"أسد"},{w:"leaf",emoji:"🍃",ar:"ورقة شجر"},{w:"lamp",emoji:"💡",ar:"مصباح"}]},
      {type:"note", title:"L صامتة",
        desc:"في بعض الكلمات، حرف L لا يُنطق أبداً — خاصة قبل حرف K أو F.",
        words:[{w:"walk",emoji:"🚶",ar:"يمشي"},{w:"half",emoji:"🌗",ar:"نصف"}]}
    ],
    quizSoundPool: ["/l/","لا يُنطق","/r/"],
    quizItems: [
      {w:"lion",correct:"/l/"},{w:"leaf",correct:"/l/"},{w:"lamp",correct:"/l/"},
      {w:"walk",correct:"لا يُنطق",options:["/l/","لا يُنطق","/r/"]},
      {w:"half",correct:"لا يُنطق",options:["/l/","لا يُنطق","/r/"]}
    ],
    dictationWords: ["lion","leaf"],
    sentences: [
      {en:"The lion slept under a leaf.",ar:"نام الأسد تحت ورقة شجر."},
      {en:"Turn on the lamp.",ar:"أضئ المصباح."},
      {en:"We will walk to the park.",ar:"سنمشي إلى الحديقة."},
      {en:"She ate half of the apple.",ar:"أكلت نصف التفاحة."}
    ],
    nextLetter: "m"
  },

  m: {
    chip: "Mm",
    subScreens: [
      {type:"pattern", ipa:"/m/", soundHint:"mmm", combo:null,
        desc:"الصوت الأساسي لحرف M — حرف منتظم جداً بلا استثناءات شائعة.",
        compare:"مثل حرف م في العربية تقريباً",
        words:[{w:"moon",emoji:"🌙",ar:"قمر"},{w:"monkey",emoji:"🐒",ar:"قرد"},{w:"milk",emoji:"🥛",ar:"حليب"}]}
    ],
    quizSoundPool: ["/m/","/n/","/b/"],
    quizItems: [
      {w:"moon",correct:"/m/"},{w:"monkey",correct:"/m/"},{w:"milk",correct:"/m/"}
    ],
    dictationWords: ["moon","milk"],
    sentences: [
      {en:"The monkey drank milk.",ar:"شرب القرد الحليب."},
      {en:"I saw the moon at night.",ar:"رأيتُ القمر في الليل."},
      {en:"She fed the monkey.",ar:"أطعمت القرد."}
    ],
    nextLetter: "n"
  },

  n: {
    chip: "Nn",
    subScreens: [
      {type:"pattern", ipa:"/n/", soundHint:"nnn", combo:null,
        desc:"الصوت الأساسي لحرف N.",
        compare:"مثل حرف ن في العربية تقريباً",
        words:[{w:"nest",emoji:"🪺",ar:"عش"},{w:"nose",emoji:"👃",ar:"أنف"}]},
      {type:"pattern", ipa:"/ŋ/", soundHint:"ng", combo:"N + G",
        desc:"صوت أنفي مختلف — عندما يأتي بعد N حرف G معاً في نهاية الكلمة.",
        words:[{w:"ring",emoji:"💍",ar:"خاتم"},{w:"sing",emoji:"🎤",ar:"يغنّي"}]},
      {type:"note", title:"N صامتة بعد M",
        desc:"عندما يأتي حرف N بعد M مباشرة في نهاية الكلمة، يصبح N صامتاً تماماً.",
        words:[{w:"autumn",emoji:"🍂",ar:"الخريف"},{w:"column",emoji:"🏛️",ar:"عمود"}]}
    ],
    quizSoundPool: ["/n/","/ŋ/","/m/"],
    quizItems: [
      {w:"nest",correct:"/n/"},{w:"nose",correct:"/n/"},{w:"ring",correct:"/ŋ/"},{w:"sing",correct:"/ŋ/"},
      {w:"autumn",correct:"لا يُنطق",options:["/n/","لا يُنطق","/m/"]},
      {w:"column",correct:"لا يُنطق",options:["/n/","لا يُنطق","/m/"]}
    ],
    dictationWords: ["nest","ring"],
    sentences: [
      {en:"The bird built a nest.",ar:"بنى الطائر عشاً."},
      {en:"Touch your nose.",ar:"المس أنفك."},
      {en:"She wears a gold ring.",ar:"ترتدي خاتماً ذهبياً."},
      {en:"We sing every morning.",ar:"نغنّي كل صباح."},
      {en:"The leaves fall in autumn.",ar:"تسقط الأوراق في الخريف."}
    ],
    nextLetter: "o"
  },

  o: {
    chip: "Oo",
    subScreens: [
      {type:"pattern", ipa:"/ɑ/", soundHint:"ah", combo:null,
        desc:"صوت قصير — عندما يتبع الحرف O حرفٌ ساكن.",
        compare:"يشبه تقريباً فتحة قصيرة مفتوحة",
        words:[{w:"pot",emoji:"🍲",ar:"قدر"},{w:"dog",emoji:"🐶",ar:"كلب"}]},
      {type:"pattern", ipa:"/oʊ/", soundHint:"oh", combo:"O ...E",
        desc:"صوت طويل — عندما تنتهي الكلمة بحرف ساكن ثم حرف e صامت.",
        compare:"يشبه تقريباً الضمة الممدودة بالواو",
        words:[{w:"bone",emoji:"🦴",ar:"عظمة"},{w:"rose",emoji:"🌹",ar:"وردة"}]},
      {type:"pattern", ipa:"/oʊ/", soundHint:"oh", combo:"O + A",
        desc:"نفس الصوت السابق، بطريقة كتابة مختلفة.",
        words:[{w:"boat",emoji:"⛵",ar:"قارب"},{w:"coat",emoji:"🧥",ar:"معطف"}]},
      {type:"pattern", ipa:"/uː/", soundHint:"oo", combo:"O + O",
        desc:"صوت طويل مختلف تماماً — عندما يأتي حرفا O معاً.",
        compare:"يشبه تقريباً الضمة الممدودة الصافية",
        words:[{w:"moon",emoji:"🌙",ar:"قمر"},{w:"food",emoji:"🍽️",ar:"طعام"}]},
      {type:"pattern", ipa:"/aʊ/", soundHint:"ow", combo:"O + U/W",
        desc:"صوت مركّب — عندما يأتي بعد O حرف U أو W.",
        words:[{w:"house",emoji:"🏠",ar:"منزل"},{w:"cow",emoji:"🐄",ar:"بقرة"}]},
      {type:"pattern", ipa:"/ɔɪ/", soundHint:"oy", combo:"O + I/Y",
        desc:"صوت مركّب آخر — عندما يأتي بعد O حرف I أو Y.",
        words:[{w:"boy",emoji:"👦",ar:"صبي"},{w:"coin",emoji:"🪙",ar:"عملة معدنية"}]},
      {type:"note", title:"غير منتظم",
        desc:"كلمة شائعة جداً، لكن حرف O فيها لا يتبع أي نمط متوقع.",
        words:[{w:"one",emoji:"1️⃣",ar:"واحد"}]}
    ],
    quizSoundPool: ["/ɑ/","/oʊ/","/uː/","/aʊ/","/ɔɪ/"],
    quizItems: [
      {w:"pot",correct:"/ɑ/"},{w:"dog",correct:"/ɑ/"},{w:"bone",correct:"/oʊ/"},{w:"rose",correct:"/oʊ/"},
      {w:"boat",correct:"/oʊ/"},{w:"coat",correct:"/oʊ/"},
      {w:"moon",correct:"/uː/"},{w:"food",correct:"/uː/"},
      {w:"house",correct:"/aʊ/"},{w:"cow",correct:"/aʊ/"},
      {w:"boy",correct:"/ɔɪ/"},{w:"coin",correct:"/ɔɪ/"},
      {w:"one",correct:"/wʌn/",options:["/wʌn/","/oʊn/","/ɑn/"]}
    ],
    dictationWords: ["pot","bone","boat","moon","house","boy"],
    sentences: [
      {en:"The dog sat by the pot.",ar:"جلس الكلب بجانب القدر."},
      {en:"I gave the dog a bone.",ar:"أعطيتُ الكلب عظمة."},
      {en:"She wore a rose in her coat.",ar:"وضعت وردة في معطفها."},
      {en:"We sailed on the boat.",ar:"أبحرنا على القارب."},
      {en:"Who ate the last one?",ar:"من أكل الأخيرة؟"},
      {en:"I saw the moon and ate some food.",ar:"رأيتُ القمر وأكلتُ بعض الطعام."},
      {en:"The cow stood near the house.",ar:"وقفت البقرة بجانب المنزل."},
      {en:"The boy found a coin.",ar:"وجد الصبي عملة معدنية."}
    ],
    nextLetter: "p"
  },

  p: {
    chip: "Pp",
    subScreens: [
      {type:"pattern", ipa:"/p/", soundHint:"puh", combo:null,
        desc:"الصوت الأساسي لحرف P.",
        compare:"مثل حرف ب لكن بدون اهتزاز الصوت (بدون بحّة)",
        words:[{w:"pen",emoji:"🖊️",ar:"قلم"},{w:"pizza",emoji:"🍕",ar:"بيتزا"}]},
      {type:"pattern", ipa:"/f/", soundHint:"fff", combo:"P + H",
        desc:"عندما يأتي بعد P حرف H معاً — يُنطق تماماً مثل حرف F.",
        words:[{w:"phone",emoji:"📱",ar:"هاتف"},{w:"elephant",emoji:"🐘",ar:"فيل"}]},
      {type:"note", title:"P صامتة",
        desc:"في بعض الكلمات القادمة من اليونانية، حرف P في البداية لا يُنطق أبداً.",
        words:[{w:"psychology",emoji:"🧠",ar:"علم النفس"},{w:"pterodactyl",emoji:"🦕",ar:"زاحف طائر منقرض"}]}
    ],
    quizSoundPool: ["/p/","/f/","لا يُنطق"],
    quizItems: [
      {w:"pen",correct:"/p/"},{w:"pizza",correct:"/p/"},{w:"phone",correct:"/f/"},{w:"elephant",correct:"/f/"},
      {w:"psychology",correct:"لا يُنطق",options:["/p/","لا يُنطق","/f/"]},
      {w:"pterodactyl",correct:"لا يُنطق",options:["/p/","لا يُنطق","/f/"]}
    ],
    dictationWords: ["pen","pizza"],
    sentences: [
      {en:"I wrote with a pen.",ar:"كتبتُ بقلم."},
      {en:"We ate pizza together.",ar:"أكلنا البيتزا معاً."},
      {en:"She called me on the phone.",ar:"اتصلت بي على الهاتف."},
      {en:"The elephant is huge.",ar:"الفيل ضخم جداً."},
      {en:"He studies psychology.",ar:"يدرس علم النفس."}
    ],
    reviewAfter: "review-l-p",
    nextLetter: "q"
  },

  q: {
    chip: "Qq",
    subScreens: [
      {type:"pattern", ipa:"/kw/", soundHint:"kwuh", combo:"Q + U",
        desc:"حرف Q في الإنجليزية يأتي دائماً تقريباً متبوعاً بحرف U — معاً يصنعان صوت /kw/.",
        compare:"مثل \u0022كو\u0022 سريعة في العربية",
        words:[{w:"queen",emoji:"👑",ar:"ملكة"},{w:"quick",emoji:"⚡",ar:"سريع"}]},
      {type:"note", title:"غير منتظم",
        desc:"في بعض الكلمات القادمة من الفرنسية، QUE في نهاية الكلمة تُنطق /k/ فقط، بدون /w/ إطلاقاً.",
        words:[{w:"unique",emoji:"💍",ar:"فريد"},{w:"queue",emoji:"🚶‍♂️",ar:"طابور"}]}
    ],
    quizSoundPool: ["/kw/","/k/"],
    quizItems: [
      {w:"queen",correct:"/kw/"},{w:"quick",correct:"/kw/"},
      {w:"unique",correct:"/k/",options:["/kw/","/k/"]},
      {w:"queue",correct:"/k/",options:["/kw/","/k/"]}
    ],
    dictationWords: ["queen","quick"],
    sentences: [
      {en:"The queen was quick to act.",ar:"كانت الملكة سريعة في التصرف."},
      {en:"Please be quiet.",ar:"من فضلك كن هادئاً."},
      {en:"This ring is unique.",ar:"هذا الخاتم فريد."},
      {en:"We stood in a queue.",ar:"وقفنا في طابور."}
    ],
    nextLetter: "r"
  },

  r: {
    chip: "Rr",
    subScreens: [
      {type:"pattern", ipa:"/r/", soundHint:"rrr", combo:null,
        desc:"الصوت الأساسي لحرف R — حرف منتظم جداً بلا استثناءات شائعة.",
        compare:"مثل حرف ر في العربية تقريباً، لكن أقل اهتزازاً",
        words:[{w:"rabbit",emoji:"🐰",ar:"أرنب"},{w:"red",emoji:"🔴",ar:"أحمر"},{w:"rain",emoji:"🌧️",ar:"مطر"}]}
    ],
    quizSoundPool: ["/r/","/l/","/w/"],
    quizItems: [
      {w:"rabbit",correct:"/r/"},{w:"red",correct:"/r/"},{w:"rain",correct:"/r/"}
    ],
    dictationWords: ["red","rain"],
    sentences: [
      {en:"I saw a rabbit.",ar:"رأيتُ أرنباً."},
      {en:"It started to rain.",ar:"بدأ المطر."},
      {en:"She painted it red.",ar:"طلته باللون الأحمر."}
    ],
    nextLetter: "s"
  },

  s: {
    chip: "Ss",
    subScreens: [
      {type:"pattern", ipa:"/s/", soundHint:"sss", combo:null,
        desc:"الصوت الأساسي لحرف S.",
        compare:"مثل حرف س في العربية تقريباً",
        words:[{w:"sun",emoji:"☀️",ar:"شمس"},{w:"snake",emoji:"🐍",ar:"ثعبان"}]},
      {type:"pattern", ipa:"/z/", soundHint:"zzz", combo:null,
        desc:"أحياناً يُنطق S كصوت Z — خاصة في نهاية كلمات بعد صوت مجهور.",
        words:[{w:"is",ar:"يكون (فعل الكينونة)"},{w:"his",ar:"له (ملكية)"}]},
      {type:"pattern", ipa:"/ʃ/", soundHint:"sh", combo:"S + H",
        desc:"عندما يأتي بعد S حرف H معاً — صوت مختلف تماماً.",
        words:[{w:"ship",emoji:"🚢",ar:"سفينة"},{w:"shoe",emoji:"👞",ar:"حذاء"}]},
      {type:"pattern", ipa:"/ʒ/", soundHint:"juh", combo:null,
        desc:"نفس صوت SH تماماً، لكن مع اهتزاز الحبال الصوتية — يظهر عادة في وسط الكلمة، خاصة قبل i أو u.",
        compare:"مثل /ʃ/ لكن مجهور — قارنه بصوت ژ",
        words:[{w:"television",emoji:"📺",ar:"تلفاز"},{w:"treasure",emoji:"💰",ar:"كنز"}]},
      {type:"note", title:"غير منتظم",
        desc:"في كلمتين شائعتين، حرف S يُنطق مثل SH رغم عدم وجود H مكتوبة!",
        words:[{w:"sugar",emoji:"🍬",ar:"سكر"},{w:"sure",emoji:"👍",ar:"متأكد"}]}
    ],
    quizSoundPool: ["/s/","/z/","/ʃ/","/ʒ/"],
    quizItems: [
      {w:"sun",correct:"/s/"},{w:"snake",correct:"/s/"},
      {w:"is",correct:"/z/",options:["/s/","/z/","/ʃ/"]},
      {w:"his",correct:"/z/",options:["/s/","/z/","/ʃ/"]},
      {w:"ship",correct:"/ʃ/"},{w:"shoe",correct:"/ʃ/"},
      {w:"television",correct:"/ʒ/",options:["/ʃ/","/ʒ/","/dʒ/"]},
      {w:"treasure",correct:"/ʒ/",options:["/ʃ/","/ʒ/","/dʒ/"]},
      {w:"sugar",correct:"/ʃ/",options:["/s/","/z/","/ʃ/"]},
      {w:"sure",correct:"/ʃ/",options:["/s/","/z/","/ʃ/"]}
    ],
    dictationWords: ["sun","ship"],
    sentences: [
      {en:"The sun is bright.",ar:"الشمس ساطعة."},
      {en:"His ship sailed away.",ar:"أبحرت سفينته بعيداً."},
      {en:"I wore my shoe.",ar:"لبستُ حذائي."},
      {en:"Please pass the sugar.",ar:"من فضلك مرّر السكر."},
      {en:"Are you sure?",ar:"هل أنت متأكد؟"},
      {en:"We watched television and found a treasure map.",ar:"شاهدنا التلفاز ووجدنا خريطة كنز."}
    ],
    nextLetter: "t"
  },

  t: {
    chip: "Tt",
    subScreens: [
      {type:"pattern", ipa:"/t/", soundHint:"tuh", combo:null,
        desc:"الصوت الأساسي لحرف T.",
        compare:"مثل حرف ت في العربية تقريباً",
        words:[{w:"turtle",emoji:"🐢",ar:"سلحفاة"},{w:"top",emoji:"🔝",ar:"أعلى / قمة"}]},
      {type:"pattern", ipa:"/θ/", soundHint:"th", combo:"T + H",
        desc:"صوت TH بدون اهتزاز الحبال الصوتية — عندما يأتي بعد T حرف H في كلمات معينة.",
        words:[{w:"think",emoji:"🤔",ar:"يفكر"},{w:"three",emoji:"3️⃣",ar:"ثلاثة"}]},
      {type:"pattern", ipa:"/ð/", soundHint:"dh", combo:"T + H",
        desc:"نفس الحروف TH، لكن هذه المرة بصوت مهتز (تشعر باهتزاز في حلقك).",
        words:[{w:"this",emoji:"👉",ar:"هذا"},{w:"that",emoji:"☝️",ar:"ذلك"}]},
      {type:"note", title:"the — قاعدة خاصة",
        desc:"كلمة \u0022the\u0022 لها نطقان حسب الكلمة التالية لها — تماماً مثل قاعدة a/an: /ðə/ قبل صوت ساكن، و/ðiː/ قبل صوت متحرك.",
        words:[{w:"the book",ar:"/ðə/ — قبل صوت ساكن"},{w:"the apple",ar:"/ðiː/ — قبل صوت متحرك"}]},
      {type:"note", title:"T صامتة",
        desc:"في بعض الكلمات، خاصة قبل نهايات مثل -en أو -le، يصبح حرف T صامتاً تماماً.",
        words:[{w:"listen",emoji:"👂",ar:"يستمع"},{w:"castle",emoji:"🏰",ar:"قلعة"}]}
    ],
    quizSoundPool: ["/t/","/θ/","/ð/"],
    quizItems: [
      {w:"turtle",correct:"/t/"},{w:"top",correct:"/t/"},
      {w:"think",correct:"/θ/"},{w:"three",correct:"/θ/"},
      {w:"this",correct:"/ð/"},{w:"that",correct:"/ð/"},
      {w:"the book",correct:"/ðə/",options:["/ðə/","/ðiː/","/θiː/"]},
      {w:"the apple",correct:"/ðiː/",options:["/ðə/","/ðiː/","/θə/"]},
      {w:"listen",correct:"لا يُنطق",options:["/t/","لا يُنطق","/θ/"]},
      {w:"castle",correct:"لا يُنطق",options:["/t/","لا يُنطق","/ð/"]}
    ],
    dictationWords: ["turtle","top"],
    sentences: [
      {en:"The turtle sat on top of the rock.",ar:"جلست السلحفاة على قمة الصخرة."},
      {en:"I think about three things.",ar:"أفكر في ثلاثة أشياء."},
      {en:"This is that book.",ar:"هذا هو ذلك الكتاب."},
      {en:"Give me the book, not the apple.",ar:"أعطني الكتاب، وليس التفاحة."},
      {en:"Listen! We can see the castle from here.",ar:"استمع! يمكننا رؤية القلعة من هنا."}
    ],
    nextLetter: "u"
  },

  u: {
    chip: "Uu",
    subScreens: [
      {type:"pattern", ipa:"/ʌ/", soundHint:"uh", combo:null,
        desc:"صوت قصير — عندما يتبع الحرف U حرفٌ ساكن.",
        compare:"يشبه تقريباً الضمة القصيرة المفتوحة",
        words:[{w:"sun",emoji:"☀️",ar:"شمس"},{w:"cup",emoji:"☕",ar:"كوب"},{w:"umbrella",emoji:"☂️",ar:"مظلة"},{w:"up",emoji:"⬆️",ar:"للأعلى"}]},
      {type:"pattern", ipa:"/juː/", soundHint:"you", combo:"U ...E",
        desc:"صوت طويل — عندما تنتهي الكلمة بحرف ساكن ثم حرف e صامت.",
        compare:"يشبه \u0022يو\u0022 في العربية",
        words:[{w:"cube",emoji:"🧊",ar:"مكعب"},{w:"cute",emoji:"😊",ar:"لطيف"}]},
      {type:"pattern", ipa:"/ʊ/", soundHint:"uu", combo:null,
        desc:"صوت قصير مختلف — لا يتبع نمطاً ثابتاً واضحاً، لكنه شائع جداً في كلمات معينة.",
        compare:"يشبه تقريباً ضمة قصيرة جداً، أخف من صوت /uː/",
        words:[{w:"put",emoji:"✋",ar:"يضع"},{w:"full",emoji:"🍽️",ar:"ممتلئ"}]},
      {type:"note", title:"U صامتة بعد G أو Q",
        desc:"في بعض الكلمات، حرف U لا يُنطق أبداً بعد G أو Q.",
        words:[{w:"guitar",emoji:"🎸",ar:"جيتار"},{w:"guess",emoji:"🤔",ar:"يخمّن"}]}
    ],
    quizSoundPool: ["/ʌ/","/juː/","/ʊ/"],
    quizItems: [
      {w:"sun",correct:"/ʌ/"},{w:"cup",correct:"/ʌ/"},{w:"umbrella",correct:"/ʌ/"},{w:"up",correct:"/ʌ/"},{w:"cube",correct:"/juː/"},{w:"cute",correct:"/juː/"},
      {w:"put",correct:"/ʊ/"},{w:"full",correct:"/ʊ/"},
      {w:"guitar",correct:"لا يُنطق",options:["/juː/","لا يُنطق","/ʌ/"]},
      {w:"guess",correct:"لا يُنطق",options:["/juː/","لا يُنطق","/ʌ/"]}
    ],
    dictationWords: ["sun","cube"],
    sentences: [
      {en:"I drank from my cup in the sun.",ar:"شربتُ من كوبي في الشمس."},
      {en:"The cake looks cute.",ar:"تبدو الكعكة لطيفة."},
      {en:"Put the guitar down.",ar:"ضع الجيتار أرضاً."},
      {en:"I guess the glass is full.",ar:"أظن أن الكأس ممتلئ."}
    ],
    reviewAfter: "review-q-u",
    nextLetter: "v"
  },

  v: {
    chip: "Vv",
    subScreens: [
      {type:"pattern", ipa:"/v/", soundHint:"vvv", combo:null,
        desc:"الصوت الأساسي لحرف V — حرف منتظم جداً بلا استثناءات شائعة.",
        compare:"مثل حرف ف لكن مع اهتزاز الصوت",
        words:[{w:"van",emoji:"🚐",ar:"شاحنة صغيرة"},{w:"violin",emoji:"🎻",ar:"كمان"}]}
    ],
    quizSoundPool: ["/v/","/f/","/b/"],
    quizItems: [
      {w:"van",correct:"/v/"},{w:"violin",correct:"/v/"}
    ],
    dictationWords: ["van"],
    sentences: [
      {en:"I play the violin.",ar:"أعزف على الكمان."},
      {en:"The van is red.",ar:"الشاحنة حمراء."}
    ],
    nextLetter: "w"
  },

  w: {
    chip: "Ww",
    subScreens: [
      {type:"pattern", ipa:"/w/", soundHint:"wuh", combo:null,
        desc:"الصوت الأساسي لحرف W.",
        compare:"مثل الواو في العربية عندما تكون شبه صامتة",
        words:[{w:"window",emoji:"🪟",ar:"نافذة"},{w:"water",emoji:"💧",ar:"ماء"}]},
      {type:"pattern", ipa:"/w/", soundHint:"wuh", combo:"W + H",
        desc:"عندما يأتي بعد W حرف H معاً — الصوت يبقى قريباً من W العادية في معظم الكلمات.",
        words:[{w:"what",emoji:"❓",ar:"ماذا"},{w:"when",emoji:"⏰",ar:"متى"}]},
      {type:"note", title:"W صامتة قبل O",
        desc:"استثناء مهم: عندما يأتي WH قبل حرف O، يصبح W صامتاً تماماً — فقط H يُنطق!",
        words:[{w:"who",ar:"مَن"},{w:"whole",ar:"كامل"}]},
      {type:"note", title:"W صامتة قبل R",
        desc:"عندما يأتي حرف W في بداية الكلمة متبوعاً بحرف R، يصبح W صامتاً تماماً — لا يُنطق أبداً.",
        words:[{w:"write",emoji:"✍️",ar:"يكتب"},{w:"wrong",emoji:"❌",ar:"خطأ"}]}
    ],
    quizSoundPool: ["/w/","لا يُنطق","/h/"],
    quizItems: [
      {w:"window",correct:"/w/"},{w:"water",correct:"/w/"},{w:"what",correct:"/w/"},{w:"when",correct:"/w/"},
      {w:"who",correct:"لا يُنطق",options:["/w/","لا يُنطق","/h/"]},
      {w:"whole",correct:"لا يُنطق",options:["/w/","لا يُنطق","/h/"]},
      {w:"write",correct:"لا يُنطق",options:["/w/","لا يُنطق","/r/"]},
      {w:"wrong",correct:"لا يُنطق",options:["/w/","لا يُنطق","/r/"]}
    ],
    dictationWords: ["window","water"],
    sentences: [
      {en:"Open the window.",ar:"افتح النافذة."},
      {en:"I drank some water.",ar:"شربتُ بعض الماء."},
      {en:"What is your name?",ar:"ما اسمك؟"},
      {en:"Who is that?",ar:"من ذلك؟"},
      {en:"I ate the whole cake.",ar:"أكلتُ الكعكة كاملة."},
      {en:"I will write it down, so I don't get it wrong.",ar:"سأكتبها حتى لا أخطئ."}
    ],
    nextLetter: "x"
  },

  x: {
    chip: "Xx",
    subScreens: [
      {type:"pattern", ipa:"/ks/", soundHint:"ks", combo:null,
        desc:"الصوت الأكثر شيوعاً لحرف X — يظهر عادة في وسط أو نهاية الكلمة، ونادراً ما يبدأ بها كلمة إنجليزية أصيلة.",
        words:[{w:"box",emoji:"📦",ar:"صندوق"},{w:"fox",emoji:"🦊",ar:"ثعلب"}]},
      {type:"pattern", ipa:"/gz/", soundHint:"gz", combo:null,
        desc:"أحياناً يُنطق X بصوت مجهور /gz/ — عندما يأتي قبل مقطع منبور.",
        words:[{w:"exam",emoji:"📝",ar:"اختبار"},{w:"exact",emoji:"✅",ar:"دقيق / بالضبط"}]},
      {type:"pattern", ipa:"/ɛks/", soundHint:"eks", combo:null,
        desc:"عندما تبدأ الكلمة بحرف X متبوعاً بشرطة، يُنطق X تماماً مثل اسم الحرف نفسه.",
        words:[{w:"X-ray",emoji:"🩻",ar:"أشعة سينية"}]},
      {type:"note", title:"غير منتظم",
        desc:"في كلمات نادرة من أصل يوناني، X في بداية الكلمة تُنطق /z/.",
        words:[{w:"xylophone",emoji:"🎹",ar:"آلة الإكسيلوفون"}]}
    ],
    quizSoundPool: ["/ks/","/gz/","/z/","/ɛks/"],
    quizItems: [
      {w:"box",correct:"/ks/"},{w:"fox",correct:"/ks/"},{w:"exam",correct:"/gz/"},{w:"exact",correct:"/gz/"},
      {w:"X-ray",correct:"/ɛks/",options:["/ks/","/ɛks/","/z/"]},
      {w:"xylophone",correct:"/z/",options:["/ks/","/gz/","/z/"]}
    ],
    dictationWords: ["box","fox"],
    sentences: [
      {en:"I put it in the box.",ar:"وضعتُه في الصندوق."},
      {en:"The fox ran away.",ar:"هرب الثعلب."},
      {en:"I took an exam.",ar:"خضتُ اختباراً."},
      {en:"That is the exact answer.",ar:"هذه هي الإجابة الدقيقة بالضبط."},
      {en:"She played the xylophone.",ar:"عزفت على آلة الإكسيلوفون."}
    ],
    nextLetter: "y"
  },

  y: {
    chip: "Yy",
    subScreens: [
      {type:"pattern", ipa:"/j/", soundHint:"yuh", combo:null,
        desc:"عندما يأتي Y في بداية الكلمة، يعمل كحرف ساكن.",
        compare:"مثل الياء في العربية",
        words:[{w:"yes",emoji:"👍",ar:"نعم"},{w:"yellow",emoji:"🟡",ar:"أصفر"}]},
      {type:"pattern", ipa:"/i/", soundHint:"ee", combo:"Y (نهاية، مقاطع متعددة)",
        desc:"عندما يأتي Y في نهاية كلمة من عدة مقاطع، يعمل كحرف علة بصوت قصير قريب من E.",
        words:[{w:"happy",emoji:"😊",ar:"سعيد"},{w:"baby",emoji:"👶",ar:"طفل رضيع"}]},
      {type:"pattern", ipa:"/aɪ/", soundHint:"eye", combo:"Y (نهاية، مقطع واحد)",
        desc:"عندما يأتي Y في نهاية كلمة من مقطع واحد فقط، يعمل كحرف علة بصوت طويل.",
        words:[{w:"sky",emoji:"☁️",ar:"سماء"},{w:"cry",emoji:"😢",ar:"يبكي"}]}
    ],
    quizSoundPool: ["/j/","/i/","/aɪ/"],
    quizItems: [
      {w:"yes",correct:"/j/"},{w:"yellow",correct:"/j/"},{w:"happy",correct:"/i/"},{w:"baby",correct:"/i/"},
      {w:"sky",correct:"/aɪ/"},{w:"cry",correct:"/aɪ/"}
    ],
    dictationWords: ["yes","sky"],
    sentences: [
      {en:"Yes, I like yellow.",ar:"نعم، أحب اللون الأصفر."},
      {en:"The baby is happy.",ar:"الطفل الرضيع سعيد."},
      {en:"Look at the sky.",ar:"انظر إلى السماء."},
      {en:"Don't cry.",ar:"لا تبكِ."}
    ],
    nextLetter: "z"
  },

  z: {
    chip: "Zz",
    isEndOfAlphabet: true,
    reviewAfter: "review-v-z",
    subScreens: [
      {type:"pattern", ipa:"/z/", soundHint:"zzz", combo:null,
        desc:"الصوت الأساسي لحرف Z — حرف منتظم جداً بلا استثناءات شائعة.",
        compare:"مثل حرف ز في العربية تقريباً",
        words:[{w:"zebra",emoji:"🦓",ar:"حمار وحشي"},{w:"zero",emoji:"0️⃣",ar:"صفر"}]}
    ],
    quizSoundPool: ["/z/","/s/","/dʒ/"],
    quizItems: [
      {w:"zebra",correct:"/z/"},{w:"zero",correct:"/z/"}
    ],
    dictationWords: ["zebra","zero"],
    sentences: [
      {en:"The zebra has stripes.",ar:"لدى الحمار الوحشي خطوط."},
      {en:"The score was zero.",ar:"كانت النتيجة صفراً."}
    ],
    nextLetter: null
  }
};
