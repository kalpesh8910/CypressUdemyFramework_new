/// <reference types="Cypress" />

describe("My Test Suite", function () {
  it("My First Test Case", function () {
    // Open url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.wait(2000);

    cy.get("#alertbtn").click();

    cy.wait(4000);

    // window alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Hello , share this practice page and share your knowledge");
    });

    cy.get('#confirmbtn').click()

    cy.wait(4000);


    cy.on("#confirmbtn", (str) => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
  });
});
