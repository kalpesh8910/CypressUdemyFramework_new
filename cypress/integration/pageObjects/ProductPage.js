class ProductPage

{

clickCheckoutlink()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}

clickCheckOutButton()
{
    return cy.get(':nth-child(4) > :nth-child(5) > .btn')
}

enterLocation()
{
    return cy.get('#country')
}

selectCountry()
{
    return cy.get('.suggestions > ul > li > a')
}

agreeCheckbox()
{
    return cy.get('.checkbox > label')
}

clickOnPurchase()
{
    return cy.get('.ng-untouched > .btn')
}

getTextSuccessMSg()
{
    return cy.get('.alert')
}

}

export default ProductPage