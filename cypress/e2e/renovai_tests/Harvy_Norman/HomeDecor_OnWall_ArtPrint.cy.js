describe('Test_HarvyNorman_HomeDecor_OnWall_ArtPrint', () => {
    before ('Vist the page',()=>{
      cy.visit(Cypress.config().HN_HomeDecor);
      if (!Cypress.config().isCookieBarEnabled){}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_HomeDecor);
        cy.title().should('contain', 'Zodiac');
        cy.get('#onetrust-accept-btn-handler').click();
         cy.get('.cbar-close-button').click();
        cy.get('#renovai-frame-0').should('be.visible');
      })
    })
   