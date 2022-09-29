describe('Test_Temple_Webster_Storage_Cabinet_MediaUnit', () => {
    before ('Visit the page',()=>{
        cy.visit(Cypress.config().TandW_Storage_MediaUnit);
        if (!Cypress.config().isCookieBarEnabled) {}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_Storage_MediaUnit);
      cy.title().should('contain', 'Monument Furniture Home');
      cy.get('#tpw_renovai_frame').should('be.visible');
    })
  })