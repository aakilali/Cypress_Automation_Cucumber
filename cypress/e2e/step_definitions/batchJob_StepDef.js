import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const batchJob = require('../../pages/batchJob_Page');

Given('the user opens the homepage', () => {
  cy.login1();
  cy.wait(15000);
});

When("the user clicks on the Background Removal card", () => {
  batchJob.clickBgCard();
});

Then("the user drags and drops a file", () => {
  batchJob.uploadFile();
  cy.wait(20000);
});

When("the user scrolls the homepage", () => {
  batchJob.scrollHomepage();
});

Then("the user clicks on the view all button on the Marketplace card", () => {
  batchJob.clickViewAll();
  cy.wait(5000);
});

Then("the user selects the marketplace", () => {
  batchJob.selectMarketPlace();
  cy.wait(5000);
});

Then("the user clicks on the create button", () => {
  batchJob.clickCreateBtn();
});
