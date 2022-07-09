function createAndAppendTagUL(node) {
  var ul = document.createElement("ul")

  if (!node)
    document.querySelector("div").append(ul)
  else
    node.append(ul)

  return ul
}

function createAndAppendTagLI(node, li, text) {
  li = document.createElement("li")
  li.textContent = text
  node.append(li)
  return li
}

function createTagLI_IfNecessary(li) {
  if (li)
    return li
  else
    return document.createElement("li")
}

function renderArrayAsList(arr, node = null) {
  if (arr.length)
    var ul = createAndAppendTagUL(node)

  var li = null

  arr.forEach(elem => {
    if (typeof elem == "string")
      li = createAndAppendTagLI(ul, li, elem)
    else {
      li = createTagLI_IfNecessary(li)
      renderArrayAsList(elem, li)
    }
  })
}

renderArrayAsList(["Item", ["Item2", ["Item3"]]])
