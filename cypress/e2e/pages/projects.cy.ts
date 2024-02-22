describe('projects page specs', () => {
  it('should render', () => {
    cy.visit('/about')
    cy.get('#projects h1').should('contain', 'Projects')
    cy.get('#projects p').should('contain', 'Archives of my projects.')
  })
})
