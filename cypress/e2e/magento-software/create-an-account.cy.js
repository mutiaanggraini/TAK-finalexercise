describe('register account', () => {
  it('passed', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
    // personal information
    cy.get('#firstname').type('Dicky')
    cy.get('#lastname').type('Rachman')
    //sign in information
    cy.get('#email_address').type('dicky@gmail.com')
    cy.get('#password').type('@12345qwerty')
    cy.get('#password-confirmation').type('@12345qwerty')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click()
  })

  // it('invalid email', () => {
  //   cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  //   // personal information
  //   cy.get('#firstname').type('Dicky')
  //   cy.get('#lastname').type('Rachman')
  //   //sign in information
  //   cy.get('#email_address').type('dickygmail.com')
  //   cy.get('#password').type('@12345qwerty')
  //   cy.get('#password-confirmation').type('@12345qwerty')
  //   cy.get('#form-validate').click()
  // })

  // it('invalid password', () => {
  //   cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')
  //   // personal information
  //   cy.get('#firstname').type('Dicky')
  //   cy.get('#lastname').type('Rachman')
  //   //sign in information
  //   cy.get('#email_address').type('dicky@gmail.com')
  //   cy.get('#password').type('@1234')
  //   cy.get('#password-confirmation').type('@123')
  //   cy.get('#form-validate').click()
  // })

  
})