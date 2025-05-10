import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const dresmaLoginFeature = require ('../../pages/dresmaLogin')



Given('Home page is opened', function() {
    cy.visit("/")
    cy.wait(15000)
    // cy.wait('@apiCall');
})

When("A user click on login button",()=>{

    // cy.get(".styles_buttonGradient__L4b__.user-selection-disable").click();
    dresmaLoginFeature.clickLogin();

})

Then("A user enter the email id {string}",(emailId)=> {

    // cy.get("#email").type(email_id);
    dresmaLoginFeature.enterEmail(emailId);
})

 And("A user click on send OTP button",()=>{

    // cy.get(".css-17catiw").click();
    dresmaLoginFeature.otpBtn();
    cy.wait(5000);

})

Then("A user enter the OTP {string}",(otp)=>{

    // cy.get("#otp").type(otp)
    dresmaLoginFeature.enterOtp(otp);
})

And("A user click on submit button",()=>{

    // cy.get(".css-17catiw").click()/
    dresmaLoginFeature.clickSubmit();
    cy.wait(5000)
})