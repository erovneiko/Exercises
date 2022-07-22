class CalcView {
  constructor(display_class, buttons_class) {
    this.display = document.querySelector(display_class)
    this.buttons = document.querySelector(buttons_class)
  }

  addListeners(handler) {
    this.buttons.addEventListener('click', event => {
      handler(event.target.textContent)
    })

    document.addEventListener('keypress', event => {
      handler(event.key)
    })

    document.addEventListener('keydown', event => {
      if (event.key == 'Backspace')
        handler(event.key)
    })
  }

  addButtons(operations) {
    operations.forEach(operation => {
      let item = document.createElement('div')
      item.classList.add('button')
      item.textContent = operation.operation
      this.buttons.append(item)
      this.buttons.append(' ')
    });
  }

  clear() {
    this.display.innerHTML = ''
  }

  update() {
    this.display.textContent = this.calculator.currentOperand
  }
}
