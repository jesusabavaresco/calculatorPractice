class Display {
    constructor(displayPreviousValue, displayActualValue) {
        this.displayActualValue = displayActualValue;
        this.displayPreviousValue = displayPreviousValue;
        this.calculator = new Calculator();
        this.typeOperation = undefined;
        this.actual_value = '';
        this.previous_value = '';
        this.sign = {
            add: '+',
            deduct: '-',
            divide: '%',
            multiply: 'x'
        }
    }
    delete() {
        this.actual_value = this.actual_value.toString().slice(0, -1);
        this.printValue();
    }
    deleteAll(){
        this.actual_value = '';
        this.previous_value = '';
        this.typeOperation = undefined;
        this.printValue();
    }
    action(type){
        this.typeOperation !== 'equal' && this.calculate();
        this.typeOperation = type;
        this.previous_value = this.actual_value || this.previous_value;
        this.actual_value = '';
        this.printValue();
    }
    addNumber(num){
        if(num === '.' && this.actual_value.includes('.')) return
        this.actual_value = this.actual_value.toString() + num.toString();
        this.printValue();
    }
    printValue() {
        this.displayActualValue.textContent = this.actual_value;
        this.displayPreviousValue.textContent = `${this.previous_value} ${this.sign[this.typeOperation] || ''}`;
    }
    calculate() {
        const previous_value = parseFloat(this.previous_value);
        const actual_value = parseFloat(this.actual_value);

        if(isNaN(actual_value) || isNaN(previous_value)) return
        this.actual_value = this.calculator[this.typeOperation](previous_value, actual_value);
    }
}