const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const RegisterPage = require('../../pages/RegisterPage');

const registerPage = new RegisterPage();

Given('the user is on the registration page for user4', () => {
    registerPage.visit();
    cy.screenshot('URL-HomePage');
    registerPage.registerButton();
    cy.screenshot('Display Amount: registration-page');
});

When('the user fills out all required fields with valid information for user4', () => {
    cy.fixture('registerData').then((data) => {
        registerPage.fillRequiredFields(data.user4);
        cy.screenshot('Display Amount: filled-fields');
  });
});

When('clicks the Register button', () => {
  registerPage.submit();
  cy.screenshot('Duplicate Entry: after-submit');
});

Then('the user should see a Welcome message confirming account creation', () => {
  registerPage.getSuccessMessage().should('be.visible');
  cy.screenshot('Display Amount: success-message');
});

Then('the user navigates to the Account Overview page', () => {
  registerPage.goToAccountOverview();
  cy.screenshot('Display Amount: account-overview-page');
});

Then('the user should see the Total Amount displayed', () => {
  registerPage.getTotalAmount().then((amountText) => {
    cy.log('Total Amount:', amountText);
    console.log('Total Amount:', amountText);
    expect(amountText).to.match(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/); // Regex to match currency format
  });
  cy.screenshot('Display Amount: total-amount-displayed');
});