import SelectorsForHN from "../../PageObject/Harvy_Norman"
describe('Test_HarvyNorman_Chair_Armchair', () => {
    const selectorsForHN = new SelectorsForHN;
    before ('Visit the page',()=>{
      cy.visit(Cypress.config().HN_Chair);
      if (!Cypress.config().isCookieBarEnabled) {}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_Chair);
        cy.title().should('contain', 'Roxy Armchair | Ireland');
        selectorsForHN.cookieAccept()
        .click();
        selectorsForHN.closecbar()
        .click();
        selectorsForHN.ifreme()
        .should('be.visible');
      })
    })