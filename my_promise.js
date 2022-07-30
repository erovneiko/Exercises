class MyPromise {
  state = null
  value = null
  thenCallbacks = []
  catchCallbacks = []

  constructor(exec) {
    this.state = 'pending'
    setTimeout(exec(this.resolve, this.reject), 0)
  }

  resolve = (value) => {
    if (this.state == 'pending') {
      this.state = 'fulfilled'
      this.value = value
      this.thenCallbacks.forEach((callback) => callback(value))
    }
  }

  reject = (value) => {
    if (this.state == 'pending') {
      this.state = 'rejected'
      this.value = value
      this.catchCallbacks.forEach((callback) => callback(value))
    }
  }

  then = (callback) => {
    if (this.state == 'pending')
      this.thenCallbacks.push(callback)

      else if (this.state == 'fulfilled')
      callback(this.value)

    return this
  }

  catch = (callback) => {
    if (this.state == 'pending')
      this.catchCallbacks.push(callback)

    else if (this.state == 'rejected')
      callback(this.value)

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
// const myPromise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('done')
//   }, 1000)
// })

// myPromise
//   .then(() => { console.log('resolved') })
//   .catch(() => { console.log('rejected') })

// setTimeout(() => console.log(myPromise), 0)
// setTimeout(() => console.log(myPromise), 1000)
// setTimeout(() => console.log(myPromise), 2000)
