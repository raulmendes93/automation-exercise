describe('Login and logout User', () => {


    const email = 'testlogin@testingexercise.com'
    const password = '123456'

    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit('/')
    })

    it('Logout User', () => {

        cy.title().should('be.equal', 'Automation Exercise');

        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();

        cy.get('.login-form').should('be.visible');
        cy.get('.signup-form').should('be.visible');

        cy.get('[data-qa="login-email"]')
            .type(email, { delay: 0 })
            .should('have.value', (email));
        cy.get('[data-qa="login-password"]')
            .type(password, { delay: 0 })
            .should('have.value', (password));
        cy.contains('button', 'Login').click();
        cy.get('.shop-menu > .nav > :nth-child(4) > a')
            .should('be.visible')
            .click();
        cy.get('.login-form').should('be.visible');
        cy.get('.signup-form').should('be.visible');
    })
})
