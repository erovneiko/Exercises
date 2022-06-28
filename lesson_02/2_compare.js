function compare_arrays(arr1, arr2) {
  if (arr1.length == arr2.length)
    return arr1.every((element, index) => element == arr2.at(index))
  else
    return false
}
