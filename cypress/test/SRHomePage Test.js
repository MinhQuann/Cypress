import {SRHomePage, SRHomePage2} from '../models/Page/SRHomePage'

describe('SR Home Page Test', () => {

    it('should be able to print all the titles', () => {

        cy.visit('https://www.simplyrecipes.com/')
        cy.get('.card__title').each(($title, index) => 
        {   
            cy.log(index)
            cy.log($title.text().trim())
        })
 
    });

    it('should be able to able to interact with a compo', () => {
        cy.visit('https://www.simplyrecipes.com/')
        const srHomePage = new SRHomePage()
        srHomePage.heroComponent().cardTitle.each(($title, index) => 
        {   
            cy.log(index)
            cy.log($title.text().trim())
        })

    });

    it.only('Should be able to get hero card title', () => {
        cy.visit('https://www.simplyrecipes.com/')
        new SRHomePage().getHeroComponent().then(title => {
            cy.log(title)
            cy.wrap('').then(() =>{
                expect(title).to.be.eq('These Crispy Parmesan Potatoes Make Every Meal Better')
            })
        })
        
    });

    //These Crispy Parmesan Potatoes Make Every Meal Better


});