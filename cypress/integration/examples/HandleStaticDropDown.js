/// <reference types="Cypress" />

describe('Static check boxes', function()
{

it('my drop down', function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('select').select('Option2').should('have.value','option2')

})

})