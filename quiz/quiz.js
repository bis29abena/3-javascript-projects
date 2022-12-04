const data = [
  {
    id: 1,
    question: "Which of these fish is actually a fish?",
    answers: [
      { answer: "swordfish", isCorrect: true },
      { answer: "jellyfish", isCorrect: false },
      { answer: "starfish", isCorrect: false },
      { answer: "crayfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "A flutter is a group of:",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: "A group of which animals is referred to as a wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
    ],
  },
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");

let qIndex = 0;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;
let selectedAnswers;

const playAgain = () => {
    qIndex = 0
    correctAnswersCount = 0
    wrongAnswersCount = 0
    showQuestion(qIndex)
}

play.addEventListener("click", () => {
    gameScreen.style.display = "block";
  resultScreen.style.display = "none";

  playAgain()
})

const showResult = () => {
  gameScreen.style.display = "none";
  resultScreen.style.display = "block";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Answers: ${correctAnswersCount}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Answers: ${wrongAnswersCount}`;
  resultScreen.querySelector(".score").textContent = `Total: ${
    Math.round((correctAnswersCount / data.length) * 100)
  }%`;
};

const showQuestion = (qNumber) => {
  if (qIndex === data.length) return showResult();
  selectedAnswers = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
            <input type="radio" name="answer" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
    </div>
    `
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  answersContainer.querySelectorAll("input").forEach((element) => {
    element.addEventListener("click", (e) => {
      selectedAnswers = e.target.value;
    });
  });
};

const submitAnswer = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswers !== null) {
      selectedAnswers === "true" ? correctAnswersCount++ : wrongAnswersCount++;
      qIndex++;
      showQuestion(qIndex);
    } else {
      alert("Select an Answer");
    }
  });
};

showQuestion(qIndex);
submitAnswer();
