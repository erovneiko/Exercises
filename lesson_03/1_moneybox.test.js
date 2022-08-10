describe("Конструктор moneyBox", () => {
  let box = new MoneyBox()

  it("создаёт объект", () => {
    assert.equal(typeof box, 'object');
  })

  it("у которого есть методы addCoin и getAmount", () => {
    assert.isFunction(box.addCoin);
    assert.isFunction(box.getAmount);
  })

  it("addCoin увеличивает счётчик монет, а функция getAmount возвращает их количество", () => {
    box.addCoin()
    assert.equal(box.getAmount(), 1);
    box.addCoin()
    assert.equal(box.getAmount(), 2);
  })
})
