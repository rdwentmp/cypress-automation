/// <reference types="Cypress" />

describe('My href test suite', function() {
        
    it('My href test case', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.get('#opentab').then(function(el)
        {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)
        })
      
    })
})