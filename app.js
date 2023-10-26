const firstFactorElem = document.querySelector("#firstElem");
const secondFactorElem = document.getElementById("secondElem");
const result = document.querySelector("#result");
const btnCheckElem = document.getElementById("check");
let goodElem = document.getElementById("goodAnswer");
let badElem = document.getElementById("badAnswer");
let goodAnswers = +document.getElementById("goodAnswer");
let badAnswers = +document.getElementById("badAnswer");
let chances = 5;
let factor = 0;
let multiplier = 0;
let good = 0;
let bad = 0;

const changeAction = () => {
  factor = Math.floor(Math.random() * 10);
  multiplier = Math.floor(Math.random() * 10);
  firstFactorElem.textContent = factor;
  secondFactorElem.textContent = multiplier;
};

changeAction();

console.log(`${factor} ${multiplier}`);
const checkAnswer = () => {
  const resultof = factor * multiplier;
  answer = result.value;

  if (answer == factor * multiplier) {
    goodElem.textContent = "Good Answer!" + ` ${good + 1}x`;

    chances -= 1;
    good++;
  }

  if (answer != factor * multiplier) {
    badElem.textContent =
      "Bad answer! Good answer is: " + resultof + "!" + ` ${bad + 1}x`;
    chances -= 1;
    bad++;
  }

  if (chances === 0) {
    window.alert(
      "The game has ended" + ` Your asnwers: Good:${good}, Bad:${bad} `
    );
    changeAction();
    chances = 5;
    badElem.textContent = 0;
    goodElem.textContent = 0;
  }
  if (chances != 0) changeAction();

  console.log(answer + chances);
};

btnCheckElem.addEventListener("click", checkAnswer);
