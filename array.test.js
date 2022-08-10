describe("Функция arraySumAndCount", () => {
  let arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]

  it("возвращает объект", () => {
    assert.equal(typeof arraySumAndCount(arr), 'object');
  })

  it("считает количество", () => {
    assert.equal(arraySumAndCount(arr).count, 10);
  })

  it("считает сумму", () => {
    assert.equal(arraySumAndCount(arr).sum, 52);
  })
})
