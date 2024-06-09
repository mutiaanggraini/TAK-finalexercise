import loginPage from "../../support/pageObject/magento/loginPage"

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

  it('Login with invalid credentials', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail(data.invalidEmail);
      loginPage.inputPassword(data.invalidPassword);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMsg(data.errorMsg);
    });
  });

  it('Login with empty credentials', () => {
    loginPage.clickLoginButton();
    loginPage.verifyErrorMsg('This is a required field.');
  });

  it('Login with invalid email format', () => {
    cy.fixture('login').then((data) => {
      loginPage.inputEmail('invalid_email_format');
      loginPage.inputPassword(data.validPassword);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMsg('Please enter a valid email address.');
    });
  });
});
