/// <reference types="Cypress" />

describe('My Second Test Suite', function()
{

  it('My Second Test Case', function()
  {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    // Selenium get hit url in browser, cypress get acts like findlement of selenium

    // search the product
    cy.get('.search-keyword').type('ca')

    cy.wait(3000)

    // parent - child chaining
    cy.get('.products').as('productLocator') 

    cy.wait(3000)

    // click on add to cart
   // cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){

    console.log('sf')
    //})

    cy.wait(3000)

    cy.get('@productLocator').find('.product').each(($el, index, $list) => {
      
    const textVeg = $el.find('h4.product-name').text()

      if(textVeg.includes('Cashews'))
      {
      //  $e1.find('button').click()
      cy.wrap($el).find('button').click()
      cy.wait(3000)
          ///el.contains('ADD TO CART').click()
      }
      })

      cy.get('.cart-icon > img').click()
      cy.wait(3000)
      cy.contains('PROCEED TO CHECKOUT').click()
      cy.wait(3000)

      cy.contains('Place Order').click()
  })  

})