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

const cStatusNewGame = 0
const cStatusInProgress = 1
const cStatusWhiteWon = 2
const cStatusBlackWon = 3

const cMoveWhite = 1
const cMoveBlack = 2

class Chess {
  constructor () {
    this.status = cStatusNewGame
    this.whoseMove = cMoveWhite
    this.killedFigures = []
    this.movesHistory = []
  }
  movesCount () {
    return this.movesHistory.length
  }
}

