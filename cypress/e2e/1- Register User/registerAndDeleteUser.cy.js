describe('Register Random User and Delete', () => {

    const { faker } = require('@faker-js/faker');

    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit('/')
    })

    it('Register Random User and Delete User', () => {

        cy.registerUserAndDelete();
    })
})