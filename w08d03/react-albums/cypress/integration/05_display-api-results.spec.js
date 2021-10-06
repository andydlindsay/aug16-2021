it('can request data from an API and display the results', () => {
  // visit the app
  cy.visit('/');

  // create fake endpoint and fake server
  cy.intercept('GET', '**/search*', { fixture: 'itunes' })
    .as('getRequest');

  // grab the input field and type 'Daft Punk'
  cy.get('.search__form')
    .find('input')
    .type('Daft Punk')
    .should('have.value', 'Daft Punk');

  // grab the spinner and make sure it's visible
  cy.get('.spinner')
    .should('be.visible');

  // wait for the get request to resolve
  cy.wait('@getRequest')
    // check the results by looking for a particular album
    .get('main')
    .contains('Human After All')
    .should('be.visible');

  // uncheck the explicit checkbox
  cy.get('#Explicit')
    .uncheck();

  // check the results to make sure the explicit album is no longer there
  cy.get('article.album')
    .should('not.contain', 'Daft Club');
});
