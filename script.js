const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let calculation = '';
let result = 0;

buttons.forEach(button => {
	button.addEventListener('click', () => {
		switch ((button.id)) {
			case 'clear':
				calculation = '';
				display.value = '';
				break;
			case 'backspace':
				calculation = calculation.slice(0, -1);
				display.value = calculation;
				break;
			case 'equals':
				try {
					result = eval(calculation);
					display.value = result;
					calculation = result.toString();
				} catch (error) {
					display.value = 'Error';
					calculation = '';
				}
				break;
			default:
				calculation += button.textContent;
				display.value = calculation;
		}
	});
});