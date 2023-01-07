// Get a reference to all the buttons
const buttons = document.querySelectorAll("#buttons button");

// Get a reference to the output element
const output = document.getElementById("output");

// Create a variable to store the current number
let currentNumber = "";

// Add an event listener for each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the text content of the button
    const value = button.textContent;

    // Check the value of the button
    if (value === "AC") {
      // Clear the current number and the output
      currentNumber = "";
      output.textContent = "";
    } else if (value === ".") {
      // Add a decimal point to the current number
      currentNumber += ".";
      output.textContent = currentNumber;
    } else if (value === "=") {
      // Evaluate the current number as an expression and output the result
      output.textContent = eval(currentNumber);
    } else {
      // Add the value of the button to the current number
      currentNumber += value;
      output.textContent = currentNumber;
    }
  });
});




