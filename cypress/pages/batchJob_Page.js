class batchJob {
    elements = {
      bgRemovalCard: () => cy.xpath("//body[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[1]/div[1]"),
      dragAndDropFile: () => cy.get(".MuiBox-root.css-1lyiwop"),
      scrollPage: () => cy.get("div[class='css-1dxaxhk'] div[class='css-s45zbz']"),
      viewAllBtn: () => cy.get('.css-1dxaxhk > .css-s45zbz > .css-1uwonur > .css-1a2693u > span'),
      selectPreset: () => cy.get('.css-b0rtne > :nth-child(2)'),
      createBtn: () => cy.get("div[class='css-1dxaxhk'] div[class='user-selection-disable css-1fwyhi3']")
    }
  
    clickBgCard() {
      this.elements.bgRemovalCard().click();
    }
  
    uploadFile() {
      this.elements.dragAndDropFile().attachFile('Page_1.jpg', { subjectType: 'drag-n-drop' });
    }
  
    scrollHomepage() {
      this.elements.scrollPage().scrollIntoView({ duration: 2000 });
    }
  
    clickViewAll() {
      this.elements.viewAllBtn().click();
    }
  
    selectMarketPlace() {
      this.elements.selectPreset().click();
    }
  
    clickCreateBtn() {
      this.elements.createBtn().click();
    }
  }
  
  module.exports = new batchJob();
  