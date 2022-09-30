import SelectorsForHN from "../../PageObject/Harvy_Norman"
describe('Test_HarvyNorman_Table_SideTable_square', () => {
  const selectorsForHN = new SelectorsForHN;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().HN_Table);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting HarvyNorman displays the correct title', () => {
      cy.visit(Cypress.config().HN_Table);
      cy.title().should('contain', 'Mainz Lamp Table');
      selectorsForHN.cookieAccept()
      .click();
      selectorsForHN.closecbar()
      .click();
      selectorsForHN.ifreme()
      .should('be.visible');
    })
  })