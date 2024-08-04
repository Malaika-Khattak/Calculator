var output = document.getElementById("output");
var currentinput = "";
var operator = "";
var firstoperand = null;

function outdisplay(value) {
  output.innerHTML = value;
}

function getinput(num) {
  currentinput += num;
  outdisplay(currentinput);
}

function calculate(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return b;
  }
}

function handleOperator(op) {
  if (currentinput !== "") {
    if (firstoperand === null) {
      firstoperand = parseFloat(currentinput);
    } else {
      firstoperand = calculate(
        firstoperand,
        parseFloat(currentinput),
        operator
      );
      outdisplay(firstoperand);
    }
    currentinput = "";
    operator = op;
  }
}

function handleEqual() {
  if (firstoperand !== null && operator !== "" && currentinput !== "") {
    const result = calculate(firstoperand, parseFloat(currentinput), operator);
    outdisplay(result);
    firstoperand = null;
    currentinput = result.toString();
    operator = "";
  }
}

// Handle number and point input
document.getElementById("9").addEventListener("click", () => getinput("9"));
document.getElementById("8").addEventListener("click", () => getinput("8"));
document.getElementById("7").addEventListener("click", () => getinput("7"));
document.getElementById("6").addEventListener("click", () => getinput("6"));
document.getElementById("5").addEventListener("click", () => getinput("5"));
document.getElementById("4").addEventListener("click", () => getinput("4"));
document.getElementById("3").addEventListener("click", () => getinput("3"));
document.getElementById("2").addEventListener("click", () => getinput("2"));
document.getElementById("1").addEventListener("click", () => getinput("1"));
document.getElementById("0").addEventListener("click", () => getinput("0"));
document.getElementById("point").addEventListener("click", () => getinput("."));

// Handle operator input
document
  .getElementById("div")
  .addEventListener("click", () => handleOperator("/"));
document
  .getElementById("mul")
  .addEventListener("click", () => handleOperator("*"));
document
  .getElementById("sub")
  .addEventListener("click", () => handleOperator("-"));
document
  .getElementById("add")
  .addEventListener("click", () => handleOperator("+"));

// Handle clear
document.getElementById("clear").addEventListener("click", () => {
  currentinput = "";
  operator = "";
  firstoperand = null;
  outdisplay(0);
});

// Handle equal
document.getElementById("equal").addEventListener("click", handleEqual);
