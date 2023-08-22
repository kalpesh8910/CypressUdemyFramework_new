/// <reference types="Cypress" />

describe("My sample Test", function () {
  it("My sample test", function () {
    // Open url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.wait(6000)

    cy.get("div.mouse-hover-content").invoke("show")

    cy.contains("Top").click({force:true})

    cy.wait(6000)

    cy.url().should("include", "top")
    
  });
});
