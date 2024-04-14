const ratingCard = document.querySelector("#rating-card");
const submitButton = document.querySelector("button");
const thanksCard = document.querySelector("#thanks-card");
const ratingSpan = document.querySelector("#selected-rating-value")

submitButton.addEventListener("click", () => {
    let rating = document.querySelector("input:checked").value
    ratingSpan.textContent = rating;

    ratingCard.classList.add('hide');
    thanksCard.classList.remove('hide')
})