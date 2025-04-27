Feature: Batch Job

  
  Scenario: Create the BG job
    Given the user open the homepage
    When the user clicks on the BG remove card
    Then the user uploads a file
  
  Scenario: Create the job with aitaskdisable preset
    Given the user open the homepage
    When the user scrolls up the homepage
    When the user clicks on the aitaskdisable preset
    Then the user uploads a file

