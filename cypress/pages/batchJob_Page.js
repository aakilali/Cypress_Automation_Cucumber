class batchJob {
    elements = {
      bgRemovalCard: () => cy.get("body div[id='__next'] div[class='css-1uyx16w'] div[class='styles_container__ofj4m'] div[class='styles_container__uQ2BQ'] div[class='styles_toolsContainer__aXoeX'] div[class='styles_listContainer__u4M8u'] div:nth-child(1) img:nth-child(1)"),
      dragAndDropFile: () => cy.get(".MuiBox-root.css-8fyee6"),
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
  