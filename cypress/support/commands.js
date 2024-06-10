import loginPage from "./pageObject/magento/loginPage";

Cypress.Commands.add('ketik', (selector, text) => {
    cy.get(selector).should('be.visible').type(text);
});

Cypress.Commands.add('login', () => {
    cy.visit('customer/account/login/');
    loginPage.inputEmail(Cypress.env("envemail")); //using env variable
    loginPage.inputPassword(Cypress.env("envpassw")); //using env variable
    loginPage.clickLoginButton();
    cy.url().should('include', '/customer/account'); 
})

Cypress.Commands.add('chooseproduct', () => {
    cy.visit('men/tops-men/jackets-men.html')
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    //pemilihan size, warna, jumlah
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').clear()
    cy.get('#qty').type('2')
    cy.get('#product-addtocart-button > span').click()
    
})