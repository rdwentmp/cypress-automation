/// <reference types="Cypress" />

describe('My fourth test suite', function() {
        
    it('My fourth test case', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

        //Static dropdown
        cy.get('select').select('option3').should('have.value','option3')

        //Dynamic dropdown
        cy.get('#autocomplete').type('pol')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==='Poland'){
                $el.click()
            }
        })
        //autocomplete
        cy.get('#autocomplete').should('have.value', 'Poland')
        //visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})