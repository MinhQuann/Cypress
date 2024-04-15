const Dropdown = "select[id='dropdown']";


describe('Dropdown', () => {
    it('Should be able to select dropdown option', () => {
        //Visit the URL
        cy.visit('https://the-internet.herokuapp.com/dropdown');

        //Select by index | Select Option1
        cy.get(Dropdown).select(1);

        //Select by index | Select Option2
        cy.get(Dropdown).select("2");

        //Select by visible text | Select Option1
        cy.get(Dropdown).select("Option 1");

        //Vẻify the selected option
        cy.get("select option:selected").invoke("text").should("eq", "Option 1");
    });
});