var a = [1, 2, 3, 4, 5]

Array.prototype.shuffle = function () { 
  return this.sort((item1, item2) => 0.5 - Math.random()) 
}

console.log(a.shuffle())
