const questionGroups = [
  {
    title: "Цикл и репродуктивная система",
    questions: [
      "Стал ли цикл менее предсказуемым — то короче, то длиннее, чем обычно?",
      "Изменилась обильность выделений — стали заметно обильнее или, наоборот, скуднее?",
      "ПМС стал ощущаться острее, чем несколько лет назад — эмоционально или физически?",
      "Заметили ли новую болезненность или чувствительность груди в определённые дни цикла?",
      "Бывают ли межменструальные кровянистые выделения, которых раньше не было?",
      "Цикл отсутствует уже больше 3, 6 или 12 месяцев?"
    ]
  },
  { title: "Сон и энергия", questions: ["Просыпаетесь ли вы среди ночи без явной причины, особенно в одно и то же время?", "Ощущаете упадок сил даже после полноценного сна?"] },
  {
    title: "Кожа, вес, волосы",
    questions: [
      "Заметили изменение веса именно в области талии, без изменения питания?",
      "Кожа стала суше или потеряла упругость за последний год?",
      "Замечали ли, что кожа на локтях, коленях стала более тонкой на ощупь?",
      "Появились новые высыпания на подбородке или линии челюсти, которых раньше не было?",
      "Выпадение волос усилилось, или волосы стали более тонкими?"
    ]
  },
  { title: "Настроение", questions: ["Раздражительность или тревожность появляются «из ниоткуда»?", "Замечали необъяснимую тревогу именно в момент засыпания?", "Бывают резкие перепады настроения без внешнего повода?"] },
  { title: "Терморегуляция", questions: ["Бывают приливы жара или ночная потливость?", "Мёрзнете чаще, чем раньше, даже в тёплую погоду?"] },
  {
    title: "Необычные телесные сигналы",
    questions: [
      "Замечали ли, что кольцо на пальце стало жать беспричинно, в определённые дни?",
      "Бывает ли металлический или горьковатый привкус во рту без видимой причины?",
      "Замечали ли, что дёсны стали чувствительнее — кровоточат при чистке чаще?",
      "Появился ли эпизодический звон или шум в ушах, особенно вечером?",
      "Бывает ли чувство «внутренней дрожи» — не видимое снаружи, но ощутимое изнутри?",
      "Изменился ли вкус привычной еды — то, что нравилось, стало казаться слишком сладким?"
    ]
  },
  { title: "Либидо и интимное здоровье", questions: ["Заметили снижение либидо или изменение возбудимости?", "Появилась сухость слизистых, которой не было раньше?"] },
  { title: "Память и концентрация", questions: ["Стало сложнее концентрироваться или ощущается «туман в голове»?"] },
  { title: "Суставы", questions: ["Появились боли в суставах или скованность без видимой причины/травмы?"] }
];

