import social from '@/_data/social'

describe('navigation specs', () => {
  it('should visit projects page', () => {
    cy.visit('/projects')
    cy.get('nav ul li').contains('Projects').click()
    cy.url().should('contain', '/projects')
  })

  it('should visit about page', () => {
    cy.visit('/')
    cy.get('nav ul li').contains('About').click()
    cy.url().should('contain', '/about')
  })

  it('should visit home page', () => {
    cy.visit('/about')
    cy.get('nav ul li').contains('Home').click()
    cy.url().should('contain', '/')
  })

  it('should have the correct mail url', () => {
    const expected = social.find(({ name }) => name === 'Mail')?.url
    cy.visit('/')
    cy.get('[aria-label="Mail"]').each(element => {
      cy.wrap(element).should('have.attr', 'href').and('equal', expected)
    })
  })

  it('should have the correct github url', () => {
    const expected = social.find(({ name }) => name === 'GitHub')?.url
    cy.visit('/')
    cy.get('[aria-label="GitHub"]').each(element => {
      cy.wrap(element).should('have.attr', 'href').and('equal', expected)
    })
  })

  it('should have the correct linkedin url', () => {
    const expected = social.find(({ name }) => name === 'LinkedIn')?.url
    cy.visit('/')
    cy.get('[aria-label="LinkedIn"]').each(element => {
      cy.wrap(element).should('have.attr', 'href').and('equal', expected)
    })
  })
})
