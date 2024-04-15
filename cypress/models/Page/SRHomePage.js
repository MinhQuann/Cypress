import { HeroComponent } from "../components/sr/HeroComponents";

export class SRHomePage {

    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMP_SEL));
    }

    getHeroComponent(){
        let title = '';
        this.heroComponent().cardTitle.each(($title) => 
        {   
            title = $title.text().trim();
        })
        return new Cypress.Promise(resolve => 
            cy.wrap('').then(() =>  resolve(title))
        )
    }


}