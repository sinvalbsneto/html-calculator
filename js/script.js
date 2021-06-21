function add(character) {
  let result = document.getElementById("result");

  let inner = result.innerHTML;

  if (inner === "") {
    result.innerHTML = character;
  } else {
    if (character === "x" || character === "+" || character === "/" || character === "-") {
      let newInner = inner + ` ${character} `;

      result.innerHTML = newInner;
    } else {
      let newInner = inner + `${character}`;

      result.innerHTML = newInner;
    }
  }
}

function deleteLastDigit() {
  let result = document.getElementById("result");

  let inner = result.innerHTML;

  let newInner = inner.slice(0, -1);

  result.innerHTML = newInner;
}

function clearAll() {
  let result = document.getElementById("result");

  result.innerHTML = "";
}

function calc() {
  let result = document.getElementById("result");

  let inner = result.innerHTML;

  let newInner = inner.split(" ");

  if (newInner.length > 3) {
    result.innerHTML = "Only 1 operation at a time."
  } else {
    let operator = newInner[1];
    let first = parseFloat(newInner[0]);
    let second = parseFloat(newInner[2]);

    switch (operator) {
      case "+":
        result.innerHTML = first + second;
        break;

      case "-":
        result.innerHTML = first - second;
        break;

      case "x":
        result.innerHTML = first * second;
        break;

      case "/":
        result.innerHTML = first / second;
        break;
    }
  }
}