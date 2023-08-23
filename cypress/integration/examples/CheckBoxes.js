/// <reference types="Cypress" />

describe('My Test Suite', function()
{

  it('My First Test Case', function()
  {
    
    // open url
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.wait(2000)

    // checked the option1 checkbox
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

    // uncehck the option1 check box
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    
    // check the value of option2 and option3 check boxes
    cy.get('input[type="checkbox"]').check(['option2','option3'])

    
  })  


})