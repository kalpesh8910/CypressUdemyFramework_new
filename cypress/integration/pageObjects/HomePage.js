class HomePage
{

getNameEditBox()
{
    return cy.get('input[name="name"]:nth-child(2)')
}

selectGender()
{
    return cy.get('select')
}

verifyNameField()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

verifyMinLength()
{
    return cy.get('input[name="name"]:nth-child(2)')
}

verifyEnterprenuarCheckbox()
{
    return cy.get('#inlineRadio3')
}

clickShopButton()
{
    return cy.get(':nth-child(2) > .nav-link')
}

}

export default HomePage