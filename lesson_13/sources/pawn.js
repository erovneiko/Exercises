import { Figure } from './figure.js'

export class Pawn extends Figure {    //Пешка
  constructor (color) {
    super(color)
    this.pawn = true
  }
}
