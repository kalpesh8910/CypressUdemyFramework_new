/// <reference types="Cypress" />

describe('My sample Test', function(){

    it('My sample test', function(){
    
         // Open url
         cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    
         cy.wait(3000)
    
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {

            const text = $e1.text()

            if(text.includes("Python "))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                    const priceText = price.text()

                    expect(priceText).to.equal('25')
                })
            }

        })
    
    })
    
    })