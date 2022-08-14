describe("Function arraySumAndCount", () => {
  let arr = [-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]

  it("counts the sum and number of positive elements", () => {
    let result = arraySumAndCount(arr)
    assert.equal(result.sum, 357);
    assert.equal(result.count, 5);
  })
})
