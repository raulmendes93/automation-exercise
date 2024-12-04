describe('Logging User With Existing Email', () => {

    const { faker } = require('@faker-js/faker');
    const name = 'Automation Exercise'
    const email = 'emailalreadyexists@testingexercise.com'

    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit('/')
    })

    it('Email Already Exists', () => {

        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();

        cy.get('.login-form').should('be.visible');
        cy.get('.signup-form').should('be.visible');

        cy.get('[data-qa="signup-name"]')
            .type(name, { delay: 0 })
            .should('have.value', (name));
        cy.get('[data-qa="signup-email"]')
            .type(email, { delay: 0 })
            .should('have.value', (email));
        cy.contains('button', 'Signup').click();
        cy.get('.signup-form > form > p').should('be.visible').and('contain', 'Email Address already exist!');
    })
})