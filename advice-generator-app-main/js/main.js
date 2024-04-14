const button = document.getElementById("advice-button");
const adviceID = document.getElementById("advice-number");
const adviceText = document.getElementById("advice-text");

let myresponse;
async function updateAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let result = await response.json();

    adviceID.innerText = result.slip.id;
    adviceText.innerText = result.slip.advice;
}

button.addEventListener("click", () => {
    updateAdvice();
})