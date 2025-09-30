Feature: User Login

    Scenario: Successful login after registration
        Given the user is on the login page
        When the user enters correct username and password
        And Clicks on the Login button
        Then the account dashboard should ne displayed

    Scenario: Login with blank username and password
        Given the user is on the login page
        When the user leaves blank username and password fields blank
        And Clicks on the Login button
        Then an error message should appear indicating required fields

    Scenario: Login with Invalid password
        Given the user is on the login page
        When the user enters a valid username and incorrect password
        And Clicks on the Login button
        Then an error message should appear indicating Invalid credentials