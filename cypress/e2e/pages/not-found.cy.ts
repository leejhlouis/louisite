describe('not found page specs', () => {
  it('should render', () => {
    cy.visit('/not-found')
    cy.get('#not-found h1').should('contain', 'The page is not available')
    cy.get('#not-found p').should(
      'contain',
      "Oh, snap! You're in the middle of nowhere, but don't worry, returning home is just one click away."
    )
  })

  it('should go to home page when the "go home" button is clicked', () => {
    cy.visit('/not-found')
    cy.contains('Go home').click()
    cy.url().should('contain', '/')
  })
})
