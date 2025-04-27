import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";

const batchjobWithLogin = require ('../../pages/batchjobWithLogin_Page')

Given("the user open the homepage",()=>{
    cy.login1();
    cy.wait(10000);

})

When("the user clicks on the BG remove card",()=>{
    batchjobWithLogin.clickBgCard();
    
})
Then("the user uploads a file",()=>{
    batchjobWithLogin.uploadfile();
    cy.wait(20000);

})

When("the user scrolls up the homepage",()=>{
    batchjobWithLogin.clickOnHeader();
})

When("the user clicks on the aitaskdisable preset",()=>{
        batchjobWithLogin.clickAiTaskDisable();
    })


