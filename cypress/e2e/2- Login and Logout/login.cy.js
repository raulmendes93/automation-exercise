/// <reference types="Cypress" />

describe('Login User', () => {

    const email = 'test@testingexercise.com'
    const password = '123456'
    const incorrectemail = 'test@test.com'
    const incorrectpassword = '12345'

    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit('http://automationexercise.com')
    })

    it('Login User with incorrect email and password', () => {

        cy.title().should('be.equal', 'Automation Exercise');

        cy.registerUser();
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('h2').should('be.visible', 'Login to your account');
        cy.get('[data-qa="login-email"]').should('be.visible')
            .type(incorrectemail, { delay: 0 })
            .should('have.value', (incorrectemail));
        cy.get('[data-qa="login-password"]').should('be.visible')
            .type(incorrectpassword, { delay: 0 })
            .should('have.value', (incorrectpassword));
        cy.contains('button', 'Login').should('be.visible')
            .click();
        cy.get('.login-form > form > p').should('be.visible').and('contain', 'Your email or password is incorrect!');

    })

    it('Login User with correct email and password', () => {

        cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
        cy.get('h2').should('be.visible', 'Login to your account');
        cy.get('[data-qa="login-email"]').should('be.visible')
            .type(email, { delay: 0 })
            .should('have.value', (email));
        cy.get('[data-qa="login-password"]').should('be.visible')
            .type(password, { delay: 0 })
            .should('have.value', (password));
        cy.contains('button', 'Login').should('be.visible')
            .click();
        cy.get(':nth-child(10) > a').should('be.visible');
        cy.get('.shop-menu > .nav > :nth-child(5) > a').should('be.visible').click();
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').should('be.visible').click();

    })
})
