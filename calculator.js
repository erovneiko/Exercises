class Calculator {
  operations = []
  history = []

  previousOperand = null;
  currentOperation = null;
  currentOperand = null;

  addOperation(operation, func) {
    this.operations.push({ operation: operation, func: func })
    return this
  }

  enterOperation(operation) {
    let item = this.operations.find(item => item.operation == operation)

    if (item) {
      this.previousOperand = this.currentOperand
      this.currentOperation = operation
      this.currentOperand = null
      return true
    }
  }

  enterOperand(operand) {
    if (Number.isInteger(+operand))
      this.currentOperand =
        this.currentOperand == null
          ? operand
          : this.currentOperand + operand
  }

  clear() {
    this.currentOperand = null
    this.previousOperand = null
    this.currentOperation = null
  }

  operate() {
    if (!this.currentOperation)
      return

    let result = this.operations
      .find(item => item.operation == this.currentOperation)
      .func(+this.previousOperand, +this.currentOperand)

    this.history.push({
      operation: this.currentOperation,
      operands: [this.previousOperand, this.currentOperand],
      result: result.toString()
    })

    this.currentOperand = result.toString()
    this.currentOperation = null
    this.previousOperand = null
    return result
  }

  backspace() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  history() {
    return history
  }

  clearHistory() {
    history = []
  }
}

// Test
// const calculator = new Calculator()
// calculator.addOperation('+', (a, b) => a + b)
// calculator.addOperation('*', (a, b) => a * b)
// calculator.enterOperand(10)
// calculator.enterOperation('*')
// calculator.enterOperand(2)
// console.log(calculator.operate())
// console.log('OK')
