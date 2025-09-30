Feature: User Registration and Display Amount
    Scenario: Register a user and display the amount on Account Overview page
        Given the user is on the registration page for user4
        When the user fills out all required fields with valid information for user4
        And clicks the Register button
        Then the user should see a Welcome message confirming account creation
        Then the user navigates to the Account Overview page
        Then the user should see the Total Amount displayed