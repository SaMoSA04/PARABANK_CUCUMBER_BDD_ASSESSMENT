const {Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const RegisterPage = require('../../pages/RegisterPage');

const registerPage = new RegisterPage();

/*
  Steps:
  • Launch the URL and navigate to Registration page
  • Fill out all the required fields with valid information for user4
  • Submit the form
  • Verify account creation success message
  • Navigate to Account Overview page
  • Verify Total Amount is displayed
*/

Given('the user is on the registration page for user4', () => {
    registerPage.visit();
    cy.log('Navigated to Home Page');
    cy.screenshot('URL-HomePage').then(() => {
      cy.log('Home Page screenshot taken');
    });
    registerPage.registerButton();
    cy.log('Navigated to Registration Page');
    cy.screenshot('Display Amount: registration-page').then(() => {
      cy.log('Registration Page screenshot taken');
    });
});

When('the user fills out all required fields with valid information for user4', () => {
    cy.fixture('registerData').then((data) => {
        registerPage.fillRequiredFields(data.user4);
        cy.log('Filled all required fields with valid information for user4');
        cy.screenshot('Display Amount: filled-fields').then(() => {
          cy.log('Filled fields screenshot taken');
        });
  });
});

When('clicks the Register button', () => {
  registerPage.submit();
  cy.screenshot('Duplicate Entry: after-submit').then(() => {
    cy.log('After submit screenshot taken');
  });
});

Then('the user should see a Welcome message confirming account creation', () => {
  registerPage.getSuccessMessage().should('be.visible');
  cy.screenshot('Display Amount: success-message').then(() => {
    cy.log('Success message screenshot taken');
  });
});

Then('the user navigates to the Account Overview page', () => {
  registerPage.goToAccountOverview();
  cy.log('Navigated to Account Overview Page');
  cy.screenshot('Display Amount: account-overview-page').then(() => {
    cy.log('Account Overview Page screenshot taken');
  });
});

Then('the user should see the Total Amount displayed', () => {
  registerPage.getTotalAmount().then((amountText) => {
    cy.task('log', `Total Amount: ${amountText}`);
    cy.log(`Total Amount: ${amountText}`);
    expect(amountText).to.match(/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/); // Regex to match currency format
  });
  cy.screenshot('Display Amount: total-amount-displayed').then(() => {
    cy.log('Total Amount displayed screenshot taken');
  });
});