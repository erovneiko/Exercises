describe("Конструктор TicketSystem", () => {
  let book = new TicketSystem()
  book.createEvent('Concert', 500)
  let ticket = book.buyTicket('Concert')

  it("создаёт объект", () => {
    assert.equal(typeof book, 'object')
  })

  it("с методами createEvent, buyTicket, returnTicket", () => {
    assert.isFunction(book.createEvent);
    assert.isFunction(book.buyTicket);
    assert.isFunction(book.returnTicket);
  })

  it("метод createEvent создаёт мероприятие", () => {
    assert.equal(book.events.length, 1)
  })

  it("метод buyTicket продаёт билет", () => {
    assert.deepEqual(book.tickets[0], { ticket: ticket, event: { title:'Concert', price: 500 } })
    assert.equal(book.cash, 500)
  })

  it("метод returnTicket осуществляет его возврат", () => {
    book.returnTicket(ticket)
    assert.deepEqual(book.tickets, [])
    assert.equal(book.cash, 0)
  })
})
