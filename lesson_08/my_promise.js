class MyPromise {
  state = null
  value = null
  thenCallbacks = []
  catchCallbacks = []

  constructor(callback) {
    this.state = 'pending'
    callback(this.resolve, this.reject)
  }

  resolve = (value) => {
    if (this.state == 'pending') {
      this.state = 'fulfilled'
      this.value = value

      let result = value
      this.thenCallbacks.forEach((callback) => {
        result = callback(result)
      })
    }
  }

  reject = (value) => {
    if (this.state == 'pending') {
      this.state = 'rejected'
      this.value = value

      let result = value
      this.catchCallbacks.forEach((callback) => {
        result = callback(result)
      })
    }
  }

  then = (callback) => {
    if (this.state == 'pending')
      this.thenCallbacks.push(callback)

    else if (this.state == 'fulfilled')
      return callback(this.value)

    return this
  }

  catch = (callback) => {
    if (this.state == 'pending')
      this.catchCallbacks.push(callback)

    else if (this.state == 'rejected')
      return callback(this.value)

    return this
  }

  static resolve = (value) => {
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
  }

  static reject = (value) => {
    return new MyPromise((resolve, reject) => {
      reject(value)
    })
  }
}

// Tests
const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('done')
  }, 1000)
})

myPromise
  .then(() => { console.log('resolved') })
  .catch(() => { console.log('rejected') })

setTimeout(() => console.log(myPromise), 1000)
setTimeout(() => console.log(myPromise), 2000)
setTimeout(() => console.log(myPromise), 3000)
