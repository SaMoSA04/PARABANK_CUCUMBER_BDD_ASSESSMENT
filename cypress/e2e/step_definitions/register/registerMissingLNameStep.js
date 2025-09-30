const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const RegisterPage = require('../../pages/RegisterPage');

const registerPage = new RegisterPage();

/*
  Steps:
  • Launch the URL and navigate to Registration page
  • Fill out all the required fields, except last name, and submit the form
  • Verify error message for missing last name field
*/


Given('the user is on the registration page for user2',  () => {
  registerPage.visit();
  cy.screenshot('URL-HomePage');
  registerPage.registerButton();
  cy.screenshot('registration-page');
});

When('the user submits the form with missing last name field', () => {
  cy.fixture('registerData').then((data) => {
    registerPage.fillLastNameMissing(data.user2);
    cy.screenshot('filled-fields-missing-lname');
    registerPage.submit();
    cy.wrap(data.user2.errorMessage).as('expectedErrorMessage');
  });
});

Then('the user should see error messages indicating last name field is required', () => {
  cy.get('@expectedErrorMessage').then((errMessage) => {
    registerPage.getErrorMessage(errMessage).should('be.visible');
  });
  cy.screenshot('error-message-missing-lname');
});