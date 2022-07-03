const Human = function (human) {
  this.name = human.name
  this.lastName = human.lastName
  this.eat = function () { }
  this.sleep = function () { }
  this.callFriend = function () { }
}

const Employee = function (employee) {
  Object.setPrototypeOf(this, new Human(employee))
  this.position = employee.position
  this.startDate = employee.startDate
  this.baseSalary = employee.baseSalary
  this.salaryCurrency = employee.salaryCurrency
  this.location = employee.location
  this.department = employee.department
  this.phoneNumber = employee.phoneNumber
}

const CurrentEmployee = function (currentEmployee) {
  Object.setPrototypeOf(this, new Employee(currentEmployee))
  this.writeReport = function () { }
  this.organizeMeeting = function () { }
  this.retire = function () { }
  this.startVacation = function () { }
}

const FormerEmployee = function (formerEmployee) {
  Object.setPrototypeOf(this, new Employee(formerEmployee))
  this.endDate = formerEmployee.endDate
}

var john = new FormerEmployee({
  name: "John",
  lastName: "Smith",
  position: "Senior engineer",
  startDate: "10.10.1990",
  endDate: "10.10.2000",
  baseSalary: "10000",
  salaryCurrency: "$",
  location: "Russia",
  department: "IT",
  phoneNumber: "+1234567890"
})
