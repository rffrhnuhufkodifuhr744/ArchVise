describe('AppLogin Component', () => {
    beforeEach(() => {
        // Предположим, что у вас есть маршрут для логина
        cy.visit('http://localhost:9000/login');
    });

    it('should enable login button when fields are filled', () => {
        cy.get('input[type="text"]').type('testuser');
        cy.get('input[type="password"]').type('testpassword');
        cy.get('input[type="submit"]').should('not.be.disabled');
    });
});
