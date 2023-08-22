/// <reference types="Cypress" />

describe('My Test Suite', function()
{

  it('My First Test Case', function()
  {
    // Open url
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.wait(2000)

    cy.get('[value="radio2"]').check().should('be.checked')

  })  

})