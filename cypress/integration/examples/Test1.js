/// <reference types="Cypress" />

describe('My Test Suite', function()
{

  it('My First Test Case', function()
  {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    // Selenium get hit url in browser, cypress get acts like findlement of selenium

    // search the product
    cy.get('.search-keyword').type('ca')

    cy.wait(3000)

    // cy.get('.product:visible').should('have.length',4) // we get the error 

    // Verify product count
    cy.get('.product:visible').should('have.length',4)

    cy.wait(3000)

    // parent - child chaining
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').should('have.length',5)
//    cy.get('@productLocator').find('.product').should('have.length',4) 

    cy.wait(3000)

    // click on add to cart
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){

      console.log('sf')
    })

    cy.wait(3000)

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      
      const textVeg = $el.find('h4.product-name').text()

      if(textVeg.includes('Cashews'))
      {
          cy.wrap($el).find('button').click()
          cy.wait(3000)
          ///el.contains('ADD TO CART').click()
      }

      })

      cy.get('.brand').should('have.text','GREENKART')
      // this is the print in logs
      cy.get('.brand').then(function(logoelement)
      {
        cy.log(logoelement.text())

      })
      // cy.log(logo.text())

  })  

})