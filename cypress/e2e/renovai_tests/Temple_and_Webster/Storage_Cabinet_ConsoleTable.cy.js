describe('Test_Temple_Webster_Storage_Cabinet_ConsoleTable', () => {
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().TandW_Storagenpm);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_Storagenpm);
      cy.title().should('contain', 'Temple & Webster Boras');
      cy.get('#tpw_renovai_frame').should('be.visible');
    })
  })