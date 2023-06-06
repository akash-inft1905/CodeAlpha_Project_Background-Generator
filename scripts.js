// script.js
const color1Input = document.getElementById('color1');
const color2Input = document.getElementById('color2');
const directionSelect = document.getElementById('direction');
const gradientBtn = document.getElementById('gradientBtn');
const randomBtn = document.getElementById('randomBtn');
const resetBtn = document.getElementById('resetBtn');
const resultDiv = document.getElementById('result');

function generateGradient() {
  const color1 = color1Input.value;
  const color2 = color2Input.value;
  const direction = directionSelect.value;

  resultDiv.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;
}

function generateRandomColors() {
  const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

  const color1 = `#${randomColor()}`;
  const color2 = `#${randomColor()}`;

  color1Input.value = color1;
  color2Input.value = color2;

  generateGradient();
}

function resetColors() {
  color1Input.value = '#ffffff';
  color2Input.value = '#000000';
  directionSelect.value = 'to right';

  resultDiv.style.background = '';
}

gradientBtn.addEventListener('click', generateGradient);
randomBtn.addEventListener('click', generateRandomColors);
resetBtn.addEventListener('click', resetColors);
