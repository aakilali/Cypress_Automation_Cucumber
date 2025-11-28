Feature: Login functionality

    @TagName
    Scenario: Login the page 
        Given Home page is opened
        When A user click on login button 
        Then A user enter the email id "spd@yopmail.com"
        And A user click on send OTP button
        Then A user enter the OTP "101010"
        And A user click on submit button