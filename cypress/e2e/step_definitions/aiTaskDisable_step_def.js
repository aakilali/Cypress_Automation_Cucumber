import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

const aiTaskDisable = require ('../../pages/aiTaskDisable_page')

Given("the user opens the homepage",()=>{
    cy.login1();
    cy.wait(15000)
    
})

When("the user clicks on the AiTaskDisable preset",()=>{

    aiTaskDisable.clickAiTaskDisable();

})


Then("the user uploads the files",()=>{
    aiTaskDisable.uploadFile();

})