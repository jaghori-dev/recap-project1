const form = document.querySelector(".form")
const main = document.querySelector(".main")
const questionInput = document.querySelector(".form__input--question")
const answerInput = document.querySelector(".form__input--answer")
const questionCounter = document.querySelector("#counter-question")
const answerCounter = document.querySelector("#counter-answer")
// questionCounter.textContent = 150
// answerCounter.textContent = 150


form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const question = questionInput.value
    const answerIn = answerInput.value

    const article = document.createElement("article")
    article.className = "card"
    article.innerHTML = `
        <button
          class="card__bookmark-button"
          type="submit"
          title="Bookmark this question"
        >
          <i class="card__bookmark-icon fa fa-bookmark"></i>
        </button>`

    const pQuestion = document.createElement("p")
    pQuestion.className = "question__card"
    pQuestion.textContent = question
    article.append(pQuestion)

    const button = document.createElement("button")
    button.className = "card__toggle-answer-button"
    button.textContent = "Show Answer"
    article.append(button)

    const pAnswer = document.createElement("p")
    pAnswer.className = 'card__answer'
    pAnswer.textContent = answerIn

    const uList = document.createElement("ul")
    uList.classList = "card__options"
    uList.innerHTML = `
          <li class="card__option">A-answer</li>
          <li class="card__option">B-answer</li>
          <li class="card__option">C-answer</li>`

    article.append(uList)
    article.append(pAnswer)

    const toggleButton = article.querySelector(".card__toggle-answer-button");
    const answer = article.querySelector(".card__answer");
    const bookmarkButton = article.querySelector(".card__bookmark-button")
    const bookmarkIcon = article.querySelector(".card__bookmark-icon")

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
    main.append(article)

    // event.target.reset()
    // event.target.elements.question.focus()

})
questionInput.addEventListener("input", ()=> {
    questionCounter.textContent = (150 - questionInput.value.length )+ " characters left"
})
answerInput.addEventListener("input", ()=> {
    answerCounter.textContent = (150 - answerInput.value.length ) + " characters left"
})

