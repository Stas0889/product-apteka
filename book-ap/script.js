const form = document.querySelector("#registration-form");
const message = document.querySelector("#form-message");
const registrationDialog = document.querySelector("#registration-dialog");
const registrationEmail = document.querySelector("#registration-email");
const registrationPreviewNote = document.querySelector("#registration-preview-note");

function showRegistrationConfirmation(email, { preview = false } = {}) {
  registrationEmail.textContent = email;
  registrationPreviewNote.hidden = !preview;
  registrationDialog.showModal();
  document.documentElement.classList.add("registration-dialog-open");
}

registrationDialog?.addEventListener("close", () => {
  document.documentElement.classList.remove("registration-dialog-open");
});

registrationDialog?.addEventListener("click", (event) => {
  if (event.target !== registrationDialog) return;
  const bounds = registrationDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    registrationDialog.close();
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    message.className = "form-message error";
    message.textContent = "Заполните имя, корректный email и подтвердите согласие.";
    return;
  }

  message.className = "form-message";
  message.textContent = "";
  // Replace this preview call with the confirmed GetCourse success handler when connected.
  showRegistrationConfirmation(form.elements.email.value.trim(), { preview: true });
});

const countdown = document.querySelector(".book-countdown");

if (countdown) {
  const duration = Number(countdown.dataset.countdownDuration) * 1000;
  const storageKey = "urban-queen-antiparasitic-book-countdown-v1";
  let deadline = Date.now() + duration;

  try {
    const savedDeadline = Number(localStorage.getItem(storageKey));
    if (Number.isFinite(savedDeadline) && savedDeadline > 0 && savedDeadline <= deadline) {
      deadline = savedDeadline;
    } else {
      localStorage.setItem(storageKey, String(deadline));
    }
  } catch {
    // Storage can be unavailable in private browsing; keep counting for this visit.
  }

  let countdownInterval;
  function updateCountdown() {
    const remainingSeconds = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
    const values = {
      days: Math.floor(remainingSeconds / 86400),
      hours: Math.floor((remainingSeconds % 86400) / 3600),
      minutes: Math.floor((remainingSeconds % 3600) / 60),
      seconds: remainingSeconds % 60,
    };

    for (const [unit, value] of Object.entries(values)) {
      countdown.querySelector(`[data-countdown="${unit}"]`).textContent = String(value).padStart(2, "0");
    }
    countdown.querySelector('[role="timer"]').setAttribute("aria-label", `Осталось: ${values.days} д., ${values.hours} ч., ${values.minutes} мин., ${values.seconds} сек.`);
    countdown.querySelector(".countdown-status").hidden = remainingSeconds !== 0;
    if (remainingSeconds === 0) clearInterval(countdownInterval);
    return remainingSeconds;
  }

  if (updateCountdown() > 0) countdownInterval = setInterval(updateCountdown, 1000);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) updateCountdown();
  });
}
