Cypress.Commands.add('ketik', (selector, text) => {
    cy.get(selector).should('be.visible').type(text);
});
