describe('Logout User', () => {


    beforeEach(() => {
        cy.viewport(1280, 880);
        cy.visit('/')
    })

    it('Logout User', () => {

        cy.title().should('be.equal', 'Automation Exercise');

        cy.registerRandomUserAndLogoutUser();

        cy.get('.shop-menu > .nav > :nth-child(4) > a').should('be.visible').click();

        cy.get('.login-form').should('be.visible');
        cy.get('.signup-form').should('be.visible');

    })
})
