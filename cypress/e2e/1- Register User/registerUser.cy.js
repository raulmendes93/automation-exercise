/// <reference types="Cypress" />

describe('Register User', () => {

  const { faker } = require('@faker-js/faker');

  beforeEach(() => {
    cy.viewport(1280, 880);
    cy.visit('http://automationexercise.com')
  })

  it('Register user', () => {

    cy.title().should('be.equal', 'Automation Exercise');

    cy.registerUser();

    cy.get(':nth-child(10) > a')
      .should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click();
    cy.get('[data-qa="account-deleted"]')
      .should('be.visible')
      .and('have.text', 'Account');
    cy.get('[data-qa="continue-button"]').should('be.visible').click();
  })
})
