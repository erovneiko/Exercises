describe("Функция cache", () => {
  const calc = cache();

  it("возвращает функцию", () => {
    assert.equal(typeof calc, 'function');
  })

  it("которая возвращает объект", () => {
    assert.equal(typeof calc(2, 2), 'object');
  })

  it("возводит 3 в степень 3 с результатом 27", () => {
    assert.deepEqual(calc(3, 3), { value: 27, fromCache: false });
  })

  it("возводит 2 в степень 10 с результатом 1024", () => {
    assert.deepEqual(calc(2, 10), { value: 1024, fromCache: false });
  })

  it("читает результат возведения 2 в степень 10 из кэша", () => {
    assert.deepEqual(calc(2, 10), { value: 1024, fromCache: true });
  })
})
