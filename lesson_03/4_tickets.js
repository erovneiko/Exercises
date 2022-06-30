const TicketSystem = function () {
  let events = []
  let tickets = []
  let cash = 0

  this.createEvent = function (title, price) {
    events.push({ title: title, price: price })
  }

  this.buyTicket = function (title) {
    let event = events.find((item) => item.title == title)
    let ticket = (Math.random() * 1000000).toFixed().toString()
    tickets.push({ ticket: ticket, event: event })
    cash += event.price
    return ticket
  }

  this.returnTicket = function (ticket) {
    let index = tickets.findIndex((item) => item.ticket == ticket)
    if (index >= 0) {
      cash -= tickets[index].event.price
      tickets.splice(index, 1)
    }
  }
}

const ticketWindow = new TicketSystem();
ticketWindow.createEvent('Concert', 500)
ticket = ticketWindow.buyTicket('Concert')
ticketWindow.returnTicket(ticket)
