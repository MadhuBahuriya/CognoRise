let currentInput = '0';

function handleButtonClick(event) {
  const buttonValue = event.target.textContent;

  if (buttonValue === 'C') {
    clearScreen();
  } else if (buttonValue === '=') {
    calculate();
  } else {
    updateScreen(buttonValue);
  }
}

function updateScreen(value) {
  if (currentInput === '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }

  document.getElementById('screen').textContent = currentInput;
}

function clearScreen() {
  currentInput = '0';
  document.getElementById('screen').textContent = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('screen').textContent = currentInput;
  } catch (error) {
    currentInput = 'Error';
    document.getElementById('screen').textContent = currentInput;
  }
}
