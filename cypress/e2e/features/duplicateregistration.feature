Feature: User Registration and Duplicate Username Handling

  Background:
    Given the user is on the registration page

  Scenario: Register a new user successfully
    When the user fills out all required fields with valid information with User4 data
    Then the user should see a message confirming account creation for User4

  Scenario: Register with an existing username
    When the user fills out all required fields with an existing username
    And the user submits the registration form
    Then the user should see error messages indicating username already exists