class HomePage {
    getEditBox()
    {
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getTwoWayDataBiding()
    {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender()
    {
        return cy.get('select')
    }

    getEnterpreneaur()
    {
        return cy.get('#inlineRadio3')
    }

    getEmail()
    {
        return cy.get('input[name="email"]:nth-child(2)')
    }
}
export default HomePage;