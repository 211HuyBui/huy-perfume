const quizForm = document.querySelector("#quiz-form");
const resultElement = document.querySelector("#result");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let score = 0;
  if (document.querySelector("input[name='question-1']:checked").value === "Paris") {
    score++;
  }
  if (document.querySelector("input[name='question-2']:checked").value === "Pacific") {
    score++;
  }
  if (document.querySelector("input[name='question-3']:checked").value === "Leonardo da Vinci") {
    score++;
  }

  resultElement.style.display = "block";

  let imgSrc;
  if (score === 3) {
    imgSrc = "https://www.rd.com/wp-content/uploads/2020/04/GettyImages-694542042-e1586274805503.jpg";
  } else if (score === 2) {
    imgSrc = "https://example.com/good.png";
  } else if (score === 1) {
    imgSrc = "https://example.com/average.png";
  } else {
    imgSrc = "https://example.com/bad.png";
  }

  resultElement.innerHTML = `Your score is ${score} out of 3. <br><br><img src="${imgSrc}" alt="Quiz result">`;
});