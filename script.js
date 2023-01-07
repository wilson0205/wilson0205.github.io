const output = document.getElementById("output");

let currentNumber = "";
let storedNumber = "";
let operation = "";

const clear = () => {
  currentNumber = "";
  storedNumber = "";
  operation = "";
  output.textContent = "0";
};

const negative = () => {
  currentNumber = currentNumber.charAt(0) === "-" ? currentNumber.substr(1) : `-${currentNumber}`;
  output.textContent = currentNumber;
};

const percent = () => {
  currentNumber = String(parseFloat(currentNumber) / 100);
  output.textContent = currentNumber;
};

const performOperation = () => {
  storedNumber = parseFloat(storedNumber);
  currentNumber = parseFloat(currentNumber);
  if (operation === "+") {
    currentNumber = storedNumber + currentNumber;
  } else if (operation === "-") {
    currentNumber = storedNumber - currentNumber;
  } else if (operation === "x") {
    currentNumber = storedNumber * currentNumber;
  } else if (operation === "÷") {
    currentNumber = storedNumber / currentNumber;
  }
  storedNumber = "";
  operation = "";
  output.textContent = currentNumber;
};

const addNumber = (number) => {
  if (currentNumber.length > 10) {
    return;
  }
  currentNumber += number;
  output.textContent = currentNumber;
};

const setOperation = (newOperation) => {
  if (storedNumber === "" || operation === "") {
    storedNumber = currentNumber;
    currentNumber = "";
    operation = newOperation;
    return;
  }
  performOperation();
  operation = newOperation;
};

const equals = () => {
  if (storedNumber === "" || operation === "" || currentNumber === "") {
    return;
  }
  performOperation();
};

document.getElementById("clear").addEventListener("click", clear);
document.getElementById("negative").addEventListener("click", negative);
document.getElementById("percent").addEventListener("click", percent);
document.getElementById("divide").addEventListener("click", () => setOperation("÷"));
document.getElementById("seven").addEventListener("click", () => addNumber("7"));
document.getElementById("eight").addEventListener("click", () => addNumber("8"));
document.getElementById("nine").addEventListener("click", () => addNumber("9"));
document.getElementById("multiply").addEventListener("click", () => setOperation("x"));
document.getElementById("four").addEventListener("click", () => addNumber("4"));
document.getElementById("five").addEventListener("click", () => addNumber("5"));
document.getElementById("six").addEventListener("click", () => addNumber("6"));
document.getElementById("subtract").addEventListener("click", () => setOperation("-"));
document.getElementById("one").addEventListener("click", () => addNumber("1"));
document.getElementById("two").addEventListener("click", () => addNumber("2"));
document.getElementById("three").addEventListener("click", () => addNumber("3"));
document.getElementById("add").addEventListener("click", () => setOperation("+"));
document.getElementById("zero").addEventListener("click", () => addNumber("0"));
document.getElementById("decimal").addEventListener("click", () => addNumber("."));
document.getElementById("equals").addEventListener("click", equals);




