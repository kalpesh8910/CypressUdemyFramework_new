/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { when } from "cypress/types/jquery";
import HomePage from "../../../pageObjects/HomePage";
import ProductPage from "../../../pageObjects/ProductPage";

const homepage = new HomePage();
const productpage = new ProductPage();

// Given I open ECommerce Page
Given("I open ECommerce Page", () => {
  cy.visit(Cypress.env("url") + "angularpractice/");
});

// When I add items to Cart
when("I add items to Cart", () => {
  homepage.clickShopButton().click();

  cy.wait(3000);

  this.data.productName.forEach(function (element) {
    console.log(element);
    cy.selectProduct(element);
  });

  // Click on checkout link
  productpage.clickCheckoutlink().click();

  // And Validate the total prices

  And("Validate the total prices", () => {
    cy.get("tr td:nth-child(4) strong")
      .each(($e1, index, $list) => {
        // cy.log($e1.text());
        const amount = $e1.text();
        var res = amount.split(" ");
        res = res[1].trim();
        sum = Number(sum) + Number(res);
      })
      .then(function () {
        cy.log(sum);
      });

    cy.get("h3 > strong").then(function (element) {
      const amount = element.text();
      var res = amount.split(" ");
      var total = res[1].trim();
      //cy.log(total)

      expect(Number(total)).to.equal(sum);
    });

    // Then select the country submit and verify Thankyou

    Then("Then select the country submit and verify Thankyou", () => {
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
        const actualText = element.text();

        //  console.log(actualText);
        expect(actualText.includes("Thank you")).to.be.true;
      });
    });

    // When I fill the form details
    When("I fill the form details", function () {
      // Enter the name
      homepage.getNameEditBox().type(this.data.name);

      cy.wait(3000);

      // Select the gender
      homepage.selectGender().select(this.data.gender);
    });

    // Then Validate the forms behaviour
    Then("Validate the forms behaviour", () => {
      // Verify the entered the name field is matched with the expected name or not
      homepage.verifyNameField().should("have.value", this.data.name); // 1st validation

      // Verify the minlength is 2 or not
      homepage.verifyMinLength().should("have.attr", "minlength", "2"); // 2nd validation

      // Verify the Enterpreneur check box is disabled or not
      homepage.verifyEnterprenuarCheckbox().should("be.disabled"); // 3rd validation

      cypress.config("defaultCommandTimeout", 8000);
    });
    // And select the Shop Page
    And("select the Shop Page", () => {
      // Click on shop button
      homepage.clickShopButton().click();
    });
  });
});
