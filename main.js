let queryTimeoutID
let queryCache = []

function giphyUrl(query, apiKey) {
  return `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}`
}

function queryEvent(event) {
  clearTimeout(queryTimeoutID)

  queryTimeoutID = setTimeout(query => {
    giphyQuery(query, 'WeSWEXOwLH2kRRDDhoAcDBVN4C96UDJ0')
      .then(results => updatePage(document.querySelector('.results'), results))
  }, 500, event.target.value)
}

function giphyQuery(query, apiKey) {
  let cacheItem = queryCache.find((item) => item.query == query)

  if (cacheItem)
    return Promise.resolve(cacheItem.results)
  else
    return fetch(giphyUrl(query, apiKey))
      .then(response => response.json())
      .then(json => json.data)
      .then(results => updateCache(query, results))
}

function updateCache(query, results) {
  queryCache.push({ query: query, results: results })
  return results
}

function updatePage(tag, results) {
  tag.textContent = ''
  results.forEach(gif => {
    let item = document.createElement('img')
    item.setAttribute('src', gif.images.fixed_height_small.url)
    tag.append(item)
  })
  return results
}
