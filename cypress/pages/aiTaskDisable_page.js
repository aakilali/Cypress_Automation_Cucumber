class AiTaskDisable {

    elements = {
        aiTaskDisableCard: () => cy.xpath("//body/div[@id='__next']/div[@class='css-1uyx16w']/div[@class='css-waorxp']/div[@class='css-jeicyv']/div[@class='css-bdzyc2']/div/div[@class='css-15tw7b0']/div[@class='css-54qy1a']/div[@class='css-jg659y']/div[2]/div[1]/div[1]"),
        
        uploadCta: () => cy.get(".MuiBox-root.css-1lyiwop")
    }


    clickAiTaskDisable() {
        this.elements.aiTaskDisableCard().click();
    }


    uploadFile() {


        const imageFiles =[
            'All_format/11.jpg',
            'All_format/12.jpeg',
            // 'All_format/Image_ARW.ARW',
            // 'All_format/Image_cr2.cr2',
            // 'All_format/image_NEF.NEF',
            'All_format/Image_tif.tif',
            'All_format/Image_tiff.tiff',
            'All_format/Image_webp.webp',
            'All_format/markup_test1.png',
            'All_format/sample_1.nef'
        ];
        this.elements.uploadCta().attachFile(
            imageFiles.map((filePath) => ({ filePath })),
            { subjectType: 'drag-n-drop' }


        // this.elements.uploadCta().attachFile(
        //     [
        //         { filePath: 'Page_1.jpg' },
        //         { filePath: 'Page_2.jpeg' }
        //     ],
        //     { subjectType: 'drag-n-drop' }
        );
    }
}

module.exports = new AiTaskDisable();
