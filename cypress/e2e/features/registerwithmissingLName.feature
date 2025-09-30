Feature: User Registration with missing Last Name

    Scenario: Register with missing last name field
        Given the user is on the registration page for user2
        When the user submits the form with missing last name field
        Then the user should see error messages indicating last name field is required