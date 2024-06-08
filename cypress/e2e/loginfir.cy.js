describe('template spec', () => {
  beforeEach(() => {
    cy.visit('') //fill to override baseurl in cypress.config.js
  })

  it('success - login', () => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(Cypress.env('email')) //env variable
    cy.get('#pass').type(Cypress.env('passw')) //env variable
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    cy.wait(5000)
    cy.get(':nth-child(2) > .greet > .logged-in').should('contain', 'Welcome,')
  })
})