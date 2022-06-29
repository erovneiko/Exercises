function textToArray(text) {
  return text.split(' ').map((w) =>
    Object({
      word: w,
      length: w.length,
      isCapitalized: /[A-Z]/.test(w.at(1))
    }))
}
