describe("Onboarding Flow", () => {
  it("should navigate through the onboarding flow", () => {
    cy.visit("http://localhost:5173");

    cy.get("h1").should("contain.text", "Welcome to Buena");
    cy.get(".subheadline").should(
      "contain.text",
      "Enter your personal details and start your journey today."
    );
    cy.get(`[data-testid="homepage-cta"]`).should(
      "contain.text",
      "Get started"
    );
    cy.get(`[data-testid="homepage-cta"]`).click();

    cy.url().should("eq", "http://localhost:5173/onboarding/name");

    cy.get("h1").should("contain.text", "What is your full name?");
    cy.get("input").should("have.value", "");
    cy.get(`[data-testid="input-error"]`).should("not.exist");
    cy.get(`[data-testid="next-button"]`).should("contain.text", "Next");
    cy.get(`[data-testid="next-button"]`).should(
      "have.class",
      "pointer-events-none"
    );

    cy.get("input").type("J");
    cy.get(`[data-testid="input-error"]`).should("be.visible");
    cy.get("input").clear().type("Jane Smith");
    cy.get(`[data-testid="input-error"]`).should("not.exist");
    cy.get("input").should("have.value", "Jane Smith");
    cy.get(`[data-testid="next-button"]:visible`).should(
      "not.have.class",
      "pointer-events-none"
    );
    cy.get(`[data-testid="next-button"]:visible`).click();

    cy.url().should("eq", "http://localhost:5173/onboarding/email");

    cy.get("h1").should("contain.text", "What is your email?");
    cy.get("input").should("have.value", "");
    cy.get(`[data-testid="input-error"]`).should("not.exist");
    cy.get(`[data-testid="next-button"]`).should("contain.text", "Next");
    cy.get(`[data-testid="next-button"]`).should(
      "have.class",
      "pointer-events-none"
    );

    cy.get("input").type("J");
    cy.get(`[data-testid="input-error"]`).should("be.visible");
    cy.get("input").clear().type("hi@hello.com");
    cy.get(`[data-testid="input-error"]`).should("not.exist");
    cy.get("input").should("have.value", "hi@hello.com");
    cy.get(`[data-testid="next-button"]:visible`).should(
      "not.have.class",
      "pointer-events-none"
    );
    cy.get(`[data-testid="next-button"]:visible`).click();

    cy.url().should("eq", "http://localhost:5173/onboarding/phone");

    cy.get("h1").should("contain.text", "What is your phone number?");
    cy.get("input").should("have.value", "");
    cy.get(`[data-testid="input-error"]`).should("not.exist");
    cy.get(`[data-testid="next-button"]`).should("contain.text", "Next");
    cy.get(`[data-testid="next-button"]`).should(
      "have.class",
      "pointer-events-none"
    );

    cy.get("input").type("J");
    cy.get(`[data-testid="input-error"]`).should("be.visible");
    cy.get("input").clear().type("1234567890");
    cy.get(`[data-testid="input-error"]`).should("not.exist");
    cy.get("input").should("have.value", "1234567890");
    cy.get(`[data-testid="next-button"]:visible`).should(
      "not.have.class",
      "pointer-events-none"
    );
    cy.get(`[data-testid="next-button"]:visible`).click();

    cy.url().should("eq", "http://localhost:5173/onboarding/income");

    cy.get("h1").should("contain.text", "What is your income?");
    cy.get('[type="radio"]').each(($radio) => {
      cy.wrap($radio).should("be.visible");
    });
    cy.get(`[data-testid="input-error"]`).should("not.exist");
    cy.get(`[data-testid="next-button"]`).should("contain.text", "Next");
    cy.get(`[data-testid="next-button"]`).should(
      "have.class",
      "pointer-events-none"
    );

    cy.get('[type="radio"]').each(($radio) => {
      if ($radio.val() === "4000-plus") {
        cy.wrap($radio).check();
      }
    });
    cy.get(`[data-testid="next-button"]:visible`).should(
      "not.have.class",
      "pointer-events-none"
    );
    cy.get(`[data-testid="next-button"]:visible`).click();

    cy.url().should("eq", "http://localhost:5173/onboarding/summary");

    cy.get("h1").should("contain.text", "Check your info:");
    cy.get(`[data-testid="summary"]`).should("contain.text", "Jane Smith");
    cy.get(`[data-testid="summary"]`).should("contain.text", "hi@hello.com");
    cy.get(`[data-testid="summary"]`).should("contain.text", "1234567890");
    cy.get(`[data-testid="summary"]`).should("contain.text", "4000-plus");
    cy.get(`[data-testid="submit-button"]:visible`).should(
      "not.have.class",
      "pointer-events-none"
    );
    cy.get(`[data-testid="submit-button"]:visible`).click();

    cy.url().should("eq", "http://localhost:5173/final-page");

    cy.get("h1").should("contain.text", "Thank you for your submission!");
    cy.get('[data-testid="submission-confirmation"]').should(
      "contain.text",
      "We will be in touch shortly."
    );
  });
});
