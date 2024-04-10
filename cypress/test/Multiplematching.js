describe('Multiple elems matching interaction', () => {
    it('should be able to interact with list ò element', ()=>{
        
        cy.visit("/login")
        
        cy.get("button[type = 'button']").click()

        // // Use eq
        // cy.get("input").eq(0).type("vietinbank@yopmail.com")
        // cy.get("input").eq(1).type("Quan0810x@X")


        // //Use Closure
        // cy.get("input").then(items => {
        //     cy.get(items[0]).clear()
        //     cy.get(items[0]).type("vietinbank@yopmail.com")
        //     cy.get(items[1]).clear()
        //     cy.get(items[1]).type("Quan0810x@X")
        
        // })
        //Use .each
        cy.get("input").each((items, index) => {
            cy.get(items).type("something")
        })


        // cy.get("button[type = 'submit']").click()

        cy.wait(3000)
    })
})
