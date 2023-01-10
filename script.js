function calculateResult(equation) {
    try {
        let timesAndDivide = /(\-?\d+\.?\d*)([\/\*])(\-?\d+\.?\d*)/;
        let match;
        while (match = equation.match(timesAndDivide)) {
            let left = match[1], operator = match[2], right = match[3];
            let newVal = operator === "*" ? left * right : left / right;
            equation = equation.replace(match[0], newVal);
        }
        let plusAndMinus = /((?<!\d|\.)\-?\d+\.?\d*)([+\-])(\-?\d+\.?\d*)/;
        while (match = equation.match(plusAndMinus)) {
            let left = match[1], operator = match[2], right = match[3];
            let newVal = operator === "+" ? +left + +right : +left - +right;
            equation = equation.replace(match[0], newVal);
        }
        return equation;
    } catch(error) {
        console.log("Error: ", error);
    }
}
 display = document.querySelector("#display");
const keypad = document.querySelector(".keypad");

let equation = "";

keypad.addEventListener("click", (event) => {
  const value = event.target.value;

  if (value === "clear") {
    equation = "";
    display.textContent = equation;
  } else if (value === "=") {
    equation = equation.replace("=", "");
    equation = equation.replace("x", "*");
    equation = equation.replace("÷", "/");
    equation = equation.replace("%", "/100");
    display.textContent = `${equation} = ${calculateResult(equation)}`;
    equation = "";
  } else if(value === "+/-"){
    if (equation.length === 0) {
      equation = "-";
    } else if (isNaN(equation[equation.length - 1]) && equation[equation.length - 1] !== ".") {
      equation += "-";
    } else {
      const newEquation = equation.split(" ");
      newEquation[newEquation.length - 1] = -1 * newEquation[newEquation.length - 1];
      equation = newEquation.join(" ");
    }
    display.textContent = equation;
  } else {
    equation += value;
    display.textContent = equation;
  }
});

function calculateResult(equation) {
  try {
    return eval(equation);
  } catch (error) {
    console.log("Error: ", error);
  }
}


function calculateResult(equation) {
    let timesAndDivide = /(\-?\d+\.?\d*)([\/\*])(\-?\d+\.?\d*)/;
    let match;
    while (match = equation.match(timesAndDivide)) {
        let left = match[1], operator = match[2], right = match[3];
        let newVal = operator === "*" ? left * right : left / right;
        equation = equation.replace(match[0], newVal);
    }
    let plusAndMinus = /((?<!\d|\.)\-?\d+\.?\d*)([+\-])(\-?\d+\.?\d*)/;
    while (match = equation.match(plusAndMinus)) {
        let left = match[1], operator = match[2], right = match[3];
        let newVal = operator === "+" ? +left + +right : +left - +right;
        equation = equation.replace(match[0], newVal);
    }
    return equation;
}
