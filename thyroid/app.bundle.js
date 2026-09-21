/* Generated from config.js, questions.js, scoring.js and script.js by npm run build. */

(() => {

"use strict";

const CONFIG = {
  bothelpBaseUrl: "https://r.bothelp.io/tg?domain=UrbanQueenBot&start=c1789977105037-ds",
  bothelpVersion: "v1",
  dev: true
};


const QUESTIONS = [
  {
    id: "Q1",
    text: "Ваш вес за последний год заметно изменился, хотя вы не можете объяснить это изменениями в питании или образе жизни?\n\nПричём важно в обе стороны: вы неожиданно набрали вес или неожиданно похудели.",
    answers: [
      { label: "ДА, ВЕС УВЕЛИЧИЛСЯ", value: "gain" },
      { label: "ДА, ВЕС СНИЗИЛСЯ", value: "loss" },
      { label: "НЕТ", value: "no" }
    ]
  },
  {
    id: "Q2",
    text: "Вам приходится есть заметно меньше, чем раньше, просто чтобы удерживать привычный вес?\n\nИли наоборот — аппетит вырос, вы едите больше обычного, но вес при этом не растёт или даже снижается?",
    answers: [
      { label: "ДА, ПРИХОДИТСЯ ЕСТЬ МЕНЬШЕ, ЧТОБЫ УДЕРЖИВАТЬ ВЕС", value: "less_food" },
      { label: "ДА, АППЕТИТ ВЫРОС, НО ВЕС НЕ РАСТЁТ ИЛИ СНИЖАЕТСЯ", value: "more_food" },
      { label: "НЕТ", value: "no" }
    ]
  },
  {
    id: "Q3",
    text: "Вы стали человеком, которому постоянно холодно, когда окружающим нормально?\n\nИли наоборот: вам жарко, душно и вы потеете там, где остальные чувствуют себя совершенно комфортно?",
    answers: [
      { label: "ДА, МНЕ ЧАЩЕ ХОЛОДНО", value: "cold" },
      { label: "ДА, МНЕ ЧАЩЕ ЖАРКО / Я СИЛЬНЕЕ ПОТЕЮ", value: "hot" },
      { label: "НЕТ", value: "no" }
    ]
  },
  {
    id: "Q4",
    text: "Посмотрите на своё лицо утром.\n\nОно стало заметно более отёчным, особенно вокруг глаз, хотя накануне вы не ели ничего необычного?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q5",
    text: "Ваши волосы не просто стали выпадать — они вообще изменились?\n\nСтали суше, тоньше, ломче, потеряли прежнюю плотность или начали выпадать совсем иначе, чем раньше?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q6",
    text: "Ваш кишечник словно поменял скорость?\n\nСтул стал заметно реже, кишечник будто «ленится» —\n\nили наоборот: стул участился без очевидных изменений в питании?",
    answers: [
      { label: "СТУЛ СТАЛ ЗАМЕТНО РЕЖЕ", value: "slower" },
      { label: "СТУЛ ЗАМЕТНО УЧАСТИЛСЯ", value: "faster" },
      { label: "НЕТ", value: "no" }
    ]
  },
  {
    id: "Q7",
    text: "Бывает ли, что вы совершенно спокойно сидите или лежите, а сердце вдруг ощущается так, будто вы только что быстро поднялись по лестнице?\n\nБьётся быстро, сильно или непривычно неровно?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q8",
    text: "Или наоборот:\n\nвы замечали непривычно медленный пульс одновременно с вялостью, зябкостью и ощущением, будто весь организм стал работать медленнее?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q9",
    text: "Вы можете проспать нормальное количество часов, но утром первое ощущение:\n\n«Я вообще не восстановилась»?\n\nИ даже после сна телу требуется время, чтобы буквально «запуститься»?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q10",
    text: "Привычная физическая нагрузка стала ощущаться иначе?\n\nЛестница, тренировка, долгая прогулка — мышцы словно заканчиваются раньше вас, хотя раньше эта нагрузка была обычной?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q11",
    text: "Замечали ли вы мелкую дрожь в пальцах?\n\nНапример, когда держите телефон, чашку, лист бумаги или просто вытягиваете руки перед собой?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q12",
    text: "У вас появилось странное состояние:\n\nтело устало, а внутри невозможно выключиться?\n\nРаздражительность, внутреннее напряжение, сердцебиение, трудности с расслаблением или сном.",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q13",
    text: "Или произошло обратное: вы стали медленнее соображать, вам сложнее концентрироваться, вы стали забывать обычные вещи или иногда буквально искать знакомое слово?\n\nКак будто между вами и окружающим миром появилась лёгкая «вата».",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q14",
    text: "Ваш менструальный цикл изменился примерно в тот же период, когда начали меняться вес, энергия, волосы, кишечник или переносимость холода/жары?",
    answers: [
      { label: "ДА", value: "yes" },
      { label: "НЕТ", value: "no" },
      { label: "НЕ МОГУ ОЦЕНИТЬ", value: "unknown" }
    ]
  },
  {
    id: "Q15",
    text: "Обратите внимание на переднюю поверхность шеи.\n\nНе появилось ли в последнее время ощущение давления, полноты, «комка», непривычного дискомфорта при глотании или заметного изменения контуров шеи?",
    answers: [{ label: "ДА", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q16",
    text: "А теперь самый важный вопрос.\n\nЕсть ли у вас не один симптом, а сочетание нескольких изменений? Например: изменился вес, волосы или кожа, переносимость холода или жары, кишечник, энергия или работа сердца.",
    answers: [{ label: "ДА, СОВПАЛО НЕСКОЛЬКО", value: "yes" }, { label: "НЕТ", value: "no" }]
  },
  {
    id: "Q17",
    text: "Когда начались эти изменения, вы проверяли функцию щитовидной железы?\n\nИли разбирались с отдельными проявлениями — волосами, весом, отёками, кишечником, сердцебиением, тревожностью и усталостью — как будто это семь разных историй?",
    answers: [
      { label: "ПРОВЕРЯЛА", value: "checked" },
      { label: "НЕ ПРОВЕРЯЛА", value: "not_checked" },
      { label: "ПРОВЕРЯЛА ДАВНО", value: "long_ago" },
      { label: "НЕ ЗНАЮ, ЧТО ИМЕННО НУЖНО ПРОВЕРЯТЬ", value: "dont_know" }
    ]
  }
];


const SCORING_CONFIG = {
  lowMaxPositive: 2,
  minDirectedScore: 3,
  minProfileRate: 0.4,
  minDifference: 0.2
};

const SLOW_VALUES = new Set(["gain", "less_food", "cold", "slower"]);
const FAST_VALUES = new Set(["loss", "more_food", "hot", "faster"]);

function calculateProfile(answers = {}) {
  try {
    const slowScore = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q8", "Q9", "Q13"]
      .filter((id) => SLOW_VALUES.has(answers[id]) || (answers[id] === "yes" && ["Q4", "Q5", "Q8", "Q9", "Q13"].includes(id))).length;
    const fastScore = ["Q1", "Q2", "Q3", "Q6", "Q7", "Q11", "Q12"]
      .filter((id) => FAST_VALUES.has(answers[id]) || (answers[id] === "yes" && ["Q7", "Q11", "Q12"].includes(id))).length;
    const directedPositiveIds = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10", "Q11", "Q12", "Q13", "Q14", "Q15"];
    const totalPositive = directedPositiveIds.filter((id) => answers[id] === "yes" || (id === "Q14" && answers[id] === "yes") || (id === "Q1" && answers[id] !== "no" && answers[id] != null) || (id === "Q2" && answers[id] !== "no" && answers[id] != null) || (id === "Q3" && answers[id] !== "no" && answers[id] != null) || (id === "Q6" && answers[id] !== "no" && answers[id] != null)).length;
    const slowRate = slowScore / 9;
    const fastRate = fastScore / 7;
    const { lowMaxPositive, minDirectedScore, minProfileRate, minDifference } = SCORING_CONFIG;

    let profile = "mixed";
    if (totalPositive <= lowMaxPositive) {
      profile = "low";
    } else if (slowScore >= minDirectedScore && slowRate >= minProfileRate && slowRate - fastRate >= minDifference) {
      profile = "slowdown";
    } else if (fastScore >= minDirectedScore && fastRate >= minProfileRate && fastRate - slowRate >= minDifference) {
      profile = "acceleration";
    }

    return { profile, slowScore, fastScore, slowRate, fastRate, totalPositive };
  } catch (error) {
    console.warn("Не удалось вычислить профиль; используется технический fallback mixed.", error);
    return { profile: "mixed", slowScore: 0, fastScore: 0, slowRate: 0, fastRate: 0, totalPositive: 0 };
  }
}

const GROUPS = [
  { code: "weight", label: "Обмен веществ и вес", ids: ["Q1", "Q2"] },
  { code: "temperature", label: "Температура тела", ids: ["Q3"] },
  { code: "appearance", label: "Отёчность и волосы", ids: ["Q4", "Q5"] },
  { code: "gut", label: "Кишечник", ids: ["Q6"] },
  { code: "heart", label: "Сердце и пульс", ids: ["Q7", "Q8"] },
  { code: "energy", label: "Энергия и физическая нагрузка", ids: ["Q9", "Q10"] },
  { code: "neuro", label: "Нервная система и когнитивные изменения", ids: ["Q11", "Q12", "Q13"] },
  { code: "cycle", label: "Менструальный цикл", ids: ["Q14"] },
  { code: "neck", label: "Область шеи", ids: ["Q15"] }
];

function calculateGroups(answers = {}) {
  const ranked = GROUPS.map((group, index) => {
    const positiveCount = group.ids.filter((id) => {
      const value = answers[id];
      if (["Q1", "Q2", "Q3", "Q6"].includes(id)) return Boolean(value) && value !== "no";
      if (id === "Q14") return value === "yes";
      return value === "yes";
    }).length;
    return { code: group.code, label: group.label, positiveCount, totalCount: group.ids.length, rate: positiveCount / group.ids.length, index };
  })
    .filter((group) => group.positiveCount > 0)
    .sort((a, b) => b.rate - a.rate || a.index - b.index)
    .slice(0, 4);

  return {
    groups: ranked,
    groupsCodes: ranked.map((group) => group.code).join(","),
    groupsText: ranked.map((group, index) => `${String(index + 1).padStart(2, "0")} / ${group.label}`).join("\n")
  };
}

function buildBotHelpUrl({ profile, groupsCodes, groupsText, checked, totalPositive, utm = {}, baseUrl }) {
  if (!baseUrl || baseUrl === "PASTE_BOTHELP_URL_HERE") {
    throw new Error("BotHelp base URL is not configured. Set CONFIG.bothelpBaseUrl in config.js.");
  }
  const url = new URL(baseUrl);
  url.searchParams.set("thyroid_profile", profile);
  url.searchParams.set("thyroid_groups", groupsCodes);
  url.searchParams.set("thyroid_groups_text", groupsText);
  url.searchParams.set("thyroid_checked", checked);
  url.searchParams.set("thyroid_total", String(totalPositive));
  url.searchParams.set("thyroid_version", "v1");
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(utm, key)) url.searchParams.set(key, utm[key]);
  });
  return url.toString();
}

function captureUtm(search = "") {
  const params = new URLSearchParams(search);
  const utm = {};
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((key) => {
    if (params.has(key)) utm[key] = params.get(key) ?? "";
  });
  return utm;
}



const answers = {};
const utm = captureUtm(window.location.search);
let currentIndex = 0;
let resultPayload = null;
let advanceTimer = null;

const els = {
  intro: document.querySelector("#intro"),
  prelude: document.querySelector("#prelude"),
  quiz: document.querySelector("#quiz"),
  result: document.querySelector("#result"),
  disclaimer: document.querySelector("#disclaimer"),
  questionNumber: document.querySelector("#questionNumber"),
  progress: document.querySelector("#progress"),
  question: document.querySelector("#question"),
  answers: document.querySelector("#answers"),
  back: document.querySelector("#backButton"),
  next: document.querySelector("#nextButton"),
  start: document.querySelector("#startButton"),
  telegram: document.querySelector("#telegramButton"),
  error: document.querySelector("#configurationError")
};

function trackEvent(event) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event });
}

