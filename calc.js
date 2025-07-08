let display = document.getElementById("display");
let current = '';
let result = '';

function updateDisplay(value) {
display.textContent = value;
// scroll to the right end
display.scrollLeft = display.scrollWidth;
}

function press(key) {
if (key === 'C') {
    current = '';
    updateDisplay('0');
} else if (key === 'DEL') {
    current = current.slice(0, -1);
    updateDisplay(current || '0');
} else if (key === '=') {
    try {
        
    result = eval(current);
    updateDisplay(result);
    current = result.toString();
    } catch {
    updateDisplay('Error');
    }
} else {
    current += key;
    updateDisplay(current);
}
}