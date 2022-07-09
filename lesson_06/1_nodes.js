function setTextByDataField(node, obj) {
  node.querySelectorAll("[data-field]").forEach(elem => {
    if (obj[elem.dataset.field])
      elem.textContent = obj[elem.dataset.field]
    else
      throw Error(`Object property "${elem.dataset.field}" not found`);
  })
}

function onLoad() {
  setTextByDataField(
    document.getElementById("item1"),
    {
      title: "Hello world",
      description: "The first program",
    }
  )
}
