describe('AboutAvPage Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/about');
    });

    it('should display the title "Що таке ArchVis Studio?"', () => {
        cy.contains('h1', 'Що таке ArchVis Studio?').should('exist').and('be.visible');
    });

    it('should display the title "Що ви зможете робити після курсу?"', () => {
        cy.contains('h1', 'Що ви зможете робити після курсу?').should('exist').and('be.visible');
    });
});
