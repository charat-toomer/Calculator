const buttonshtml = document.querySelector('#buttons');

let buttonhtml = '';
for (let index = 9; index >=0; index--) {
    if(index===3)
        buttonhtml += `<button>+</button>`;
    else if(index===6)
        buttonhtml += `<button>Clr</button>`;
    else if(index===0){
        buttonhtml += `<button>-</button><button>.</button>`;
    }
    else if(index===9){
        buttonhtml += `<button>U</button><button>R</button><button><-</button><button>Enter</button>`;
    }
    buttonhtml += `<button>${index}</button>`;
}
buttonhtml += '<button>/</button><button>%</button>';
buttonshtml.innerHTML= buttonhtml;

const display = document.getElementById('display2');
const buttons = document.querySelectorAll('button');
let calculation = '';
let result = 0;

buttons.forEach(button => {
	button.addEventListener('click', () => {

        console.log(button.innerText)

		switch ((button.innerText)) {
			case 'Clr':
				calculation = '';
				display.innerText = '';
				break;
			case '<-':
				calculation = calculation.slice(0, -1);
				display.innerText = calculation;
				break;
			case 'Enter':
				try {
					result = eval(calculation);
					display.innerText = result;
					calculation = result.toString();
				} catch (error) {
					display.innerText = 'Error';
					calculation = '';
				}
				break;
			default:
				calculation += button.textContent;
				display.innerText = calculation;
		}
	});
});

