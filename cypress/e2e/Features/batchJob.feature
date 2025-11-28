Feature: Create batch job

  Scenario: Create a background removal job
    Given the user opens the homepage
    When the user clicks on the Background Removal card
    Then the user drags and drops a file

  Scenario: Create a marketplace job
    Given the user opens the homepage
    When the user scrolls the homepage
    And the user clicks on the view all button on the Marketplace card
    And the user selects the marketplace
    And the user clicks on the create button
    Then the user drags and drops a file
    
