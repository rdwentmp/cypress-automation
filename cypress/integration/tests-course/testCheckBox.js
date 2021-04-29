/// <reference types="Cypress" />

describe('My third test suite', function() {
        
    it('My third test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')

        cy.get('input[type="checkbox"]').check(['option1','option2','option3']).should('be.checked')
    })
})