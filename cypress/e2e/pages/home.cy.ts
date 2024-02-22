import { projects } from '@/_data/projects'
import social from '@/_data/social'

describe('home page specs', () => {
  it('should render', () => {
    cy.visit('/')
    cy.get('#hero h2').should('contain', "Hey👋, I'm Louis Gustavo")
    cy.get('#hero h1').should(
      'contain',
      'A software engineer and a Computer Science undergraduate.'
    )
    cy.get('#hero ul li').should(el => {
      social.forEach((data, index) => {
        expect(el.eq(index).children('a')).to.have.attr('href', data.url)
      })
    })
  })

  it('should scroll down to featured projects when "featured projects" button is clicked', () => {
    cy.visit('/')
    cy.contains('Featured projects').click()
    cy.get('#featured-projects h2').should('contain', 'Featured projects')

    const sampleData = projects[0]

    const sampleCard = cy.get('#featured-projects ul li').first()
    sampleCard
      .contains(sampleData.title)
      .should('have.attr', 'href', sampleData.links[0].url ?? sampleData.links[1].url)
    sampleCard.get('#featured-projects h3').should('contain', sampleData.title)
    sampleCard.get('#featured-projects p').should('contain', sampleData.description)

    sampleCard.get('#featured-projects footer ul:first-of-type li').should(el => {
      sampleData.techStacks.forEach((data, index) => {
        expect(el.eq(index)).to.contain(data)
      })
    })
    sampleCard.get('#featured-projects footer ul:nth-child(2) li').should(el => {
      sampleData.links.forEach((data, index) => {
        expect(el.eq(index).children('a')).to.have.attr('href', data.url)
      })
    })
  })

  it('should scroll up to top when "back to top" button is clicked', () => {
    cy.visit('/')
    cy.contains('Featured projects').click()
    cy.contains('Back to top').click()
  })

  it('should scroll up to top when the scroll to top FAB is clicked', () => {
    cy.visit('/')
    cy.contains('Featured projects').click()
    cy.get('[aria-label="Scroll to top"]').click()
  })
})
