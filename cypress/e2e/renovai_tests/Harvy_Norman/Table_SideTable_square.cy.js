describe('Test_HarvyNorman_Table_SideTable_square', () => {
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().HN_Table);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting HarvyNorman displays the correct title', () => {
      cy.visit(Cypress.config().HN_Table);
      cy.title().should('contain', 'Mainz Lamp Table');
      cy.get('#onetrust-accept-btn-handler').click();
      cy.get('#renovai-frame-0').should('be.visible');
    })
  })