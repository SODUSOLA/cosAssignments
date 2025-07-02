const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = ''
let result = '';


buttons.forEach(button => {
    button.addEventListener(
        'click', () => {
            const value = button.textContent;
            if (value === 'C') {
                currentInput = '';
                result = '';
                display.textContent = 0;
            } else if (value === 'DEL'){
                currentInput = currentInput.slice(0, -1)
                display.textContent = currentInput || 0
            } else if (value === '='){
                try {
                    result = eval(currentInput)
                    display.textContent = result;
                    currentInput = result.toString()
                } catch {
                    display.textContent = 'Error'
                }
            } else {
                currentInput += value;
                display.textContent = currentInput
            }
        }
    )
})