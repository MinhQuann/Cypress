describe('Element Interaction', () => {

    //test method
    it('should be able to complete the form', () => {
        cy.log("Hello")

    })

    it('Click Login Outsid', () => {
        
        // Open the Login From Page
        cy.visit("/login")
        
        // find login outside button
        cy.get("button[type = 'button']").click()
        // find username
        cy.get("#basic_email").type("vietinbank@yopmail.com")
        // find password
        cy.get("#basic_pass").type("Quan0810x@X")
        // find login btn
        cy.get("button[type = 'submit']").click()
        //DEBUG purpose only
        // cy.wait(3000)
        //Verify Login Successs
    })

});


