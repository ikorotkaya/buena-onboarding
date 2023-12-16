describe("Onboarding Flow", () => {
  it("should navigate through the onboarding flow", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Welcome to Buena");
    cy.contains("Enter your personal details and start your journey today.");

    cy.get("a:contains(Get started)").click();

    cy.url().should("eq", "http://localhost:5173/onboarding/name");

    cy.contains("What's your name?");
    cy.contains("Please enter a valid name.").should("not.exist");

    const nextButton = cy.get("a:contains(Next):visible");
    nextButton.should("have.css", "pointer-events", "none");

    cy.get("input").type("J");
    cy.contains("Please enter a valid name.");

    cy.get("input").clear().type("Jane Smith");
    cy.contains("Please enter a valid name.").should("not.exist");

    nextButton.click();

    cy.url().should("eq", "http://localhost:5173/onboarding/email");

    cy.contains("What's your email address?");
    cy.contains("Please enter a valid email address.").should("not.exist");

    nextButton.get("a:contains(Next):visible");
    nextButton.should("have.css", "pointer-events", "none");

    cy.get("input").type("test example");
    cy.contains("Please enter a valid email address.");

    cy.get("input").clear().type("hi@hello.com");
    cy.contains("Please enter a valid email address.").should("not.exist");

    nextButton.click();

    cy.url().should("eq", "http://localhost:5173/onboarding/phone");

    cy.contains("What's your phone number?");
    cy.contains("Please enter a valid phone number.").should("not.exist");

    nextButton.get("a:contains(Next):visible");
    nextButton.should("have.css", "pointer-events", "none");

    cy.get("input").type("1");
    cy.contains("Please enter a valid phone number.");

    cy.get("input").clear().type("1234567890");
    cy.contains("Please enter a valid phone number.").should("not.exist");

    nextButton.click();

    cy.url().should("eq", "http://localhost:5173/onboarding/income");

    cy.contains("What's your income?");

    nextButton.get("a:contains(Next):visible");
    nextButton.should("have.css", "pointer-events", "none");

    cy.get("[type='radio']")
      .should("be.visible")
      .each(($radio) => {
        if ($radio.val() === "4000-plus") {
          cy.wrap($radio).check();
        }
      });

    nextButton.click();

    cy.url().should("eq", "http://localhost:5173/onboarding/summary");

    cy.contains("Please review your details:");
    cy.contains("Jane Smith");
    cy.contains("hi@hello.com");
    cy.contains("1234567890");
    cy.contains("4000-plus");

    const submitButton = cy.get("a:contains(Submit):visible");
    submitButton.click();

    cy.url().should("eq", "http://localhost:5173/final-page");

    cy.contains("Thank you for your submission!");
    cy.contains("We will be in touch shortly.");
  });
});
