/// <reference types="Cypress" />

describe("My sample Test", function () {
  it("My sample test", function () {
    // Open url
    //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.visit(Cypress.env("url") + "/AutomationPractice/");

    cy.get("#opentab").then(function (e1) {
    cy.wait(3000);
    const url = e1.prop("href");
    cy.visit(url);
    cy.wait(3000);
    console.log("hello");

    cy.origin(url, () => {
      cy.get("div.sub-menu-bar a[href*='about']").click();

      });

    });

  });

});
