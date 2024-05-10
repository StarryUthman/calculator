function updateDisplay(value) {
  let displayElement = document.getElementById("result");
  // Clear the display before updating with the new value
  displayElement.value = value;
}  

function calculate() {
  let displayElement = document.getElementById("result");
  let expression = displayElement.value;
  let result = eval(expression);
  displayElement.value = result; // Update the display with the calculated result
}
