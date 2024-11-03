describe('Home Page Navigation', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9000'); // Откройте домашнюю страницу
    });

    it('Проверяет наличие ссылок в сайдбаре', () => {
        cy.get('#homePage').should('exist'); // Проверка контейнера главной страницы
        cy.get('nav').should('exist'); // Проверка наличия сайдбара

        // Проверка наличия ссылок
        cy.contains('Головна').should('have.attr', 'href', '/');
        cy.contains('Про нас').should('have.attr', 'href', '/about');
        cy.contains('Шаблони та приклади').should('have.attr', 'href', '/templates');
        cy.contains('Ресурси для навчання').should('have.attr', 'href', '/resources');
        cy.contains('Контакти').should('have.attr', 'href', '/contacts');
        cy.contains('Увійти').should('have.attr', 'href', '/login');
    });
});
