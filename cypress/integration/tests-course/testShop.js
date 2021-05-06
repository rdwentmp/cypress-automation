/// <reference types="Cypress" />


describe('Shop suite', () =>  
{
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data      
        })
    })

    it('Use fixture test case', function() {
        cy.visitAngularPractice()
        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('input[name="email"]:nth-child(2)').type(this.data.mail)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.data.name)
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
        cy.get('#inlineRadio3').should('be.disabled')
        cy.get(':nth-child(2) > .nav-link').click()

        // select each product from example table
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
    })
})
