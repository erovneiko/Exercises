const TicketSystem = function () {
  this.events = []
  this.tickets = []
  this.cash = 0

  this.createEvent = function (title, price) {
    this.events.push({ title: title, price: price })
  }

  this.buyTicket = function (title) {
    let event = this.events.find((item) => item.title == title)
    let ticket = (Math.random() * 1000000).toFixed().toString()
    this.tickets.push({ ticket: ticket, event: event })
    this.cash += event.price
    return ticket
  }

  this.returnTicket = function (ticket) {
    let index = this.tickets.findIndex((item) => item.ticket == ticket)
    if (index >= 0) {
      this.cash -= this.tickets[index].event.price
      this.tickets.splice(index, 1)
    }
  }
}

// const ticketWindow = new TicketSystem()
// ticketWindow.createEvent('Concert', 500)
// ticket = ticketWindow.buyTicket('Concert')
// ticketWindow.returnTicket(ticket)
