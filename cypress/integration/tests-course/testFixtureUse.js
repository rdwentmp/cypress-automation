/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import HomePage from '../../support/pageObjects/HomePage'

describe('Frames suite', () =>  
{
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data)
        {
            this.data=data      
        })
        // create object for Object model
        const homePage= new HomePage()

    })

    it('Use fixture test case', function() {
        // create object for Object model
        const homePage= new HomePage()
        cy.visitAngularPractice()
        homePage.getEditBox().type(this.data.name)
        homePage.getEmail().type(this.data.mail)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBiding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', '2')
        homePage.getEnterpreneaur().should('be.disabled')
    })
})