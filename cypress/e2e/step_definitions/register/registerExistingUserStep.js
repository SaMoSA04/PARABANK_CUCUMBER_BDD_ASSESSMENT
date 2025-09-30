const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const RegisterPage = require('../../pages/RegisterPage');

const registerPage = new RegisterPage();

/*
 For execution of this file ALONE, I will be registering the user and again trying to register with the same username to test existing user scenario.
 This is for demonstration to keep the data within the session.
 Steps: 
 • Launch the URL and navigate to Registration page
 • Fill out all the required fields and submit the form
 • Verify account creation success message
 • Log out and navigate to Registration page again
 • Fill out the form again with the same username
 • Submit the form and verify error message for existing username
*/

Given('the user is on the registration page for user3',  () => {
  registerPage.visit();
  cy.screenshot('URL-HomePage');
  registerPage.registerButton();
  cy.screenshot('Existing User: registration-page');
});

When('the user fills out all required fields with valid information with User3 data', () => {
  cy.fixture('registerData').then((data) => {
    registerPage.fillRequiredFields(data.user3);
    cy.screenshot('Existing User: filled-fields');
    registerPage.submit();
  });
});

Then('the user should see a message confirming account creation for User3', () => {
  registerPage.getSuccessMessage().should('be.visible');
  cy.screenshot('Existing User: success-message');
});

Then('the user clicks on Log Out and selects Registration link again', () => {
  registerPage.logoutButton();
  registerPage.registerButton();
  cy.screenshot('Existing User: registration-page-again');
});

Then('the user fills out all the fields with existing username', () => {
  cy.fixture('registerData').then((data) => {
    registerPage.fillRequiredFields(data.user3);
    cy.wrap(data.user3.errorMessage).as('expectedErrorMessage');
    cy.screenshot('Duplicate Entry: filled-fields');
  });
});

Then('the user submits the registration form', () => {
  registerPage.submit();
  cy.screenshot('Duplicate Entry: after-submit');
});

Then('the user should see error messages indicating username already exists', () => {
  cy.get('@expectedErrorMessage').then((errMessage) => {
    registerPage.getErrorMessage(errMessage).should('be.visible');
  });
  cy.screenshot('error-message-existing-username');
});