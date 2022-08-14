describe("Function sortDesc", () => {
  let arr = [67, 96, 40, -34]

  it("returns an array, sorten in descending order", () => {
    let result = sortDesc(arr)
    assert.isArray(result);
    assert.deepEqual(result, [96, 67, 40, -34]);
  })
})
