describe('can visit pages on the internet', () => {

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765/');
  });

});