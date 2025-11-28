    class dresmaLoginFeature {

        elements = {
            loginBtn: ()=> cy.get(".styles_buttonGradient__L4b__.user-selection-disable"),
            userEmail: ()=> cy.get("#email"),
            sendOtpBtn: ()=> cy.get(".css-17catiw"),
            userOtp: ()=> cy.get("#otp"),
            submitBtn: ()=> cy.get(".css-17catiw")
        }

        clickLogin(){
            this.elements.loginBtn().click();
        }

        enterEmail (emailId){
            this.elements.userEmail().type(emailId);
        
        }

        otpBtn(){
            this.elements.sendOtpBtn().click();
        }

        enterOtp(otp){
            this.elements.userOtp().type(otp);
        }
        
        clickSubmit(){
            this.elements.submitBtn().click();  
        }
    }

    module.exports= new dresmaLoginFeature();