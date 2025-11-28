import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
const brandGuide = require('../../pages/brandGuide_page');

Given("the user opens the homepage and logs in", () => {
  cy.login1();
  cy.wait(15000);
});

When("the user clicks on the account icon", () => {
  brandGuide.clickOnAccountIcon();
  cy.wait(5000);
});

Then("the user clicks on the profile button", () => {
  brandGuide.clickOnProfile();
  cy.wait(5000);
});

Then("the user navigates to the Brand Guide tab", () => {
  brandGuide.clickOnBrandGuideTab();
  cy.wait(5000);
});

Then("the user clicks the Create button", () => {
  brandGuide.clickOnCreate();
  cy.wait(5000);
});

Then("the user enters the brand name", () => {
  brandGuide.enterBrandName("Test_Brand");
});

Then("the user selects the checkbox", () => {
  brandGuide.clickOnCheckbox();
  cy.wait(3000);
});

Then("the user clicks the Create Brand Guide button", () => {
  brandGuide.clickOnCreateBrandGuide();
  cy.wait(5000);
});