const results = [
  {
    min: 0, max: 7,
    title: "0–7 баллов — «Тихая гостья»",
    body: [
      "Ваше тело только начинает подавать первые лёгкие сигналы — почти незаметные, скорее любопытные, чем тревожные. Кольцо, которое иногда сидит чуть иначе. Сон, который стал немного тоньше. Настроение, которое иногда меняется без явной причины.",
      "Если вам до 40 — это особенно ценная информация: вы узнаёте о теме заранее, когда легче всего мягко всё скорректировать. Если вам за 45 — это может быть началом более активной фазы, за которой стоит понаблюдать внимательнее.",
      "Это прекрасный момент — не для беспокойства, а для внимательности. Именно сейчас, пока сигналов немного, легче всего мягко настроить своё тело так, чтобы следующие годы прошли гладко и плавно, без резких перепадов.",
      "Вы одна из немногих женщин, кто узнаёт об этом заранее — большинство начинают интересоваться этой темой значительно позже. У вас есть время, и это ценный ресурс."
    ],
    steps: [
      "Начните замечать, в какие дни цикла появляются эти лёгкие сигналы — просто фиксируйте в заметках телефона, без анализа",
      "Добавьте в вечерний рацион продукт с магнием (например, тыквенные семечки) — это мягко поддерживает нервную систему в этот период"
    ],
    videoText: "Я записала видео с ещё 5 конкретными шагами именно для вашего результата — и рассказала, как устроено пространство поддержки для таких моментов, и куда прийти, чтобы разобраться глубже. Всего 5 минут, но эти шаги реально помогают начать заботиться о себе до того, как сигналы станут громче. Смотрите 👇",
    videoUrl: "https://player.vimeo.com/video/1213495538"
  },
  {
    min: 8, max: 14,
    title: "8–14 баллов — «Начало разговора»",
    body: [
      "Ваше тело уже вступило в диалог с вами — цикл ведёт себя чуть иначе, настроение колеблется, появляются новые, непривычные ощущения. Это естественная часть пути, через который проходит каждая женщина — просто вы уже начали его замечать.",
      "В любом возрасте это хороший момент для начала диалога с телом — но чем раньше вы его начнёте, тем мягче пройдёт дальнейший путь.",
      "Хорошая новость: как только отдельные симптомы складываются в понятную картину, они перестают быть загадкой. Вы начинаете видеть логику там, где раньше казался хаос — а это уже половина победы.",
      "Это отличное время, чтобы начать поддерживать своё тело осознанно — не ждать, пока изменения станут заметнее, а действовать сейчас, пока процесс мягкий и управляемый."
    ],
    steps: [
      "Обратите внимание на количество и качество сна за последнюю неделю — часто именно здесь скрыт первый рычаг влияния",
      "Попробуйте одну простую практику вечером — 5 минут глубокого дыхания перед сном, это напрямую влияет на гормональный фон через снижение кортизола"
    ],
    videoText: "В видео я подробно разбираю ещё 5 шагов, которые помогают именно на этой стадии — а ещё показываю, куда прийти, если хочется идти дальше не в одиночку. Всего 5 минут, но информация действительно рабочая — смотрите 👇",
    videoUrl: "https://player.vimeo.com/video/1213496706"
  },
  {
    min: 15, max: 21,
    title: "15–21 баллов — «Время трансформации»",
    body: [
      "Ваше тело сейчас проходит через один из самых насыщенных и значимых периодов в жизни женщины. Приливы, изменения сна, новые ощущения в суставах, моменты рассеянности — всё это часть большого, естественного процесса перестройки.",
      "Если это происходит у вас раньше 45 — важно не откладывать разбор в долгий ящик. Если это ожидаемый для вашего возраста этап — тем более имеет смысл пройти его осознанно, а не вслепую.",
      "Важно, что вы это чувствуете и замечаете — это признак хорошего контакта с собственным телом, а не сигнал тревоги. Ваше тело не ломается — оно меняет конфигурацию, ищет новый способ работать.",
      "Этот путь гораздо приятнее проходить с пониманием происходящего и правильной поддержкой — так трансформация становится не испытанием, а осознанным этапом роста."
    ],
    steps: [
      "Начните вести дневник приливов/сна/настроения — это поможет увидеть закономерности и подобрать точечную поддержку, а не действовать вслепую",
      "Пересмотрите потребление кофеина после обеда — он усиливает приливы и нарушает сон именно на этом этапе"
    ],
    videoText: "Я подробно рассказала ещё 5 практических шагов в коротком видео — специально для этой стадии перестройки, и объяснила, где можно получить системную поддержку на этом пути. Это займёт всего 5 минут, но даст вам реальный план действий уже сегодня 👇",
    videoUrl: "https://player.vimeo.com/video/1213519608"
  },
  {
    min: 22, max: 28,
    title: "22–28 баллов — «Новая глава»",
    body: [
      "Самая насыщенная часть перестройки, скорее всего, уже пройдена. Ваше тело нашло — или активно находит — свой новый ритм и баланс. Это начало главы, которую многие женщины впоследствии называют самой свободной, ясной и сильной в своей жизни.",
      "Независимо от возраста, в котором вы к этому пришли, — сейчас особенно важно дать телу целенаправленную поддержку, а не просто «переждать».",
      "Сейчас особенно хорошее время, чтобы дать телу целенаправленную поддержку — для костей, суставов, кожи, сердца — чтобы прожить эту главу в полную силу, с энергией и хорошим самочувствием.",
      "Вы находитесь на этапе, который заслуживает не просто спокойного проживания, а настоящего расцвета — и это абсолютно достижимо."
    ],
    steps: [
      "Добавьте силовую нагрузку хотя бы 2 раза в неделю — это ключевой фактор поддержки костей и суставов в этой фазе",
      "Проверьте, достаточно ли в рационе кальция и витамина D — именно сейчас организм особенно в них нуждается"
    ],
    videoText: "В видео я делюсь ещё 5 конкретными шагами для поддержки тела в этой новой главе — и рассказываю, куда прийти за системной поддержкой дальше. Коротко, по делу, всего 5 минут. Обязательно смотрите 👇",
    videoUrl: "https://player.vimeo.com/video/1213520451"
  }
];

