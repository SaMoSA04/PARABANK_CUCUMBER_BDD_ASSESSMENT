// filepath: d:\parabank-cypress-bdd\cypress\e2e\step_definitions\registerStep.js
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const RegisterPage = require('../../pages/RegisterPage');

const registerPage = new RegisterPage();

/* Steps:
 • Launch the URL and navigate to Registration page
 • Fill out all the required fields with valid information
 • Submit the form
 • Verify account creation success message
*/

Given('the user is on the registration page for user1',  () => {
  registerPage.visit();
  cy.screenshot('URL-HomePage');
  registerPage.registerButton();
  cy.screenshot('registration-page');
});

When('the user fills out all required fields with valid information', () => {
  cy.fixture('registerData').then((data) => {
    registerPage.fillRequiredFields(data.user1);
    cy.screenshot('filled-fields');
    registerPage.submit();
  });
});

Then('the user should see a message confirming account creation', () => {
  registerPage.getSuccessMessage().should('be.visible');
  cy.screenshot('success-message');
});