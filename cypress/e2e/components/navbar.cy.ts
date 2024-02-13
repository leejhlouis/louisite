import navItems from '@/_data/navItems'

describe('navbar specs', () => {
  it('should have title', () => {
    cy.visit('/')
    cy.get('nav p').should('contain', 'LOUISITE')
  })

  it('should have navigation items', () => {
    cy.visit('/')
    cy.get('nav ul li').should(el => {
      navItems.forEach((item, index) => {
        expect(el.eq(index)).to.contain(item.name)
        expect(el.eq(index).children('a')).to.have.attr('href', item.href)
      })
    })
  })

  it('should click the theme toggle button and the theme should change (matchMedia)', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'matchMedia').withArgs('(prefers-color-scheme: dark)').returns({
          matches: false
        })
      }
    })
    cy.get('[aria-label="Toggle theme"').click()
    cy.get('html').should('have.class', 'dark')
    cy.get('[aria-label="Toggle theme"').click()
    cy.get('html').should('not.have.class', 'dark')
  })

  it('should click the theme toggle button and the theme should change (localStorage)', () => {
    cy.visit('/')
    window.localStorage.setItem('theme', 'dark')
    cy.get('[aria-label="Toggle theme"').click()
    cy.get('html').should('not.have.class', 'dark')
    cy.get('[aria-label="Toggle theme"').click()
    cy.get('html').should('have.class', 'dark')
  })
})
