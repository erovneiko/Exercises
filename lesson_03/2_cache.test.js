describe("Function cache", () => {
  const calc = cache();

  it("raises 3 to the power of 3 with result 27", () => {
    assert.deepEqual(calc(3, 3), { value: 27, fromCache: false });
  })

  it("raises 2 to the power of 10 with the result 1024", () => {
    assert.deepEqual(calc(2, 10), { value: 1024, fromCache: false });
  })

  it("reads the result of raising 2 to the power of 10 from the cache", () => {
    assert.deepEqual(calc(2, 10), { value: 1024, fromCache: true });
  })
})
