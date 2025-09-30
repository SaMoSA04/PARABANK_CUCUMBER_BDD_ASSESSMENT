# PARABANK_CUCUMBER_BDD_ASSESSMENT
Automation for creating an account in Parabank.parasoft.com using Cypress Cucumber BDD Framework

# Testcase Excel File
AssessmentTestCases.xlsx

# BDD Feature Files 
Feature files are present under:
PATH: `cypress/e2e/features`

# POM Files
POM Files are created for Registration Page and Login Page
They can be found under:
PATH: `cypress/e2e/pages`

# Test Script Definition Files
The Test Script files in accordance with the Feature Files are defined here.
Utilizing the POM Structure the scripts are divided into two Folders.
PATH: A. `cypress/e2e/step_definitions/login`
PATH: B. `cypress/e2e/step_definitions/register`

# Test Data
Test data for the scenarios are defined here.
Separate files are maintained to avoid ambiguity.
PATH: `cypress/fixtures`

# Cucumber Configuration
This Cypress plugin configurations integrates Cypress with the Cucumber Preprocessor using Webpack.
It uses a custom Webpack config to preprocess `.feature` files, enabling BDD-style testing integration.
The setup also defines a custom Cypress task `log` that allows printing message to the Console during execution.
PATH: `cypress/plugins`

# Screenshots and Videos
After execution of the Test Scripts the screenshots and videos of each script is maintained separately.
To achieve this use the SYNTAX - `npx cypress run --spec "cypress/e2e/features/register.feature" --config videosFolder=cypress/videos/register,screenshotsFolder=cypress/screenshots/register`
PATH: A. `cypress/screenshots`
PATH: B. `cypress/videos`

# Webpack Configuration
This is a Webpack config file used to support Cucumber `.feature` files.
It defines rule to process `.feature` files using `cypress-cucumber-preprocessor/loader`.
The resolver is set up to handle `.js`, `.json` and `.feature` file extensions, allowing Cypress to correctly identify and compile these test-related files during preprocessing
PATH: `cypress/webpack.config.js`

# Cypress Configuration
This Cypress configuration file sets up test automation with Cucumber Preprocessor integration using `@badeball/cypress-cucumber-preprocessor` and Webpack.

Key Features include:
• Asynchronous setup of the Cucumber Preprocessor plugin supporting `.feature` files.
• Custom Cypress task `log` to output message directly to the Terminal for Debugging.
• Webpack preprocessing with specific loader configuration to handle `.feature` files with options derived from Cypress Config.
• [Not working at Present] Automatic renaming of recorded test videos after each spec run, prefixing filenames with `PASS` or `FAIL` based on test results.
• [Not working at Present] Usage of the `mochawesome` reporter for detailed HTML and JSON test reports with charts and timestamped filenames.
• [Not working at Present] Configuration of viewport size and test file patterns supporting both JavaScript and feature files.
• Modular structure exposing both `defineConfig` Cypress config and `setupNodeEvents` for flexible plugin management.