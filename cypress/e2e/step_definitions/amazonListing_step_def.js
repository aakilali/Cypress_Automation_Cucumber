import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const amazonListing = require('../../pages/amazonListing_page');

Given("the user opens the homepage", () => {
  cy.login1();          // Make sure this custom command exists and works correctly
  cy.wait(15000);       // Optional: Replace with cy.intercept or wait for a visible element
});

When("the user clicks on the Amazon Listing card", () => {
  amazonListing.clickAmazonListing();
});

Then("the user uploads the required files", () => {
  amazonListing.uploadFile();    
});
