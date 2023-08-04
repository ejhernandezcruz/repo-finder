class SearchPage {

  elements = {
    header: () => cy.get("h1"),
    usernameTextbox: () => cy.get("#username"),
    submitButton: () => cy.get(".submit"),
    output_status_text: () => cy.get(".output-status-text"),
    row_results: () => cy.get("li[class='repo-row']"),
    repo_name_list: () => cy.get("a[rel='noopener noreferrer']"),
    repo_description_list: () => cy.get(".repo-description")
  };

  navigateToSearchPage() {
    cy.visit("/");
  }

  typeUsername(username) {
    this.elements.usernameTextbox().type(username);
  }

  clickOnGoButton() {
    this.elements.submitButton().click();
  }

  verifyLayoutComponents(output_text_default) {
    this.elements.header().should("be.visible");
    this.elements.usernameTextbox().should("be.visible");
    this.elements.submitButton().should("be.visible");
    this.elements.output_status_text().should("have.text", output_text_default);
  }

  verifyPageTitle(title) {
    this.elements.header().should("have.text", title);
  }

  verifyRowAreVisible() {
    this.elements.row_results().should("be.visible");
  }

  checkElementsNotEmpty(elements) {
    elements.each(($el) => {
      cy.wrap($el).should('not.be.empty');
    });
  }

  verifyRowResultsContainsNameAndDescription() {
    this.checkElementsNotEmpty(this.elements.repo_description_list());
    this.checkElementsNotEmpty(this.elements.repo_name_list());
  }

  verifyNotBrokenLinksToRepo() {
    this.elements.repo_name_list().each(($el) => {
      cy.wrap($el).invoke('attr', 'href').should('not.be.empty');
    });
  }

  verifyRepoDescriptionDefaultValue(defaultValue) {
    this.elements.repo_description_list().each(($el) => {
      const text = $el.text().trim();
      if (text.length === 1) {
        expect(text).to.equal(defaultValue);
      }
    });
  }


}

export default SearchPage;
