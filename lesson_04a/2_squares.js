const Rect = function (a, b) {
  this.a = a
  this.b = b
}

Rect.prototype = {
  area: function () {
    return this.a * this.b
  }
}

const Square = function(a) {
  return new Rect(a, a)
}

var rect = new Rect(1, 3)
var square = new Square(2)

console.log(rect.area())
console.log(square.area())

debugger
