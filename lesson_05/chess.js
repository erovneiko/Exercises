class Figure {
  constructor (color) {
    this.color = color
  }
  allowedMoves () {}
}

class Pawn extends Figure {    //Пешка
  constructor (color) {
    super(color)
    this.pawn = true
  }
}

class Rook extends Figure {    //Ладья
}

class Bishop extends Figure {  //Слон
}

class Knight extends Figure {  //Конь
}

class King extends Figure {    //Король
}

class Queen extends Figure {   //Ферзь
}

class Field {
  constructor () {
    this.board = new Array(8)
    this.board.fill(new Array(8))
    this.figures = []
  }
}

const cNewGame = 0
const cInProgress = 1
const cWhiteWon = 2
const cBlackWon = 3

class Chess {
  constructor () {
    this.status = cNewGame
    this.killedFigures = []
    this.movesHistory = []
  }
  movesCount () {
    return this.movesHistory.length
  }
}

