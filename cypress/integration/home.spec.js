/// <reference types="cypress" />

const api = 'https://take-home-test-gql.herokuapp.com/query';

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('POST', api, (req) => {
      if (req.body.operationName === 'works') {
        req.alias = 'works';
        req.continue();
      }
    });
    cy.visit('/');
    cy.wait('@works');
  });

  it('Renders works from API correctly', () => {
    cy.get('#works >div').its('length').should('be.gt', 0);
    cy.get('#works .ant-image img').should('exist');
    cy.get('#works >div >div').eq(1).contains('Model').should('exist');
    cy.get('#works >div >div').eq(2).contains('Make').should('exist');
    cy.get('#model-filter').should('exist');
    cy.get('#make-filter').should('exist');
  });

  it('Model Filter works correctly', () => {
    cy.get('#model-filter .ant-radio-wrapper').first().click();
    cy.get('#works >div').its('length').should('be.gt', 0);
    cy.get('#model-filter-reset-button').click();
    cy.get('#works >div').its('length').should('be.gt', 0);
  });

  it('Make Filter works correctly', () => {
    cy.get('#make-filter .ant-radio-wrapper').first().click();
    cy.get('#works >div').its('length').should('be.gt', 0);
    cy.get('#make-filter-reset-button').click();
    cy.get('#works >div').its('length').should('be.gt', 0);
  });
});
