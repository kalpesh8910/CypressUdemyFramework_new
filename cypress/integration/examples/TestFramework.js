/// <reference types="Cypress" />

//import cypress from "cypress";
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";

// const { data } = require("cypress/types/jquery")

describe("Test Framework", function () {
  before(function () {
    // runs once before all tests in the block
    cy.fixture("example").then(function (data) {
      this.data = data; // this represent the entire class
    });
  });

  it("My framework", function () {

   const homepage = new HomePage();
   const productpage = new ProductPage();

   // Enter the URL
   cy.visit(Cypress.env("url") + "angularpractice/");

   cy.wait(5000);

   // Enter the name
   homepage.getNameEditBox().type(this.data.name);

   cy.wait(3000);

   // Select the gender
   homepage.selectGender().select(this.data.gender);

   // Verify the entered the name field is matched with the expected name or not
   homepage.verifyNameField().should("have.value", this.data.name); // 1st validation

   // Verify the minlength is 2 or not
   homepage.verifyMinLength().should("have.attr", "minlength", "2"); // 2nd validation

   // Verify the Enterpreneur check box is disabled or not
   homepage.verifyEnterprenuarCheckbox().should("be.disabled"); // 3rd validation

  // cypress.config('defaultCommandTimeout',8000)

   // Click on shop button
   homepage.clickShopButton().click();

   cy.wait(3000);

   this.data.productName.forEach(function (element) {
     console.log(element);
     cy.selectProduct(element);
    });

    // Click on checkout link
    productpage.clickCheckoutlink().click();
    var sum = 0

    cy.get("tr td:nth-child(4) strong").each(($e1, index, $list) => {
     // cy.log($e1.text());
      const amount = $e1.text();
      var res = amount.split(" ");
      res = res[1].trim();
      sum = Number(sum)+Number(res)
      
    }).then(function(){

      cy.log(sum)

    });

    cy.get('h3 > strong').then(function(element){
      const amount = element.text();
      var res = amount.split(" ");
      var total = res[1].trim();
      //cy.log(total)

      expect(Number(total)).to.equal(sum)
    })
    
    // Click on checkout button
    productpage.clickCheckOutButton().click();

    // Enter the country location
    productpage.enterLocation().type(this.data.countryLocation);

    cy.wait(6000);

    // Select the dropdown country
    productpage.selectCountry().click();

    cy.wait(5000);

    // Click on terms and condition box
    productpage.agreeCheckbox().click();

    // Click on purchase button
    productpage.clickOnPurchase().click();

    // success messge get text
    // productpage.getTextSuccessMSg().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')

    productpage.getTextSuccessMSg().then(function (element) {
      const actualText = element.text()

    //  console.log(actualText);
      expect(actualText.includes("Thank you")).to.be.true;

    });

  });
  
});
