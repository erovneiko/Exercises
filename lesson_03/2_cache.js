function cache() {
  let cache = []

  return function (a, b) {
    let cacheItem = cache.find((item) => item.a == a && item.b == b)
    let fromCache = Boolean(cacheItem)
    if (!fromCache) cacheItem = cache[cache.push({ a: a, b: b, v: a ** b }) - 1]
    return { value: cacheItem.v, fromCache: fromCache }
  }
}

const calculate = cache();
console.log(calculate(3, 3)) // { value: 27, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: false}
console.log(calculate(2, 10)) // { value: 1024, fromCache: true}
