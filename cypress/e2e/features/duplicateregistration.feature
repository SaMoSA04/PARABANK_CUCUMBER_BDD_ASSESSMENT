Feature: User Registration and Duplicate Username Handling
  Scenario: Register a new user successfully
    Given the user is on the registration page for user3
    When the user fills out all required fields with valid information with User3 data
    Then the user should see a message confirming account creation for User3
    Then the user clicks on Log Out and selects Registration link again
    Then the user fills out all the fields with existing username
    Then the user submits the registration form
    Then the user should see error messages indicating username already exists