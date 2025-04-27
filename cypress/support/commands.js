// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
require('cypress-xpath');

Cypress.Commands.add('login1', () => {
    cy.visit("/"); // Adjust if login is part of homepage
    cy.wait(15000);
    cy.get(".styles_buttonGradient__L4b__.user-selection-disable").click();
    cy.get("#email").type('spd@yopmail.com');
    cy.get(".css-17catiw").click();
    cy.get("#otp").type("101010");
    cy.get(".css-17catiw").click();
    cy.log("successfully login");
    // cy.screenshot();
    // Assert login success (adjust as needed)
    // cy.url().should('not.include', '/login');
  });
  