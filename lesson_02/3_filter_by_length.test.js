describe("Function filterByLength", () => {
  let arr = ['dsa', 'gfdgfdg', '1', 'rfterwfsdf']

  it("returns an array, filtered by the words' length", () => {
    let result = filterByLength(arr, 2, 5)
    assert.isArray(result);
    assert.deepEqual(result, ['dsa']);
  })
})
