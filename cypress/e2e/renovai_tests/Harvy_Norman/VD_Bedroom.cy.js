import SelectorsForHN from "../../PageObject/Harvy_Norman"
describe('Test_HarvyNorman_VD_Bedroom', () => {
  const selectorsForHN = new SelectorsForHN;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().HN_VD);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting HarvyNorman displays the correct title', () => {
      cy.visit(Cypress.config().HN_VD);
      cy.title().should('contain', 'Harvey Norman Virtual Designer');
      selectorsForHN.cookieAccept()
        .click();
      // cy.contains("Living Room").click();
    })
  })