const ages = ["До 35", "35–40", "41–45", "46–50", "51–55", "Старше 55"];
const flatQuestions = [];
let counter = 0;
questionGroups.forEach((group) => group.questions.forEach((text) => flatQuestions.push({ number: ++counter, category: group.title, text })));

const answers = Array(28).fill(null);
let selectedAge = null;
let currentStep = 0;

const stage = document.getElementById("quizStage");
const stepType = document.getElementById("stepType");
const stepCategory = document.getElementById("stepCategory");
const questionCounter = document.getElementById("questionCounter");
const progressBar = document.getElementById("progressBar");
const answeredCount = document.getElementById("answeredCount");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");
const resultSection = document.getElementById("result");

function renderStep() {
  const isAgeStep = currentStep === 0;
  const answered = answers.filter(Boolean).length;
  answeredCount.textContent = String(answered);
  questionCounter.textContent = isAgeStep ? "0 / 28" : `${currentStep} / 28`;
  progressBar.style.width = `${(answered / 28) * 100}%`;
  backButton.disabled = currentStep === 0;

  if (isAgeStep) {
    stepType.textContent = "0. Немного о вас";
    stepCategory.textContent = "Сколько вам сейчас лет?";
    stage.innerHTML = `
      <div class="quiz-question">
        <span class="quiz-question__number">0. Немного о вас</span>
        <h3>Сколько вам сейчас лет?</h3>
        <p class="quiz-question__help">Этот ответ не влияет на баллы, но помогает точнее интерпретировать результат — одни и те же сигналы означают разное в 35 и в 50 лет.</p>
        <div class="answer-grid answer-grid--age">
          ${ages.map((age) => `<label class="answer-option"><input type="radio" name="age" value="${age}" ${selectedAge === age ? "checked" : ""}><span>${age}</span></label>`).join("")}
        </div>
      </div>`;
    nextButton.textContent = "Далее";
    nextButton.disabled = !selectedAge;
    return;
  }

  const question = flatQuestions[currentStep - 1];
  stepType.textContent = `Вопрос ${question.number}`;
  stepCategory.textContent = question.category;
  stage.innerHTML = `
    <div class="quiz-question">
      <span class="quiz-question__number">${question.category}</span>
      <h3>${question.text}</h3>
      <div class="answer-grid">
        <label class="answer-option"><input type="radio" name="answer" value="yes" ${answers[currentStep - 1] === "yes" ? "checked" : ""}><span>Да</span></label>
        <label class="answer-option"><input type="radio" name="answer" value="no" ${answers[currentStep - 1] === "no" ? "checked" : ""}><span>Нет</span></label>
      </div>
    </div>`;
  nextButton.textContent = currentStep === 28 ? "Узнать результат" : "Далее";
  nextButton.disabled = !answers[currentStep - 1];
}

stage.addEventListener("change", (event) => {
  if (event.target.name === "age") {
    selectedAge = event.target.value;
    nextButton.disabled = false;
  }
  if (event.target.name === "answer") {
    answers[currentStep - 1] = event.target.value;
    const answered = answers.filter(Boolean).length;
    answeredCount.textContent = String(answered);
    progressBar.style.width = `${(answered / 28) * 100}%`;
    nextButton.disabled = false;
  }
});

