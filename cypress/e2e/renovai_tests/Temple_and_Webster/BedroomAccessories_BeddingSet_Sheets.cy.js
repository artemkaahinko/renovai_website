describe('Test_Temple_Webster_BedroomAccessories_BeddingSet_Sheets', () => {
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().TandW_BedroomAccessories_Sheets);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_BedroomAccessories_Sheets);
      cy.title().should('contain', 'LauraAshley Wild Flower');
      cy.get('#tpw_renovai_frame').should('be.visible');
    })
  })