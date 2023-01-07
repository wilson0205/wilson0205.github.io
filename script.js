const calculator = {
  display: document.querySelector("#display"),
  keys: document.querySelector(".keypad"),
  action: null,
  firstValue: null,
  operator: null,
  secondValue: null,
};

calculator.keys.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    const displayedNum = calculator.display.textContent;

    if (!action) {
      if (displayedNum === "0" || calculator.action === "clear") {
        calculator.display.textContent = keyContent;
      } else {
        calculator.display.textContent = displayedNum + keyContent;
      }
      calculator.action = null;
    }

    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      calculator.firstValue = displayedNum;
      calculator.operator = action;
      calculator.action = "operator";
    }

    if (action === "decimal") {
      if (!displayedNum.includes(".")) {
        calculator.display.textContent = displayedNum + ".";
      }
    }

    if (action === "clear") {
      calculator.display.textContent = "0";
      calculator.firstValue = null;
      calculator.operator = null;
      calculator.secondValue = null;
      calculator.action = "clear";
    }

    if (action === "calculate") {
      calculator.secondValue = displayedNum;
      const result = calculate(
        calculator.firstValue,
        calculator.operator,
        calculator.secondValue
      );
      calculator.display.textContent = result;
      calculator.firstValue = result;
      calculator.operator = null;
      calculator.secondValue = null;
      calculator.action = "clear";
    }
  }
});

const calculate = (firstValue, operator, secondValue) => {
  let result = "";
  if (operator === "add") {
    result = parseFloat(firstValue) + parseFloat(secondValue);
  } else if (operator === "subtract") {
    result = parseFloat(firstValue) - parseFloat(secondValue);
  } else if (operator === "multiply") {
    result = parseFloat(firstValue) * parseFloat(secondValue);
  } else if (operator === "divide") {
    result = parseFloat(firstValue) / parseFloat(secondValue);
  }
  return result;
};
