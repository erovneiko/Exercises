function queryEvent(event) {
  clearTimeout(queryTimeoutID)

  queryTimeoutID = setTimeout(query => {
    giphyQuery(query, API_KEY)
      .then(results => updatePage(document.querySelector('.results'), results))
  }, 500, event.target.value)
}
