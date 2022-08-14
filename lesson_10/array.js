function arraySumAndCount(arr) {
  return {
    count: arr.reduce((a, b) => { 
      if (b > 0)
        return ++a
      else
        return a
    }, 0),
    sum: arr.reduce((a, b) => { 
      if (b > 0)
        return a + b 
      else
        return a
    }, 0)
  }
}
