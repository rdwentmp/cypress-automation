// <reference types="Cypress" />

describe('My first test suite', function() {
        
    it('My first test case', () => {
        cy.visitAutomationPractice()
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains("Top").click()
        cy.url().should('include', 'top')
    })
})