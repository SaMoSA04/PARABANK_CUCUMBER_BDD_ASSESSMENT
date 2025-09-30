class LoginPage {
    visit() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
        cy.wait(3000); // wait for 3 seconds
    }

    userLogin(data){
        cy.xpath('//input[@name="username"]').type(data.username);
        cy.xpath('//input[@name="password"]').type(data.password);
        cy.xpath('//input[@value="Log In"]').click();
        cy.wait(2000); // wait for 2 seconds
    }

    fillRequiredFields(data){
        cy.xpath('//input[@id="customer.firstName"]').type(data.firstName);
        cy.xpath('//input[@id="customer.lastName"]').type(data.lastName);
        cy.xpath('//input[@id="customer.address.street"]').type(data.address);
        cy.xpath('//input[@id="customer.address.city"]').type(data.city);
        cy.xpath('//input[@id="customer.address.state"]').type(data.state);
        cy.xpath('//input[@id="customer.address.zipCode"]').type(data.zip);
        cy.xpath('//input[@id="customer.phoneNumber"]').type(data.phone);
        cy.xpath('//input[@id="customer.ssn"]').type(data.ssn);
        cy.xpath('//input[@id="customer.username"]').type(data.username);
        cy.xpath('//input[@id="customer.password"]').type(data.password);
        cy.xpath('//input[@id="repeatedPassword"]').type(data.password);
    }

    verifyUserLoggedIn(firstName){
        cy.xpath(`//h1[contains(text(),"${firstName}")]`).should('be.visible');
    }

    logoutButton(){
        cy.xpath('//a[text()="Log Out"]').click();
        cy.wait(1000); // wait for 1 second
    }

    registerButton(){
       cy.xpath('//input[@value="Register"]')
       .should('be.visible')
       .click();
    }

    registerLink(){
        cy.xpath('//a[text()="Register"]')
        .should('be.visible')
        .click();
    }

    getSuccessMessage(){
        return cy.xpath('//h1[contains(text(),"Welcome")]');
    }

    getTotalAmount(){
        return cy.xpath("//td/b[text()='Total']/ancestor::td/following-sibling::td/b").invoke('text');
    }

}
module.exports = LoginPage;