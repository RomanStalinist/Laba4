const numberOne = document.getElementById('number1');
const numberTwo = document.getElementById('number2');
const result = document.getElementById('result');
const btn = document.getElementById('btn');
btn.addEventListener('click', () =>
	result.value = parseInt(numberOne.value) + parseInt(numberTwo.value));