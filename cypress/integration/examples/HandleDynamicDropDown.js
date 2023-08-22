/// <reference types="Cypress" />

describe("Static check boxes", function () {
  it("my drop down", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#autocomplete").type("ind");

    cy.wait(4000);
    //   cy.get('input[id="autocomplete"]').type('ind')

    cy.get(".ui-menu-item div").each(($e1, index, $list) => {
      if ($e1.text() === "India") {
        $e1.click();
      }

    cy.wait(3000);
    cy.get("#autocomplete").should("have.value", "India");
    cy.wait(3000);

    });
  });
});
