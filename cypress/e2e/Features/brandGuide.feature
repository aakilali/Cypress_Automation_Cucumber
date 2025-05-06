Feature: Create Brand Guide

  Scenario: Verify the brand guide creation journey
    Given the user opens the homepage and logs in
    When the user clicks on the account icon
    Then the user clicks on the profile button
    Then the user navigates to the Brand Guide tab
    Then the user clicks the Create button
    Then the user enters the brand name
    Then the user selects the checkbox
    Then the user clicks the Create Brand Guide button
