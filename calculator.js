class Calculator {
  operations = []
  history = []

  previousOperand = null;
  currentOperator = null;
  currentOperand = null;

  addOperation(operation, func) {
    this.operations.push({ operation: operation, func: func })
    return this
  }

  enterOperator(operator) {
    let item = this.operations.find(item => item.operation == operator)

    if (item) {
      this.previousOperand = this.currentOperand
      this.currentOperator = operator
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
    this.currentOperator = null
  }

  operate() {
    if (!this.currentOperator)
      return

    let result = this.operations
      .find(item => item.operation == this.currentOperator)
      .func(+this.previousOperand, +this.currentOperand)

    this.history.push({
      operation: this.currentOperator,
      operands: [this.previousOperand, this.currentOperand],
      result: result.toString()
    })

    this.currentOperand = result.toString()
    this.currentOperator = null
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
// calculator.enterOperator('*')
// calculator.enterOperand(2)
// console.log(calculator.operate())
// console.log('OK')
