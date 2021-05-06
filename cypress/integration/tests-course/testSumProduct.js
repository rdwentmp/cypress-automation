/// <reference types="Cypress" />
import ProductPage from '../pageObjects/ProductPage'


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
        const productPage=new ProductPage()
            cy.visit("https://rahulshettyacademy.com/angularpractice/shop")

        // select each product from example table
        this.data.productName.forEach(function(element) {
            cy.selectProduct(element)
        })
        // Checkout
        productPage.checkOutButton().click()

        var sum=0
    
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount=$el.text()
            var res= amount.split(" ")
            res=res[1].trim()
            sum=Number(sum)+Number(res)
        }).then(function(){
            cy.log(sum)
        })
        cy.get('h3 strong').then(function(element)
        {
            const amount=element.text()
            var res= amount.split(" ")
            var total=res[1].trim()
            expect(Number(total)).to.equal(sum)
        })
        cy.contains('Checkout').click()
        cy.get('#country').type('Poland')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force: true})
        cy.contains('Purchase').click()
        cy.get('strong').should('have.text', 'Success!')

    })
})

