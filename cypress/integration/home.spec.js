/// <reference types="cypress" />

const api = 'https://take-home-test-gql.herokuapp.com/query';

describe('Renders the home page', () => {
  beforeEach(() => {});

  it('Renders the home page correctly', () => {
    cy.visit('/');
    cy.get('#home');
  });

  it('Renders at least one work from API correctly ', () => {
    cy.intercept('POST', api, (req) => {
      if (req.body.operationName === 'works') {
        req.alias = 'works';
        req.continue();
      }
    });
    cy.visit('/');
    cy.wait('@works');
    cy.get('#works >div').its('length').should('be.gt', 0);
  });
});
