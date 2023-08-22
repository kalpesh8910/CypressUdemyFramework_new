/// <reference types="Cypress" />

describe("My Test Suite", function () {
  it("My First Test Case", function () {
    // Open url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.wait(2000);

    // Check hide field is visible or not
    cy.get("#displayed-text").should("be.visible");

    // Click on hide button
    cy.get("#hide-textbox").click();

    // Check field is in-visible or not
    cy.get("#displayed-text").should("not.be.visible");

    // Click on show button
    cy.get("#show-textbox").click();

    // Check hide field is visible or not
    cy.get("#displayed-text").should("be.visible");
  });
});
