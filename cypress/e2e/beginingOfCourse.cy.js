describe('BeginingOfCourse Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/start');
    });

    it('should render the header correctly', () => {
        cy.get('h1').should('contain', 'Уроки Blender 3D для початківців');
    });
});
