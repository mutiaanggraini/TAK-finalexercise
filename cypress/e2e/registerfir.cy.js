describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/customer/account/create/')
  })
  
  it('success register', () => {
       
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.get('#firstname').type('Firdaus')
    cy.get('#lastname').type('Ali')
    cy.get('#email_address').type('irdtak5@gmail.com')
    cy.get('#password').type('Fir123456')
    cy.get('#password-confirmation').type('Fir123456')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    //cy.get('.message-success > div').should('have.value','Thank you for registering with Main Website Store.')
  })

})