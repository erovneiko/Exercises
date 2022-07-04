const Yard = function (type) {
  this.type = type
  
  this.build = function (ship) { 
    if (this.check(ship)) {
      console.log(`Корабль "${ship.name}" построен`) 
      return ship
    }
  }
  
  this.repair = function (ship) { 
    if (this.check(ship)) 
      console.log(`Корабль "${ship.name}" отремонтирован`) 
  }
  
  this.paint = function (ship) { 
    console.log(`Корабль "${ship.name}" покрашен`) 
  }
  
  this.change = function (ship1, ship2) { 
    if (this.check(ship1) && this.check(ship2))
      if (ship1.type == ship2.type) {
        console.log(`Корабль "${ship1.name}" заменён на новый "${ship2.name}"`) 
        return ship2
      }
      else
        console.log(`Корабль "${ship1.name}" не может быть заменён на корабль "${ship2.name}"`)

    return ship1
  }
  
  this.check = function (ship) {
    if (this.type == ship.type) 
      return true

      console.log(`Верфь "${this.type}Yard" не подходит для корабля "${ship.name}"`)
    return false
  }
}

const MotorYard = function () {
  Object.setPrototypeOf(this, new Yard("Motor"))
  
  this.build = function (name, power, material) {
    return Object.getPrototypeOf(this).build.call(this, new MotorShip(name, power, material))
  }
}

const SailingYard = function () {
  Object.setPrototypeOf(this, new Yard("Sailing"))
  
  this.build = function (name, masts, square) {
    return Object.getPrototypeOf(this).build.call(this, new SailingShip(name, masts, square))
  }
}

const Ship = function (name, type) {
  this.type = type
  this.name = name
}

const MotorShip = function (name, power, material) {
  this.power = power
  this.material = material
  Object.setPrototypeOf(this, new Ship(name, "Motor"))
}

const SailingShip = function (name, masts, square) {
  this.masts = masts
  this.square = square
  Object.setPrototypeOf(this, new Ship(name, "Sailing"))  
}

var motorYard = new MotorYard()
var sailingYard = new SailingYard()

var motorShip1 = motorYard.build("motorShip1", "100kW", "Wood")   //Корабль "motorShip1" построен
var motorShip2 = motorYard.build("motorShip2", "200kW", "Metal")  //Корабль "motorShip2" построен
var sailingShip1 = sailingYard.build("sailingShip1", 3, 100)      //Корабль "sailingShip1" построен

motorYard.paint(sailingShip1)     //Корабль "sailingShip1" покрашен
sailingYard.paint(motorShip1)     //Корабль "motorShip1" покрашен

motorYard.repair(motorShip1)      //Корабль "motorShip1" отремонтирован
sailingYard.repair(sailingShip1)  //Корабль "sailingShip1" отремонтирован

motorYard.repair(sailingShip1)    //Верфь "MotorYard" не подходит для корабля "sailingShip1"
sailingYard.repair(motorShip1)    //Верфь "SailingYard" не подходит для корабля "motorShip1"

motorShip1 = sailingYard.change(motorShip1, motorShip2)  //Верфь "SailingYard" не подходит для корабля "motorShip1"
motorShip1 = motorYard.change(motorShip1, sailingShip1)  //Верфь "MotorYard" не подходит для корабля "sailingShip1"
motorShip1 = motorYard.change(motorShip1, motorShip2)    //Корабль "motorShip1" заменён на новый "motorShip2"

console.log(motorShip1.name)  //motorShip2
