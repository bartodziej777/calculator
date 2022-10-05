"use strict";
const btnNum = document.querySelectorAll(".calculator__btn-number");
const btnOperator = document.querySelectorAll(".calculator__btn-operator");
const btnProgram = document.querySelectorAll(".calculator__btn-program");
const btn = document.querySelectorAll(".calculator__btn");

const previousNumber = document.querySelector(".calculator__display-previous");
const currentNumber = document.querySelector(".calculator__display-current");
const operator = document.querySelector(".calculator__display-operator");

function displayNum() {
  if (this.innerHTML === "←") {
    if (currentNumber.innerHTML.length > 0) {
      currentNumber.innerHTML = currentNumber.innerHTML.substring(
        0,
        currentNumber.innerHTML.length - 1
      );
    }
    return;
  }
  if (this.innerHTML === "." && currentNumber.innerHTML.includes(".")) return;
  if (this.innerHTML === "." && currentNumber === "") {
    currentNumber.innerHTML = "0,";
    return;
  }

  currentNumber.innerHTML += this.innerHTML;
}
function setOperator() {
  if (this.innerHTML === "-" && currentNumber.innerHTML === "") {
    currentNumber.innerHTML = "-";
    return;
  }
  if (currentNumber === "") return;
  if (this.innerHTML !== "") {
    showResult();
  }
  operator.innerHTML = this.innerHTML;
}

function showResult() {
  if (currentNumber.innerHTML === "") return;
  if (currentNumber.innerHTML !== "" && previousNumber.innerHTML !== "") {
    let result = 0;

    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);

    switch (operator.innerHTML) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = b - a;
        break;
      case "x":
        result = a * b;
        break;
      case "/":
        result = b / a;
        break;
      case "%":
        result = (a * b) / 100;
        break;
    }
    console.log(result);

    previousNumber.innerHTML = result;
    currentNumber.innerHTML = "";
  } else if (currentNumber !== "") {
    previousNumber.innerHTML = currentNumber.innerHTML;
    currentNumber.innerHTML = "";
  }
}

function clear() {
  currentNumber.innerHTML = "";
}
function clearAll() {
  currentNumber.innerHTML = "";
  previousNumber.innerHTML = "";
  operator.innerHTML = "";
}

btnNum.forEach((btn) => btn.addEventListener("click", displayNum));
btnOperator.forEach((btn) => btn.addEventListener("click", setOperator));
btnProgram.forEach((btn) =>
  btn.addEventListener("click", function () {
    switch (this.innerHTML) {
      case "C":
        clear();
        break;
      case "CE":
        clearAll();
        break;
    }
  })
);
