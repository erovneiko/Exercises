describe("Constructor Calc", () => {
  const calc = new Calc()

  it("the operation method already knows how to add and multiply two operands", () => {
    assert.equal(calc.operation('31 + 32'), 63)
    assert.equal(calc.operation('10 * 2'), 20)
  })

  it("addOperation method adds new operations (divide)", () => {
    let div = (a, b) => a / b
    assert.equal(calc.operations.length, 2)
    calc.addOperation('/', div)
    assert.equal(calc.operations.length, 3)
    assert.deepEqual(calc.operations[2], { name: '/', func: div })
    assert.equal(calc.operation('10 / 2'), 5)
  })

  it("the history attribute stores the history of operations", () => {
    assert.equal(JSON.stringify(calc.history), '[{"operation":"+","operands":["31","32"]},{"operation":"*","operands":["10","2"]},{"operation":"/","operands":["10","2"]}]')
  })

  it("clearHistory method clears the operation history", () => {
    calc.clearHistory()
    assert.deepEqual(calc.history, [])
  })
})
