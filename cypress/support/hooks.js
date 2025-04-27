import { Before } from "cypress-cucumber-preprocessor/steps";

// Hook that runs before every scenario
Before(() => {
  cy.login1();
});
