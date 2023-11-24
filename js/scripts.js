const displayPreviousValue = document.getElementById('previousValue');
const displayActualValue = document.getElementById('actualValue');
const numberButton = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');

const display = new Display(displayPreviousValue, displayActualValue);

numberButton.forEach(btn => {
    btn.addEventListener('click', () => {
        display.addNumber(btn.innerHTML);
    });
});

operatorButtons.forEach(btn => {
    btn.addEventListener('click', () => display.action(btn.value))
});