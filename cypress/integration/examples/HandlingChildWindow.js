/// <reference types="Cypress" />

describe('My sample Test', function(){

it('My sample test', function(){

     // Open url
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

     cy.wait(3000)

     // It will open the Open Tab button in new window
     cy.get('#opentab').click()

     // It will open tab in same window
     cy.get('#opentab').invoke('removeAttr','target').click()

})

})