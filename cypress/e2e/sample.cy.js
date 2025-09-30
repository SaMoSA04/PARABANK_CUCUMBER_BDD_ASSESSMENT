it('should visit parabank', () => {
  cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
  cy.wait(5000);
});