nextButton.addEventListener("click", () => {
  if (currentStep === 0 && !selectedAge) return;
  if (currentStep > 0 && !answers[currentStep - 1]) return;
  if (currentStep < 28) {
    currentStep += 1;
    renderStep();
    document.getElementById("quizApp").scrollIntoView({ behavior: "smooth", block: "center" });
  } else {
    showResult();
  }
});

backButton.addEventListener("click", () => {
  if (currentStep === 0) return;
  currentStep -= 1;
  renderStep();
});

function scoreWord(score) {
  const mod10 = score % 10;
  const mod100 = score % 100;
  if (mod10 === 1 && mod100 !== 11) return "балл";
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "балла";
  return "баллов";
}

function showResult() {
  const score = answers.filter((answer) => answer === "yes").length;
  const result = results.find((item) => score >= item.min && score <= item.max);
  if (!result) return;

  document.getElementById("resultScore").textContent = String(score);
  document.getElementById("scoreWord").textContent = scoreWord(score);
  document.getElementById("resultTitle").textContent = result.title;
  document.getElementById("resultBody").innerHTML = result.body.map((text) => `<p>${text}</p>`).join("");
  document.getElementById("resultSteps").innerHTML = result.steps.map((text) => `<p class="result-step">${text}</p>`).join("");
  const videoFrame = document.getElementById("resultVideoFrame");
  if (result.videoUrl) {
    videoFrame.hidden = false;
    videoFrame.innerHTML = `<iframe src="${result.videoUrl}" title="Видео пояснение к результату" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else {
    videoFrame.hidden = true;
    videoFrame.innerHTML = "";
  }

  resultSection.hidden = false;
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.getElementById("restartTest").addEventListener("click", () => {
  answers.fill(null);
  selectedAge = null;
  currentStep = 0;
  resultSection.hidden = true;
  renderStep();
  document.getElementById("test").scrollIntoView({ behavior: "smooth", block: "start" });
});

renderStep();


function initReviewsSlider() {
  const slider = document.getElementById("reviewsSlider");
  if (!slider) return;

  const track = slider.querySelector(".reviews-track");
  const cards = Array.from(track.querySelectorAll(".review-card"));
  const prev = slider.querySelector(".reviews-nav--prev");
  const next = slider.querySelector(".reviews-nav--next");
  const dotsWrap = document.getElementById("reviewsDots");

  let page = 0;
  let slidesPerView = 3;
  let totalPages = 1;

  function resolveSlidesPerView() {
    if (window.innerWidth <= 640) return 1;
    if (window.innerWidth <= 980) return 2;
    return 3;
  }

  function renderDots() {
    dotsWrap.innerHTML = "";
    for (let i = 0; i < totalPages; i += 1) {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "reviews-dot";
      dot.setAttribute("aria-label", `Перейти к отзывам ${i + 1}`);
      dot.addEventListener("click", () => {
        page = i;
        updateSlider();
      });
      dotsWrap.appendChild(dot);
    }
  }

  function updateSlider() {
    const firstCard = cards[0];
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const cardWidth = firstCard.getBoundingClientRect().width;
    const rawShift = page * (cardWidth + gap) * slidesPerView;
    const maxShift = Math.max(0, track.scrollWidth - slider.querySelector(".reviews-viewport").clientWidth);
    const shift = Math.min(rawShift, maxShift);
    track.style.transform = `translateX(-${shift}px)`;
    prev.disabled = page === 0;
    next.disabled = page >= totalPages - 1;
    [...dotsWrap.children].forEach((dot, index) => {
      dot.classList.toggle("is-active", index === page);
      dot.setAttribute("aria-current", index === page ? "true" : "false");
    });
  }

  function updateMetrics() {
    slidesPerView = resolveSlidesPerView();
    totalPages = Math.max(1, Math.ceil(cards.length / slidesPerView));
    if (page > totalPages - 1) page = totalPages - 1;
    renderDots();
    updateSlider();
  }

  prev.addEventListener("click", () => {
    if (page > 0) {
      page -= 1;
      updateSlider();
    }
  });

  next.addEventListener("click", () => {
    if (page < totalPages - 1) {
      page += 1;
      updateSlider();
    }
  });

  window.addEventListener("resize", updateMetrics);
  updateMetrics();
}

initReviewsSlider();
