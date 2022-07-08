function parseTemplate(node, obj) {
  node.querySelectorAll("[data-field]").forEach(elem => {
    if (obj[elem.dataset.field])
      elem.textContent = obj[elem.dataset.field]
    else
      console.log(`Object property "${elem.dataset.field}" not found`)
  });
}
