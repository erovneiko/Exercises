const human = Object.create({}, {
  fullName: {
    set: function (v) {
      [this.firstName, this.lastName] = v.split(' ')
    },
    get: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  dateOfBirth: {
    set: function (v) {
      this.birthDate = v
      this.age = new Date().getFullYear() - v.getFullYear()
    }
  }
})
