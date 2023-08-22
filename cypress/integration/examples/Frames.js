/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import "cypress-iframe";

describe("Frames Test", function () {
  it("Demo example", function () {
    
    // Open url
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.frameLoaded("#courses-iframe");

    cy.iframe().find("a[href*='mentorship']").eq(0).click();

  });

});
