const { it } = require("mocha");

const CHECKBOX = '[type="checkbox"]'

describe('Handling checkboxes', () => {
    it('Should be able top select/unselect a check box', () => {

        cy.visit('the-internet.herokuapp.com/checkboxes')

        //Try to unselect the second checkbox
        cy.get(CHECKBOX).eq(1).click()

        //Verify all checkboxes are unselected
        cy.get(CHECKBOX).filter(":not([checked])").should("have.length", 2);

        //Loop Over all checkboxes again the select all
        cy.get(CHECKBOX).filter(":not([checked])").then(item => {
            cy.get(item).click({multiple : true});
        })
    });
    it('')
});
