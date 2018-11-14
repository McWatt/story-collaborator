context("Nav works", () => {
  it("Nav links are not links when on current page, and are links when on current page", () => {
    cy.visit("/");
    cy.get("nav ul > li:first > span");
    cy.get("nav ul > li:last > a").click();
    cy.get("nav ul > li:last > span");
  });

  it('Clicking "Stories" navigates to /stories', function() {
    cy.visit("/");
    cy.contains("Stories").click();
    cy.url().should("include", "/stories");
  });

  it("Stories is not a link", () => {
    cy.visit("/");
    cy.get("nav ul > li:first > span").should("contain", "Home");
  });

  it('Clicking "Add Story" navigates to /add-story', function() {
    cy.visit("/");
    cy.contains("Add Story").click();
    cy.url().should("include", "/add-story");
  });
});
