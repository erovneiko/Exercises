function arraySumAndCount(arr) {
  return {
    count: arr.length,
    sum: arr.reduce((a, b) => a + b, 0)
  }
}
