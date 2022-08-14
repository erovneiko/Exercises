describe("Constructor moneyBox", () => {
  let box = new MoneyBox()

  it("the addCoin method increases the counter of coins, and the getAmount method returns its amount", () => {
    box.addCoin()
    assert.equal(box.getAmount(), 1);
    box.addCoin()
    assert.equal(box.getAmount(), 2);
  })
})
