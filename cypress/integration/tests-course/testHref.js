/// <reference types="Cypress" />

describe('My href test suite', function() {
        
    it('My href test case', () => {
        cy.visitAutomationPractice()
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
      
    })
})