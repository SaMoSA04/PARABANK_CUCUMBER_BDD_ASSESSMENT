const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const LoginPage = require('../../pages/LoginPage');
const loginPage = new LoginPage();

/*
  Steps:
  • Launch the URL and navigate to Registration page
  • Fill out all the required fields with valid information with login user1 data
  • Submit the form
  • Verify account creation success message for login user1
  • Log out
  • Fill out username and password fields with login user1 data
  • Verify Total Amount is displayed on the account overview page of user1
  • Log out
*/

Given('the user is on the registration page for login user1',  () => {
    loginPage.visit();
    cy.screenshot('URL-HomePage');
    loginPage.registerLink();
});

When('the user fills out all required fields with valid information with login user1 data', () => {
  cy.fixture('loginData').then((data) => {
    loginPage.fillRequiredFields(data.user1);
    cy.screenshot('Login User: filled-fields');
    loginPage.registerButton();
  });
});

Then('the user should see a message confirming account creation for login user1', () => {
  loginPage.getSuccessMessage().should('be.visible');
  cy.screenshot('Login User: success-message');
});

Then('the user clicks on Log Out', () => {
  loginPage.logoutButton();
});

Then('the user fills out username and password fields with login user1 data', () => {
    cy.fixture('loginData').then((data) => {
        loginPage.userLogin(data.user1);
        cy.screenshot('Login User: after-login');
    });
});

Then('the user should see the Total Amount displayed on the account overview page of user1', () => {
  loginPage.getTotalAmount().then((amountText) => {
    cy.task('log', `Total Amount: ${amountText}`);
    cy.log(`Total Amount: ${amountText}`);
    expect(amountText).to.match(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/); // Regex to match currency format
  });
  cy.screenshot('Display Amount: total-amount-displayed').then(() => {
    cy.log('Total Amount displayed screenshot taken');
  });
});

Then('the user will log out', () => {
  loginPage.logoutButton();
});