currentNumber = "";
previousNumber = "";
currentOperator = "";
updateOutput();
}

function handleNegative() {
  currentNumber = (-1 * Number(currentNumber)).toString();
  updateOutput();
}

function handlePercent() {
  currentNumber = (Number(currentNumber) / 100).toString();
  updateOutput();
}

const numbers = document.querySelectorAll(".number");
numbers.forEach(button => {
  button.addEventListener("click", handleNumber);
});

const operators = document.querySelectorAll(".operator");
operators.forEach(button => {
  button.addEventListener("click", handleOperator);
});

const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", handleEquals);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", handleClear);

const negativeButton = document.getElementById("negative");
negativeButton.addEventListener("click", handleNegative);

const percentButton = document.getElementById("percent");
percentButton.addEventListener("click", handlePercent);


