const item = {}

item.name = 'Alex'
item.lastName = 'Smith'
item.name = 'Bob'
delete item.name
delete item.lastName

console.log(item)
