function createAndAppendTag(node, tag) {
  let sub = document.createElement(tag)
  node.append(sub)
  return sub
}

function renderArrayAsList(node, arr) {
  if (!arr.length) return
  if (!node) throw Error("Empty node!")

  let ul = createAndAppendTag(node, "ul")
  let li = null

  arr.forEach(elem => {
    if (typeof elem == "string") {
      li = createAndAppendTag(ul, "li")
      li.textContent = elem
    }
    else {
      if (!li) li = createAndAppendTag(ul, "li")
      renderArrayAsList(li, elem)
    }
  })
}

renderArrayAsList(document.querySelector("div.array"), 
                  ["Item", ["Item2", ["Item3"]]])
