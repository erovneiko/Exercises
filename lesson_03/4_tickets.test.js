describe("Constructor TicketSystem", () => {
  let book = new TicketSystem()

  it("createEvent method creates an event", () => {
    book.createEvent('Concert', 500)
    assert.equal(book.events.length, 1)
  })

  it("buyTicket method sells a ticket", () => {
    let ticket = book.buyTicket('Concert')
    assert.deepEqual(book.tickets[0], { ticket: ticket, event: { title:'Concert', price: 500 } })
    assert.equal(book.cash, 500)
  })

  it("the returnTicket method returns it", () => {
    book.returnTicket(book.tickets[0].ticket)
    assert.deepEqual(book.tickets, [])
    assert.equal(book.cash, 0)
  })
})
