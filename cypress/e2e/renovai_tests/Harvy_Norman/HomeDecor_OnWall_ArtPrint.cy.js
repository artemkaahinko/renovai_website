import SelectorsForHN from "../../PageObject/Harvy_Norman"
describe('Test_HarvyNorman_HomeDecor_OnWall_ArtPrint', () => {
  const selectorsForHN = new SelectorsForHN;
    before ('Vist the page',()=>{
      cy.visit(Cypress.config().HN_HomeDecor);
      if (!Cypress.config().isCookieBarEnabled){}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_HomeDecor);
        cy.title().should('contain', 'Zodiac');
        selectorsForHN.cookieAccept()
        .click();
        selectorsForHN.closecbar()
        .click();
        selectorsForHN.ifreme()
        .should('be.visible');
      })
    })
   