context("Story edit works", () => {
  beforeEach(function() {
    cy.visit("/stories/5be7cc34ec9a48662d638281/edit");
  });

  it("Clicking + adds a paragraph and clicking - removes a paragraph", function() {
    let numberOfTextareas = 0;

    // add a couple of paragraphs
    cy.contains("+").click();
    cy.contains("+").click();

    cy.get(".App > section textarea").then($textarea => {
      numberOfTextareas = $textarea.length;
      cy.contains("+").click();

      cy.get(".App > section textarea").should($textarea => {
        expect($textarea.length).to.be.gt(numberOfTextareas);
      });
      // remove two to remove the previously added one, than another
      cy.contains("X").click();
      cy.contains("X").click();
      cy.get(".App > section textarea").should($textarea => {
        expect($textarea.length).to.be.lt(numberOfTextareas);
      });
    });
  });

  it("Enter adds a paragraph", function() {
    let numberOfTextareas = 0;

    // add a couple of paragraphs
    cy.contains("+").click();
    cy.contains("+").click();

    cy.get(".App > section textarea").then($textarea => {
      numberOfTextareas = $textarea.length;
      cy.get(".App > section textarea:last").type("asfasdsdfasd{enter}");

      cy.get(".App > section textarea").should($textarea => {
        expect($textarea.length).to.be.gt(numberOfTextareas);
      });
    });
  });

  it("Backspace deletes a paragraph", function() {
    let numberOfTextareas = 0;

    // add a couple of paragraphs
    cy.contains("+").click();
    cy.contains("+").click();

    cy.get(".App > section textarea").then($textarea => {
      numberOfTextareas = $textarea.length;
      cy.get(".App > section textarea:last").type("a{backspace}{backspace}");

      cy.get(".App > section textarea").should($textarea => {
        expect($textarea.length).to.be.lt(numberOfTextareas);
      });
    });
  });
});
