function text_to_array(text) {
  return text.split(' ').map((w) =>
    new Object({
      word: w,
      length: w.length,
      isCapitalized: /[A-Z]/.test(w.at(1))
    }))
}
