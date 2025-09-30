const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const RegisterPage = require('../../pages/RegisterPage');

const registerPage = new RegisterPage();

/*
 For execution of this file ALONE, I will be registering the user and again trying to register with the same username to test existing user scenario.
 This is for demonstration to keep the data within the session.
*/
Given('the user is on the registration page',  () => {
  registerPage.visit();
  cy.screenshot('URL-HomePage');
  registerPage.registerButton();
  cy.screenshot('User 4: registration-page');
});

When('the user fills out all required fields with valid information with User4 data', () => {
  cy.fixture('registerData').then((data) => {
    registerPage.fillRequiredFields(data.user4);
    cy.screenshot('User 4: filled-fields');
    registerPage.submit();
  });
});

Then('the user should see a message confirming account creation for User4', () => {
  registerPage.getSuccessMessage().should('be.visible');
  cy.screenshot('User 4: success-message');
});

When('the user fills out all required fields with an existing username', () => {
  cy.fixture('registerData').then((data) => {
    registerPage.registerButton();
    registerPage.fillRequiredFields(data.user3);
    cy.wrap(data.user3.errorMessage).as('expectedErrorMessage');
    cy.screenshot('filled-fields');
  });
});

When('the user submits the registration form', () => {
  registerPage.submit();
  cy.wait('2000');
  cy.screenshot('after-submit');
});

Then('the user should see error messages indicating username already exists', () => {
  cy.get('@expectedErrorMessage').then((errMessage) => {
    registerPage.getErrorMessage(errMessage).should('be.visible');
  });
  cy.screenshot('error-message-existing-username');
});