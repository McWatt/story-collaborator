context("Stories list and item works", () => {
  beforeEach(function() {
    cy.visit("/stories");
  });

  it("Clicking view goes to a story", function() {
    cy.get(".StoryList")
      .contains("View")
      .click();
    cy.url().should("include", "/stories/");
  });

  it("Clicking edit goes to a story edit form", function() {
    cy.get(".StoryList")
      .contains("Edit")
      .click();
    cy.url().should("include", "/edit");
  });
});
