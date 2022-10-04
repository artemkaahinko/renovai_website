import Links from "../Harvy_Norman/links.json"

class Test_logic {

ifreme(){ return cy.get('#renovai-frame-0') };

cookieAccept(){ return cy.get('#onetrust-accept-btn-handler') };

closecbar () { return cy.get('#cbar_POP2_28703>.cbar-close-button') };

randomURL(){
    const myArray = JSON.stringify(Links);
    const rand = Math.floor(Math.random()*myArray.length);
    const rUrl = myArray[rand];
    return rUrl
};

test_for_be_visible_chairs(){
    cy.visit(this.randomURL());
    this.cookieAccept().click();
    this.closecbar().click();
    cy.scrollTo(0, 1630);
    return this.ifreme().should('be.visible');
}
}
export default Test_logic