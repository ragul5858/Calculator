let display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;

    // Ready for DB integration:
    // sendToDatabase(display.value, result);
  } catch (err) {
    display.value = "Error";
  }
}

/*
// Backend Integration Placeholder
function sendToDatabase(expression, result) {
  fetch('/api/save', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ expression, result })
  });
}
*/
