import {
  cStatusNewGame,
  cStatusInProgress,
  cStatusWhiteWon,
  cStatusBlackWon,
  cMoveWhite,
  cMoveBlack
} from './const.js'

export class Chess {
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
