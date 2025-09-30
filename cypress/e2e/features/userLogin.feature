Feature: Register the user and Login with the registered user

    Scenario: Register a new user successfully and login with the registered user
        Given the user is on the registration page for login user1
        When the user fills out all required fields with valid information with login user1 data
        Then the user should see a message confirming account creation for login user1
        Then the user clicks on Log Out
        Then the user fills out username and password fields with login user1 data
        Then the user should see the Total Amount displayed on the account overview page of user1
        Then the user will log out