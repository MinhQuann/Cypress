describe('Exploring default command time out', {defaultCommandTimeout: 5000}, ()=>{
    it('should be able to apply custom default time out', () => {
        cy.visit("/login")
        cy.get("#test", {timeout: 10000}).type("abc") //set time out riêng
        

    })
    
})