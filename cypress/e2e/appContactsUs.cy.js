describe('AppContactsUs Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000/contacts');
    });

    it('renders the contact image and text', () => {
        cy.get('img').should('be.visible');
        cy.contains('Контакти').should('exist');
    });

    it('displays the ArchVisStudio questions section', () => {
        cy.contains('Є питання стосовно ArchVisStudio?').should('exist');
        cy.contains(
            'Якщо вам потрібна додаткова інформація щодо будь-якої функції планувальника простору Roomtodo',
        ).should('exist');
    });

    it('displays the contact information correctly', () => {
        cy.contains('ТОВ ArchVis Studio').should('exist');
        cy.contains('Ukraine, Uzhorod').should('exist');
        cy.contains('Development office').should('exist');
        cy.contains('04080, Ukraine, Kyiv, Kyrylivska 47a').should('exist');
        cy.contains('+38 093 566 10 80').should('exist');
    });
});
