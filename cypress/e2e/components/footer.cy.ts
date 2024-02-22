import navItems from '@/_data/navItems'

describe('footer specs', () => {
  it('should have title', () => {
    cy.visit('/')
    cy.get('footer p').should('contain', 'LOUISITE')
    cy.get('footer p').should('contain', 'Made with ❤️ by Louis.')
  })

  it('should have navigation items', () => {
    cy.visit('/')
    cy.get('footer div ul li').should(el => {
      navItems.forEach((item, index) => {
        expect(el.eq(index)).to.contain(item.name)
        expect(el.eq(index).children('a')).to.have.attr('href', item.href)
      })
    })
  })
})
