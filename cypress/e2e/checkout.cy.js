describe('chekout', () => {
    beforeEach(() => {
      cy.visit('') //fill to override baseurl in cypress.config.js
    })

    it('success checkout', () => {
      cy.get('.todo-list li').should('have.length', 2)
  
      cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
      cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })
  
    
  })
  