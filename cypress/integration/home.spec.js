/// <reference types="cypress" />

const api = 'https://take-home-test-gql.herokuapp.com/query';

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('POST', api, (req) => {
      if (req.body.operationName === 'works') {
        req.alias = 'works';
        req.reply({ fixture: 'works.json' });
      }
    });
    cy.visit('/');
  });

  it('Renders works from API correctly', () => {
    cy.get('#works >div').its('length').should('eq', 14);
    cy.get('#works .ant-image img').should('exist');
    cy.contains('#works >div >div', 'Model').should('exist');
    cy.contains('#works >div >div', 'Make').should('exist');
    cy.get('#model-filter').should('exist');
    cy.get('#make-filter').should('exist');
  });

  it('Image preview works correctly', () => {
    cy.get('#works .ant-image-mask-info').eq(0).click();
    cy.get('.ant-image-preview-wrap').should('be.visible');
  });

  it('Model Filter works correctly', () => {
    cy.get('#model-filter .ant-radio-wrapper').first().click();
    cy.get('#works >div').its('length').should('be.gt', 0);
    cy.get('#model-filter-reset-button').click();
    cy.get('#works >div').its('length').should('eq', 14);
  });

  it('Make Filter works correctly', () => {
    cy.get('#make-filter .ant-radio-wrapper').first().click();
    cy.get('#works >div').its('length').should('be.gt', 0);
    cy.get('#make-filter-reset-button').click();
    cy.get('#works >div').its('length').should('eq', 14);
  });
});
