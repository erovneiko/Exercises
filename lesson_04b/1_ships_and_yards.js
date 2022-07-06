const Yard = function (type) {
  this.type = type
  
  this.build = function (ship) { 
    if (this.check(ship)) {
      console.log(`Корабль "${ship.name}" построен`) 
      return ship
    }
  }
  
  this.repair = function (ship) { 
    if (this.check(ship)) {
      proto = Object.getPrototypeOf(ship)
      proto.lastRepair = new Date
      console.log(`Корабль "${proto.name}" отремонтирован "${proto.lastRepair.toLocaleDateString()}"`) 
    }
  }
  
  this.paint = function (ship, color) { 
    proto = Object.getPrototypeOf(ship)
    proto.color = color
    console.log(`Корабль "${proto.name}" перекрашен в "${proto.color}" цвет`)
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
  
  this.build = function (name, power, material, color) {
    return Object.getPrototypeOf(this).build.call(this, new MotorShip(name, power, material, color))
  }
}

const SailingYard = function () {
  Object.setPrototypeOf(this, new Yard("Sailing"))
  
  this.build = function (name, masts, square, color) {
    return Object.getPrototypeOf(this).build.call(this, new SailingShip(name, masts, square, color))
  }
}

const Ship = function (name, type, color) {
  this.type = type
  this.name = name
  this.color = color
  this.lastRepair = new Date
}

const MotorShip = function (name, power, material, color) {
  this.power = power
  this.material = material
  Object.setPrototypeOf(this, new Ship(name, "Motor", color))
}

const SailingShip = function (name, masts, square, color) {
  this.masts = masts
  this.square = square
  Object.setPrototypeOf(this, new Ship(name, "Sailing", color))  
}

var motorYard = new MotorYard()
var sailingYard = new SailingYard()

var motorShip1 = motorYard.build("motorShip1", "100kW", "Wood", "Red")   //Корабль "motorShip1" построен
var motorShip2 = motorYard.build("motorShip2", "200kW", "Metal", "Blue")  //Корабль "motorShip2" построен
var sailingShip1 = sailingYard.build("sailingShip1", 3, 100, "Gray")      //Корабль "sailingShip1" построен

motorYard.paint(sailingShip1, "Green")     //Корабль "sailingShip1" в "Green" цвет
sailingYard.paint(motorShip1, "Black")     //Корабль "motorShip1" "Black" цвет

motorYard.repair(motorShip1)      //Корабль "motorShip1" отремонтирован "05.07.2022"
sailingYard.repair(sailingShip1)  //Корабль "sailingShip1" отремонтирован "05.07.2022"

motorYard.repair(sailingShip1)    //Верфь "MotorYard" не подходит для корабля "sailingShip1"
sailingYard.repair(motorShip1)    //Верфь "SailingYard" не подходит для корабля "motorShip1"

motorShip1 = sailingYard.change(motorShip1, motorShip2)  //Верфь "SailingYard" не подходит для корабля "motorShip1"
motorShip1 = motorYard.change(motorShip1, sailingShip1)  //Верфь "MotorYard" не подходит для корабля "sailingShip1"
motorShip1 = motorYard.change(motorShip1, motorShip2)    //Корабль "motorShip1" заменён на новый "motorShip2"

console.log(motorShip1.name)  //motorShip2
