const body = document.body;
body.style.margin = '0';
body.style.background = '#000';
body.style.fontFamily = '-apple-system, BlinkMacSystemFont, sans-serif';
body.style.color = '#fff';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.height = '100vh';

const calculator = document.createElement('div');
calculator.style.width = '320px';
calculator.style.background = '#1c1c1c';
calculator.style.borderRadius = '40px';
calculator.style.padding = '20px';
calculator.style.boxSizing = 'border-box';

const display = document.createElement('div');
display.id = 'display';
display.innerText = '0';
display.style.fontSize = '48px';
display.style.textAlign = 'right';
display.style.marginBottom = '20px';
display.style.minHeight = '60px';
display.style.overflow = 'hidden';
calculator.appendChild(display);

const buttonsContainer = document.createElement('div');
buttonsContainer.style.display = 'grid';
buttonsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
buttonsContainer.style.gap = '10px';
calculator.appendChild(buttonsContainer);

body.appendChild(calculator);

let current = '';

function input(value) {
  if (display.innerText === '0' && value !== '.') {
    current = value;
  } else {
    current += value;
  }
  display.innerText = current;
}

function clearDisplay() {
  current = '';
  display.innerText = '0';
}

function toggleSign() {
  if (current) {
    if (current.charAt(0) === '-') {
      current = current.slice(1);
    } else {
      current = '-' + current;
    }
    display.innerText = current;
  }
}

function calculate() {
  try {
    current = eval(current).toString();
    display.innerText = current;
  } catch (e) {
    display.innerText = 'Error';
    current = '';
  }
}

const buttons = [
  { text: 'AC', class: 'gray', action: clearDisplay },
  { text: '%', class: 'gray', action: () => input('%') },
  { text: '±', class: 'gray', action: toggleSign },
  { text: '÷', class: 'orange', action: () => input('/') },
  { text: '7', class: 'dark', action: () => input('7') },
  { text: '8', class: 'dark', action: () => input('8') },
  { text: '9', class: 'dark', action: () => input('9') },
  { text: '×', class: 'orange', action: () => input('*') },
  { text: '4', class: 'dark', action: () => input('4') },
  { text: '5', class: 'dark', action: () => input('5') },
  { text: '6', class: 'dark', action: () => input('6') },
  { text: '−', class: 'orange', action: () => input('-') },
  { text: '1', class: 'dark', action: () => input('1') },
  { text: '2', class: 'dark', action: () => input('2') },
  { text: '3', class: 'dark', action: () => input('3') },
  { text: '+', class: 'orange', action: () => input('+') },
  { text: '0', class: 'dark wide', action: () => input('0') },
  { text: '.', class: 'dark', action: () => input('.') },
  { text: '=', class: 'orange', action: calculate },
];

buttons.forEach(({ text, class: cls, action }) => {
  const btn = document.createElement('button');
  btn.innerText = text;
  btn.onclick = action;
  btn.style.fontSize = '24px';
  btn.style.border = 'none';
  btn.style.cursor = 'pointer';
  btn.style.color = cls === 'gray' ? 'black' : 'white';

  if (text === '0') {
    btn.style.gridColumn = 'span 2';
    btn.style.borderRadius = '50px';
    btn.style.width = '144px';
    btn.style.height = '64px';
  } else {
    btn.style.width = '64px';
    btn.style.height = '64px';
    btn.style.borderRadius = '50%';
  }

  switch (cls) {
    case 'gray': btn.style.background = '#a5a5a5'; break;
    case 'dark': btn.style.background = '#333333'; break;
    case 'orange': btn.style.background = '#ff9500'; break;
  }

  buttonsContainer.appendChild(btn);
});