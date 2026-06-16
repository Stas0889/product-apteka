const filterButtons = Array.from(document.querySelectorAll(".filter-button"));
const cards = Array.from(document.querySelectorAll(".organ-card"));
const searchInput = document.querySelector("#productSearch");
const visibleCount = document.querySelector("#visibleCount");

let activeFilter = "all";

function normalize(value) {
  return value.toLocaleLowerCase("ru-RU").trim();
}

function updateCards() {
  const query = normalize(searchInput.value);
  let count = 0;

  cards.forEach((card) => {
    const matchesFilter = activeFilter === "all" || card.dataset.area === activeFilter;
    const searchable = normalize(`${card.innerText} ${card.dataset.products || ""}`);
    const matchesSearch = query === "" || searchable.includes(query);
    const isVisible = matchesFilter && matchesSearch;

    card.classList.toggle("is-hidden", !isVisible);
    count += isVisible ? 1 : 0;
  });

  visibleCount.textContent = String(count);
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    updateCards();
  });
});

searchInput.addEventListener("input", updateCards);

updateCards();
