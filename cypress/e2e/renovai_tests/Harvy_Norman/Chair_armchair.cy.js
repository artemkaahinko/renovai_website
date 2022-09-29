describe('Test_HarvyNorman_Chair_Armchair', () => {
    before ('Visit the page',()=>{
      cy.visit(Cypress.config().HN_Chair);
      if (!Cypress.config().isCookieBarEnabled) {}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_Chair);
        cy.title().should('contain', 'Roxy Armchair | Ireland');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.get('.cbar-close-button').click();
        cy.get('#renovai-frame-0').should('be.visible');
      })
    })