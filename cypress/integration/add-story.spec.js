context("Add story works", () => {
  it("Adding a story works", () => {
    cy.visit("/add-story");
    cy.get("[name='title']")
      .focus()
      .type(
        Math.random()
          .toString(36)
          .slice(2)
      )
      .blur();
    cy.get("[name='description']")
      .focus()
      .type(
        `${Math.random()
          .toString(36)
          .slice(2)} ${Math.random()
          .toString(36)
          .slice(2)}`
      )
      .blur();
    cy.get("#js-story-add-form button[type=submit").click();
  });
});
