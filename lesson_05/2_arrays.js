function parseArray(arr, node = null) {
  if (arr.length) {
    var ul = document.createElement("ul")
    if (!node)
      document.querySelector("div").append(ul)
    else
      node.append(ul)
  }

  var li = null
  
  arr.forEach(elem => {
    if (typeof elem == "string") {
      li = document.createElement("li")
      li.textContent = elem
      ul.append(li)
    }
    else {
      if (!li) li = document.createElement("li")
      parseArray(elem, li)
    }
  });
}
