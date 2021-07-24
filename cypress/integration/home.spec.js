describe('Renders the home page', ()=>{
    it('Renders the home page correctly', ()=>{
        cy.visit("/");
        cy.get("#home");
    })
})