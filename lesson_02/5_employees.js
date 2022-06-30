const employees = [
  {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 54,
    salary: 10000,
    position: 'Architect'
  },
  {
    firstName: 'Gustav',
    lastName: 'Andersen',
    age: 31,
    salary: 5000,
    position: 'Software engineer'
  },
  {
    firstName: 'Liz',
    lastName: 'Taylor',
    age: 20,
    salary: 7000,
    position: 'Manager'
  }
]

console.log(employees.reduce((acc, item, index, arr) => acc + item.salary / arr.length, 0))
console.log('');

employees.sort((item1, item2) => item1.salary - item2.salary).forEach((item) => console.log(item.firstName + ' ' + item.salary))
console.log('');

employees.filter((item) => item.salary > 4500 && item.age > 25).forEach((item) => console.log(item.firstName + ' ' + item.salary + ' ' + item.age))