function renderQuestion() {
  const item = QUESTIONS[currentIndex];
  els.questionNumber.textContent = `ВОПРОС ${String(currentIndex + 1).padStart(2, "0")} / 17`;
  els.progress.style.width = `${((currentIndex + 1) / QUESTIONS.length) * 100}%`;
  els.question.textContent = item.text;
  els.answers.innerHTML = item.answers.map((answer, index) => `
    <label class="answer-option">
      <input type="radio" name="question" value="${answer.value}" ${answers[item.id] === answer.value ? "checked" : ""}>
      <span><b>${String(index + 1).padStart(2, "0")}</b>${answer.label}</span>
    </label>
  `).join("");
  els.back.disabled = currentIndex === 0;
  els.next.disabled = !answers[item.id];
  els.next.textContent = currentIndex === QUESTIONS.length - 1 ? "Завершить тест" : "Следующий вопрос";
}

function beginTest() {
  trackEvent("test_started");
  els.intro.hidden = true;
  els.prelude.hidden = false;
  els.quiz.hidden = false;
  renderQuestion();
  els.prelude.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showConfigurationError(message) {
  console.error(message);
  if (CONFIG.dev) {
    els.error.hidden = false;
    els.error.textContent = message;
  }
}

function completeTest() {
  const profile = calculateProfile(answers);
  const groups = calculateGroups(answers);
  const checked = answers.Q17;
  resultPayload = { profile: profile.profile, groupsCodes: groups.groupsCodes, groupsText: groups.groupsText, checked, totalPositive: profile.totalPositive };
  try {
    els.telegram.href = buildBotHelpUrl({ ...resultPayload, utm, baseUrl: CONFIG.bothelpBaseUrl });
  } catch (error) {
    showConfigurationError(error.message);
    els.telegram.removeAttribute("href");
  }
  trackEvent("test_completed");
  els.prelude.hidden = true;
  els.quiz.hidden = true;
  els.result.hidden = false;
  els.disclaimer.hidden = false;
  els.result.scrollIntoView({ behavior: "smooth", block: "start" });
}

function advanceQuestion() {
  if (!answers[QUESTIONS[currentIndex].id]) return;
  if (currentIndex === QUESTIONS.length - 1) {
    completeTest();
    return;
  }
  currentIndex += 1;
  renderQuestion();
  window.scrollTo({ top: els.quiz.offsetTop - 24, behavior: "smooth" });
}

els.start.addEventListener("click", beginTest);
els.answers.addEventListener("change", (event) => {
  if (event.target.name !== "question") return;
  answers[QUESTIONS[currentIndex].id] = event.target.value;
  els.next.disabled = false;
  clearTimeout(advanceTimer);
  advanceTimer = setTimeout(advanceQuestion, 180);
});
els.back.addEventListener("click", () => {
  if (currentIndex === 0) return;
  clearTimeout(advanceTimer);
  currentIndex -= 1;
  renderQuestion();
});
els.next.addEventListener("click", () => {
  clearTimeout(advanceTimer);
  advanceQuestion();
});
els.telegram.addEventListener("click", (event) => {
  if (!resultPayload || !els.telegram.href || els.telegram.getAttribute("href") === "#") {
    event.preventDefault();
    showConfigurationError("BotHelp URL ещё не настроен. Укажите ссылку в config.js.");
    return;
  }
  trackEvent("telegram_clicked");
});


})();

