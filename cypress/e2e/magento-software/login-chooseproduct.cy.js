describe('template spec', () => {
  it('loginpasses', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/')
    cy.get('#email').type('dicky@gmail.com')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('@12345qwerty')
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
  })

  it('choose product valid', () => {
    cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
    //pilih product
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    //pemilihan size, warna, jumlah
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('2')
    cy.get('#product-addtocart-button > span').click()
  })

  // it('choose product invalid, tanpa pilih ukuran', () => {
  //   cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
  //   //pilih product
  //   cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
  //   //pemilihan size, warna, jumlah 
  //   // cy.get('#option-label-size-143-item-168').click()
  //   cy.get('#option-label-color-93-item-50').click()
  //   cy.get('#qty').clear()
  //   cy.get('#qty').type('2')
  //   cy.get('#product-addtocart-button > span').click()
  // })

  // it('choose product invalid, tanpa pilih warna', () => {
  //   cy.visit('https://magento.softwaretestingboard.com/men/tops-men/jackets-men.html')
  //   //pilih product
  //   cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
  //   //pemilihan size, warna, jumlah 
  //   cy.get('#option-label-size-143-item-168').click()
  //   // cy.get('#option-label-color-93-item-50').click()
  //   cy.get('#qty').clear()
  //   cy.get('#qty').type('2')
  //   cy.get('#product-addtocart-button > span').click()
  // })
})