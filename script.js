const output = document.getElementById("output");
let currentNumber = "0";
let storedNumber = "0";
let operation = null;

const updateOutput = () => {
  output.textContent = currentNumber;
};

const clear = () => {
  currentNumber = "0";
  storedNumber = "0";
  operation = null;
  updateOutput();
};

const setOperation = (newOperation) => {
  if (operation) {
    operate();
  }
  operation = newOperation;
  storedNumber = currentNumber;
  currentNumber = "0";
};

const operate = () => {
  let result;
  const storedNum = parseFloat(storedNumber);
  const currentNum = parseFloat(currentNumber);
  switch (operation) {
    case "+":
      result = storedNum + currentNum;
      break;
    case "-":
      result = storedNum - currentNum;
      break;
    case "x":
      result = storedNum * currentNum;
      break;
    case "÷":
      result = storedNum / currentNum;
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  operation = null;
  storedNumber = "0";
};

document.getElementById("clear").addEventListener("click", clear);

document.getElementById("negative").addEventListener("click", () => {
  if (currentNumber === "0") {
    return;
  }
  currentNumber = currentNumber.charAt(0) === "-" ? currentNumber.substr(1) : `-${currentNumber}`;
  updateOutput();
});

document.getElementById("percent").addEventListener("click", () => {
  if (currentNumber === "0") {
    return;
  }
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  updateOutput();
});

document.getElementById("divide").addEventListener("click", () => {
  setOperation("÷");
});

document.getElementById("seven").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "7" : currentNumber + "7";
  updateOutput();
});

document.getElementById("eight").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "8" : currentNumber + "8";
  updateOutput();
});

document.getElementById("nine").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "9" : currentNumber + "9";
  updateOutput();
});

document.getElementById("multiply").addEventListener("click", () => {
  setOperation("x");
});

document.getElementById("four").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "4" : currentNumber + "4";
  updateOutput();
});

document.getElementById("five").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "5" : currentNumber + "5";
  updateOutput();
});

document.getElementById("six").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "6" : currentNumber + "6";
  updateOutput();
});

document.getElementById("subtract").addEventListener("click", () => {
  setOperation("-");
});

document.getElementById("one").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "1" : currentNumber + "1";
  updateOutput();
});

document.getElementById("two").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "2" : currentNumber + "2";
  updateOutput();
});

document.getElementById("three").addEventListener("click", () => {
  currentNumber = currentNumber === "0" ? "3" : currentNumber + "3";
  updateOutput();
});

document.getElementById("add").addEventListener("click", () => {
  setOperation("+");
});

document.getElementById("zero").addEventListener("click", () => {
  if (currentNumber === "0") {
    return;
  }
  currentNumber = currentNumber === "0" ? "0" : currentNumber + "0";
  updateOutput();
});

document.getElementById("decimal").addEventListener("click", () => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber = currentNumber === "0" ? "." : currentNumber + ".";
  updateOutput();
});

document.getElementById("equals").addEventListener("click", () => {
  operate();
  updateOutput();
});



