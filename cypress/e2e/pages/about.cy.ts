describe('about page specs', () => {
  it('should render', () => {
    cy.visit('/about')
    cy.get('#about h1').should(
      'contain',
      'Hey, it\'s Louis "leejhlouis"—a software engineer based in Indonesia.'
    )
  })
})
