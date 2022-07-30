class CalcDispatcher {
  constructor(calculator, view) {
    this.calculator = calculator
    this.view = view
    this.view.calculator = this.calculator
    this.view.addListeners(key => this.handleInput(key))
    this.view.addButtons()
  }

  handleInput(key) {
    if (!this.calculator.enterOperator(key))
      switch (key) {
        case 'c':
        case 'C':
          this.calculator.clear()
          this.view.clear()
          break
        case '=':
        case 'Enter':
          this.calculator.operate()
          this.view.update()
          break
        case 'BS':
        case 'Backspace':
          this.calculator.backspace()
          this.view.update()
          break
        default:
          this.calculator.enterOperand(key)
          this.view.update()
      }
    else
      this.view.clear()
  }
}
