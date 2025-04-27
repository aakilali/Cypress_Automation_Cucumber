class batchjobWithLogin {

    elements ={
        bgRemovalCard:()=> cy.xpath("//body/div[@id='__next']/div[@class='css-1uyx16w']/div[@class='styles_container__ofj4m']/div[@class='styles_container__uQ2BQ']/div[@class='styles_toolsContainer__aXoeX']/div[@class='styles_listContainer__u4M8u']/div[1]/img[1]"),
        uploadCta: ()=> cy.get(".MuiBox-root.css-1lyiwop"),
        homePageHeader: ()=> cy.get(".styles_header__ULbCR"),
        aiTaskDisableCard:()=>cy.xpath("//body/div[@id='__next']/div[@class='css-1uyx16w']/div[@class='css-waorxp']/div[@class='css-jeicyv']/div[@class='css-bdzyc2']/div/div[@class='css-15tw7b0']/div[@class='css-54qy1a']/div[@class='css-jg659y']/div[2]/div[1]/div[1]")
    
    }

    clickBgCard(){
        this.elements.bgRemovalCard().click();
    }
    uploadfile(){
        this.elements.uploadCta().attachFile(
            [
                {filePath:'Page_1.jpg'},
                {filePath:'Page_2.jpeg'}
            ], 
            { subjectType: 'drag-n-drop' });
    }
    clickOnHeader(){
        this.elements.homePageHeader().scrollIntoView({duration:5000});
    }

    clickAiTaskDisable(){
        this.elements.aiTaskDisableCard().click();
    }



}

module.exports =new batchjobWithLogin();