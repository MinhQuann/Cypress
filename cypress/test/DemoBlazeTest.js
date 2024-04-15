
import DemoBlazePage from '../models/Page/DemoBlazePage'
import PRODUCTS from '../test/Product.json'

describe('Demo Blaze Test', () => {


    it('Should be able to get hero card title', () => {

        cy.visit('https://demoblaze.com');
        new DemoBlazePage().getAllCardData().then(allCardData => {
    
            cy.wrap('').then(() =>{
                //cy.log(JSON.stringify(allCardData));
                expect(allCardData).to.be.deep.eq(PRODUCTS)
            })
        })
        
    });


});