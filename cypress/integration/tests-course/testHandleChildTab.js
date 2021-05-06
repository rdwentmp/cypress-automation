/// <reference types="Cypress" />

describe('My fourth test suite', function() {
        
    it('My fourth test case', () => {
        cy.visitAutomationPractice()
        
        //show alert
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert', (str) =>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'rahulshettyacademy.com/#/index')
        
        cy.go('back')
    })
})