describe('Test_HarvyNorman_Rug_AreaRug_Rectangular.', () => {
    before ('Vist the page',()=>{
      cy.visit(Cypress.config().HN_Rug);
      if (!Cypress.config().isCookieBarEnabled){}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_Rug);
        cy.title().should('contain', 'Louis De Poortere Rug');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('#renovai-frame-0').should('be.visible');
      })
    })