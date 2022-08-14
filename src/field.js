export class Field {
  constructor () {
    this.board = {
      'a': new Array(8),
      'b': new Array(8),
      'c': new Array(8),
      'd': new Array(8),
      'e': new Array(8),
      'f': new Array(8),
      'g': new Array(8),
      'h': new Array(8)
    }
    this.figures = []
  }
}
