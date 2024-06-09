import loginPage from "../../support/pageObject/magento/loginPage";

describe('Verify Login Functionality on Magento', () => {
  beforeEach(() => {
    cy.visit('customer/account/login/');
  });

  it('Login with valid credentials', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail(data.validEmail);
      loginPage.inputPassword(data.validPassword);
      loginPage.clickLoginButton();
      cy.url().should('include', '/customer/account');
    });
  });

  it('Login with invalid password', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail(data.validEmail);
      loginPage.inputPassword(data.invalidPassword);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMsg(data.errorMsg);
    });
  });

  it('Login with invalid email', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail(data.invalidEmail);
      loginPage.inputPassword(data.validPassword);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMsg(data.errorMsg);
    });
  });

  it('Login with invalid email and invalid password', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail(data.invalidEmail);
      loginPage.inputPassword(data.invalidPassword);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMsg(data.errorMsg);
    });
  });

  it('Login with empty password', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail(data.validEmail);
      loginPage.clickLoginButton();
      loginPage.verifyPassRequiredMsg(data.requiredPassMsg);
    });
  });

  it('Login with empty email', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputPassword(data.validPassword);
      loginPage.clickLoginButton();
      loginPage.verifyEmailRequiredMsg(data.requiredEmailMsg);
    });
  });

  it('Login with invalid email format', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail('invalid_email_format');
      loginPage.inputPassword(data.validPassword);
      loginPage.clickLoginButton();
      loginPage.verifyEmailMsg(data.invalidEmailMsg);
    });
  });
});
