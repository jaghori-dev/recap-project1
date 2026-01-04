const cards = document.querySelectorAll('[data-js="card"]');

cards.forEach(card => {
  const toggleButton = card.querySelector('[data-js="toggle-answer"]');
  const answer = card.querySelector('[data-js="answer"]');
  const bookmarkButton = card.querySelector(".card__bookmark-button")
  const bookmarkIcon = card.querySelector(".card__bookmark-icon")

  if (toggleButton && answer) {
    toggleButton.addEventListener('click', () => {
      if (answer.className === "card__answer"){
        answer.classList.add("visible")
        toggleButton.textContent = "Hide Answer"
      } else {
        answer.classList.remove("visible")
        toggleButton.textContent = "Show Answer"
      }
    });
  }
  if (bookmarkButton && bookmarkIcon){
    bookmarkButton.addEventListener("click", () => {
    bookmarkIcon.classList.toggle("active")
  })
  }
});


const bodyElement = document.querySelector('[data-js="root"]');
const toggleTheme = document.querySelector('[data-js="lightmode"]');
if (toggleTheme && bodyElement) {
  toggleTheme.addEventListener("click", () => {
    bodyElement.classList.toggle("light");
  });
}