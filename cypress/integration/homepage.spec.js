describe('Sample Tests for the Home Page', () => {
  it('Does Home Page Load', () => {
    cy.visit('/');
    cy.get(".highlight-card > span").should(
      "contain",
      "CypressCodeCoverageDemo app is running!"
    );
  })
});
