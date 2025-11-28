class AmazonListing {
  elements = {
    amazonListingCard: () =>
      cy.get(
        "body div[id='__next'] div[class='css-1uyx16w'] div[class='styles_container__ofj4m'] div[class='styles_container__uQ2BQ'] div[class='styles_toolsContainer__aXoeX'] div[class='styles_listContainer__u4M8u'] div:nth-child(4) img:nth-child(1)"
      ),

    uploadFileCta: () =>
    //   cy.get("input[type='file']")/
        cy.xpath("//input[@type='file']")
  };

  clickAmazonListing() {
    this.elements.amazonListingCard().click();
  }

  uploadFile() {
    
    this.elements.uploadFileCta().selectFile('cypress/fixtures/Page_3.png', { force: true });
    
  }
}

module.exports = new AmazonListing();
