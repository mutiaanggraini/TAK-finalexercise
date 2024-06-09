class LoginPage {
    email = '#email';
    password = '#pass';
    loginButton = '#send2';
    errorMsg = '.message-error > div';
    requiredEmailMsg = '#email-error';
    requiredPassMsg = '#pass-error';
    errorRequired = '.message-error > div';
    errorEmailMsg = '#email-error';


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

    verifyPassRequiredMsg(text) {
        cy.get(this.requiredPassMsg).should('contain.text', text);
    }

    verifyEmailRequiredMsg(text) {
        cy.get(this.requiredEmailMsg).should('contain.text', text);
    }


    verifyEmailMsg(text) {
        cy.get(this.errorEmailMsg).should('contain.text', text);
    }
}

export default new LoginPage();
