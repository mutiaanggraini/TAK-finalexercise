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