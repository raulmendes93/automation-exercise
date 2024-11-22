/// <reference types="Cypress" />

describe('Register User', () => {

  const { faker } = require('@faker-js/faker');
  const firstName = faker.person.firstName();
  const email = faker.internet.email().toLowerCase();
  const password = faker.internet.password();
  const lastName = faker.person.lastName();
  const company = faker.company.name();
  const street = faker.location.street();
  const street2 = faker.location.street();
  const state = faker.location.state();
  const city = faker.location.city();
  const zipcode = faker.location.zipCode();
  const mobilenumber = faker.phone.number({ style: 'national' });

  beforeEach( () => {
    cy.viewport(1280, 880);
    cy.visit('http://automationexercise.com')
  })

  it('Register user', () => {

    cy.title().should('be.equal','Automation Exercise');

    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('h2').should('be.visible', 'New User Signup!');
    cy.get('[data-qa="signup-name"]')
      .type(firstName)
      .should('have.value', (firstName));
    cy.get('[data-qa="signup-email"]')
      .type(email)
      .should('have.value', (email));
    cy.contains('button', 'Signup').click();
    cy.get('.login-form > h2').should('be.visible', 'Enter Account Information')
    cy.get('#id_gender1')
      .check()
      .should('be.checked');
    cy.get('[data-qa="name"]').should('have.value', (firstName));
    cy.get('[data-qa="email"]').should('have.value', (email));
    cy.get('[data-qa="password"]')
      .type(password)
      .should('have.value', (password));
    cy.get('[data-qa="days"]')
      .should('be.visible', 'Day')
      .select(21)
      .should('have.value', '21');
    cy.get('[data-qa="months"]')
      .should('be.visible', 'Month')
      .select('April')
      .should('have.value', '4');
    cy.get('[data-qa="years"]')
      .should('be.visible', 'Year')
      .select('1993')
      .should('have.value', '1993');
    cy.get('#newsletter')
      .check()
      .should('be.checked');
    cy.get('#optin')
      .check()
      .should('be.checked');
    cy.get('[data-qa="first_name"]').should('be.visible')
      .type(firstName)
      .should('have.value', (firstName));
    cy.get('[data-qa="last_name"]').should('be.visible')
      .type(lastName)
      .should('have.value', (lastName));
    cy.get('[data-qa="company"]').should('be.visible')
      .type(company)
      .should('have.value', (company));
    cy.get('[data-qa="address"]').should('be.visible')
      .type(street)
      .should('have.value', (street));
    cy.get('[data-qa="address2"]').should('be.visible')
      .type(street2)
      .should('have.value', (street2));
    cy.get('[data-qa="country"]').should('be.visible')
      .select('United States')
      .should('have.value', 'United States');
    cy.get('[data-qa="state"]').should('be.visible')
      .type(state)
      .should('have.value', (state));
    cy.get('[data-qa="city"]').should('be.visible')
      .type(city)
      .should('have.value', (city));
    cy.get('[data-qa="zipcode"]').should('be.visible')
      .type(zipcode)
      .should('have.value', (zipcode));
    cy.get('[data-qa="mobile_number"]').should('be.visible')
      .type(mobilenumber)
      .should('have.value', (mobilenumber));
    cy.contains('button', 'Create Account').should('be.visible').click();
    cy.get('[data-qa="account-created"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').should('be.visible').click();
    cy.get(':nth-child(10) > a').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click();
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').should('be.visible').click();
  })
})
