const API_KEY = 'WeSWEXOwLH2kRRDDhoAcDBVN4C96UDJ0'

let queryTimeoutID
let queryCache = []

function giphyUrl(query) {
  return `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`
}

function queryEvent(event) {
  clearTimeout(queryTimeoutID)
  queryTimeoutID = setTimeout(giphyQuery, 500, event.target.value)
}

function giphyQuery(query) {
  let cacheItem = queryCache.find((item) => item.query == query)

  if (cacheItem)
    updatePage(cacheItem.results)
  else
    fetch(giphyUrl(query))
      .then(response => response.json())
      .then(json => json.data)
      .then(results => updateCache(query, results))
      .then(results => updatePage(results))
}

function updateCache(query, results) {
  queryCache.push({ query: query, results: results })
  return results
}

function updatePage(results) {
  let resultsTag = document.querySelector('.results')
  resultsTag.textContent = ''

  results.forEach(gif => {
    let item = document.createElement('img')
    item.setAttribute('src', gif.images.fixed_height_small.url)
    resultsTag.append(item)
  })
  return results
}
