function filterByLength(arr, min, max) {
  return arr.filter((element) => min <= element.length && element.length <= max)
}
