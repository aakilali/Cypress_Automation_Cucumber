class brandGuide {
    elements = {
        accountIcon: () => cy.get(".styles_buttonAccountPopOver__BaeUg > .MuiBox-root"),
        profileOption: () => cy.xpath("//span[normalize-space()='Profile']"),
        brandGuideTab: () => cy.contains('Brand Guide'),
        createBtn: () => cy.get('.css-69i1ev > .MuiButtonBase-root'),
        brandNameField: () => cy.get("input[name='brandName']"), // Update if needed
        checkbox: () => cy.get("input[type='checkbox']"),
        createbrandGuideBtn: () => cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.css-inu7jt")
    };

    clickOnAccountIcon() {
        this.elements.accountIcon().click();
    }

    clickOnProfile() {
        this.elements.profileOption().click();
    }

    clickOnBrandGuideTab() {
        this.elements.brandGuideTab().click();
    }

    clickOnCreate() {
        this.elements.createBtn().click();
    }

    enterBrandName(name = "Test_Brand") {
        this.elements.brandNameField().clear().type(name);
    }

    clickOnCheckbox() {
        this.elements.checkbox().check();
    }

    clickOnCreateBrandGuide() {
        this.elements.createbrandGuideBtn().click();
    }
}

module.exports = new brandGuide();
