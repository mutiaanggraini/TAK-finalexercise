class LoginPage {
    email = '#email';
    password = '#pass';
    loginButton = '#send2';
    errorMsg = '.message-error > div';

    inputEmail(value) {
        cy.get(this.email).should('be.visible').type(value);
    }

    inputPassword(value) {
        cy.get(this.password).should('be.visible').type(value);
    }

    clickLoginButton() {
        cy.get(this.loginButton).click();
    }

    verifyErrorMsg(text) {
        cy.get(this.errorMsg).should('contain.text', text);
    }
}

export default new LoginPage();
