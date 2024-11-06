describe('SignUpPage Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/signup');
    });

    it('should render the header correctly', () => {
        cy.get('h1').should('contain', 'Sign up');
    });

    it('should allow user to enter username and password', () => {
        cy.get('input[name="username"]').type('testuser');
        cy.get('input[name="password"]').type('password123');
    });
});
