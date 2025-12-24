const form = document.querySelector(".form")
console.log(form)
const main = document.querySelector(".main")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    const question = event.target.elements.question.value
    const answer = event.target.elements.answer.value

    const article = document.createElement("article")
    article.className = "card"

    const pQuestion = document.createElement("p")
    pQuestion.classList.add("question__card")
    pQuestion.textContent = question
    article.append(pQuestion)

    const button = document.createElement("button")
    button.className = "card__toggle-answer-button"
    button.textContent = "Show / Hide answer"
    article.append(button)

    const pAnswer = document.createElement("p")
    pAnswer.classList.add('card__answer')
    pAnswer.textContent = answer
    article.append(pAnswer)
    main.append(article)

    // event.target.reset()
    // event.target.elements.question.focus()

})