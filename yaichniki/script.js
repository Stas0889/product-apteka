// Пошаговый квиз с автоматическим подсчётом результата.
const questions = [
  "Цикл сдвинулся более чем на 3-5 дней от привычного ритма — в любую сторону?",
  "Пропадали ли явные признаки овуляции (изменение выделений, лёгкая тянущая боль) в последние месяцы?",
  "ПМС ощущается острее эмоционально или физически, чем 3-5 лет назад?",
  "Изменилась форма живота — стал более “гормональным”, округлым в центре, без изменения питания?",
  "Энергия резко проседает во второй половине дня, хотя раньше держалась ровно?",
  "Появилась непереносимость жары/холода, которой не было раньше?",
  "Сон стал более поверхностным, прерывистым, с ранними пробуждениями?",
  "Кожа лица потеряла упругость или стала более тусклой за последний год?",
  "Забывчивость или “туман в голове” стали чаще?",
  "Настроение меняется резко, без внешнего повода?"
];

const results = [
  { min: 0, max: 3, score: "0–3 «да»", text: "Яичники пока работают в своём естественном темпе — но именно сейчас профилактика даёт максимальный эффект" },
  { min: 4, max: 7, score: "4–7 «да»", text: "Яичники уже вошли в фазу перестройки — тело подаёт чёткие сигналы, важно их услышать сейчас" },
  { min: 8, max: 10, score: "8–10 «да»", text: "Активная фаза перехода — яичники значительно замедлили работу, и организму нужна целенаправленная поддержка" }
];

const quiz = document.querySelector("#quiz");
let answers = [];

function renderQuiz() {
  const current = answers.length;
  if (current === questions.length) {
    const yesCount = answers.filter(Boolean).length;
    const result = results.find(item => yesCount >= item.min && yesCount <= item.max);
    quiz.innerHTML = `<div class="quiz-result"><p class="eyebrow">Ваш результат</p><strong>${result.score}</strong><p>${result.text}</p><p class="quiz-score">Ответов «да»: ${yesCount} из ${questions.length}</p><button type="button" data-restart>Пройти тест ещё раз</button></div>`;
    quiz.querySelector("[data-restart]").addEventListener("click", () => { answers = []; renderQuiz(); });
    return;
  }

  const progress = ((current + 1) / questions.length) * 100;
  quiz.innerHTML = `<div class="quiz-progress-row"><span>Вопрос ${current + 1} из ${questions.length}</span><span>${Math.round(progress)}%</span></div><div class="quiz-progress" aria-hidden="true"><span style="width:${progress}%"></span></div><p class="quiz-question">${questions[current]}</p><div class="quiz-actions"><button type="button" data-answer="yes">Да</button><button type="button" data-answer="no">Нет</button></div><button class="quiz-back" type="button" data-back ${current === 0 ? "disabled" : ""}>← Назад</button>`;
  quiz.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => { answers.push(button.dataset.answer === "yes"); renderQuiz(); }));
  quiz.querySelector("[data-back]").addEventListener("click", () => { answers.pop(); renderQuiz(); });
}

renderQuiz();
