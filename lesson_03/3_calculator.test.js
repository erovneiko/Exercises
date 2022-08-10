describe("Конструктор Calc", () => {
  const calc = new Calc()

  it("создаёт объект", () => {
    assert.equal(typeof calc, 'object')
  })

  it("с методами operation, addOperation, history, clearHistory", () => {
    assert.isFunction(calc.operation);
    assert.isFunction(calc.addOperation);
    assert.isFunction(calc.clearHistory);
  })

  it("метод operation уже умеет складывать и умножать два операнда", () => {
    assert.equal(calc.operation('31 + 32'), 63)
    assert.equal(calc.operation('10 * 2'), 20)
  })

  it("метод addOperation добавляет новые операции (деление)", () => {
    let div = (a, b) => a / b
    assert.equal(calc.operations.length, 2)
    calc.addOperation('/', div)
    assert.equal(calc.operations.length, 3)
    assert.deepEqual(calc.operations[2], { name: '/', func: div })
    assert.equal(calc.operation('10 / 2'), 5)
  })

  it("атрибут history хранит историю операций", () => {
    assert.equal(JSON.stringify(calc.history), '[{"operation":"+","operands":["31","32"]},{"operation":"*","operands":["10","2"]},{"operation":"/","operands":["10","2"]}]')
  })

  it("метод clearHistory очищает историю операций", () => {
    calc.clearHistory()
    assert.deepEqual(calc.history, [])
  })
})
