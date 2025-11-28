const { Before } = require('cypress-cucumber-preprocessor/steps/index')
const testclss = require ('../pages/test_page')

describe('My First Test', () => {

    BeforeEach(()=>{
        cy.login1();
    })

    it('My First Test', () =>{
        page.clickAiTaskDisable().click();
    } )
})