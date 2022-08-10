describe("Функция sortDesc", () => {
  let arr = [67, 96, 40, -34]

  it("возвращает массив", () => {
    assert.isArray(sortDesc(arr));
  })

  it("отсортированный по убыванию", () => {
    assert.deepEqual(sortDesc(arr), [96, 67, 40, -34]);
  })
})
