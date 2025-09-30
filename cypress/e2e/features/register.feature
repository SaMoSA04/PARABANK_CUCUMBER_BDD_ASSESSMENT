Feature: User Registration
    Scenario: Register with valid credentials
        Given the user is on the registration page for user1
        When the user fills out all required fields with valid information
        Then the user should see a message confirming account creation