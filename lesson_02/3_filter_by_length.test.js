describe("Функция filterByLength", () => {
  let arr = ['dsa', 'gfdgfdg', '1', 'rfterwfsdf']

  it("возвращает массив", () => {
    assert.isArray(filterByLength(arr, 2, 5));
  })

  it("отфильтрованный по размеру слов", () => {
    assert.deepEqual(filterByLength(arr, 2, 5), ['dsa']);
  })
})
