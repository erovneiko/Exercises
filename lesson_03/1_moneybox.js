function MoneyBox() {
  let Coins = 0;
  this.addCoin = function () { Coins++ }
  this.getAmount = function () { return Coins }
}
