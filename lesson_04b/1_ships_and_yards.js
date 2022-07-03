const Yard = function (type) {
  this.type = type
  this.build = function (ship) { if (this.check(ship)) console.log(`Корабль "${ship.type}" построен`) }
  this.repair = function (ship) { if (this.check(ship)) console.log(`Корабль "${ship.type}" отремонтирован`) }
  this.paint = function (ship) { console.log(`Корабль "${ship.type}" покрашен`) }
  this.change = function (ship) { if (this.check(ship)) console.log(`Корабль "${ship.type}" заменён на новый`) }
  this.check = function (ship) {
    if (this.type.substring(0, this.type.search(`Yard`)) == ship.type.substring(0, ship.type.search(`Ship`))) return true
    console.log(`Верфь "${this.type}" не подходит для корабля "${ship.type}"`)
    return false
  }
}

const MotorYard = function () {
  Object.setPrototypeOf(this, new Yard("MotorYard"))
}

const SailingYard = function () {
  Object.setPrototypeOf(this, new Yard("SailingYard"))
}

const Ship = function (type) {
  this.type = type
}

const MotorShip = function (power, material) {
  this.power = power
  this.material = material
  Object.setPrototypeOf(this, new Ship("MotorShip"))
}

const SailingShip = function (masts, square) {
  this.masts = masts
  this.square = square
  Object.setPrototypeOf(this, new Ship("SailingShip"))  
}

var motorYard = new MotorYard()
var sailingYard = new SailingYard()
var motorShip = new MotorShip("100kW", "Wood")
var sailingShip = new SailingShip(3, 100)

motorYard.build(motorShip)
motorYard.build(sailingShip)
sailingYard.build(motorShip)
sailingYard.build(sailingShip)
motorYard.paint(motorShip)
motorYard.paint(sailingShip)
sailingYard.paint(motorShip)
sailingYard.paint(sailingShip)
