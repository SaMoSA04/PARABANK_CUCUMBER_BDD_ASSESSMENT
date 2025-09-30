Feature: User Registration
    Scenario: Register with valid credentials
        Given the user is on the registration page for user1
        When the user fills out all required fields with valid information
        Then the user should see a message confirming account creation

    @only
    Scenario: Register with missing last name field
        Given the user is on the registration page for user2
        When the user submits the form with missing last name field
        Then the user should see error messages indicating last name field is required

    Scenario: Register with Existing Username
        Given the user is on the registration page for user3
        When the user fills out all required fields with an existing username
        And the user submits the registration form
        Then the user should see error messages indicating username already exists