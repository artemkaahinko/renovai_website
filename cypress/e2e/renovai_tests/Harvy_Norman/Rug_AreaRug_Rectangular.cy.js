import SelectorsForHN from "../../PageObject/Harvy_Norman"
describe('Test_HarvyNorman_Rug_AreaRug_Rectangular.', () => {
  const selectorsForHN = new SelectorsForHN;
    before ('Vist the page',()=>{
      cy.visit(Cypress.config().HN_Rug);
      if (!Cypress.config().isCookieBarEnabled){}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_Rug);
        cy.title().should('contain', 'Louis De Poortere Rug');
        selectorsForHN.cookieAccept()
        .click();
        selectorsForHN.closecbar()
        .click();
        selectorsForHN.ifreme()
        .should('be.visible');
      })
    })