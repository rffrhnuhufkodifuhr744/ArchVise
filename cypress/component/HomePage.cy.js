// cypress/component/HomePage.cy.js

import React from 'react';
import { mount } from 'cypress/react';
import HomePage from '../../src/components/HomePage/HomePage';

describe('HomePage Component', () => {
    beforeEach(() => {
        mount(<HomePage />);
    });

    it('renders the logo', () => {
        cy.get('img[alt="Логотип ArchVis"]').should('be.visible');
    });

    it('displays the main title', () => {
        cy.contains('ДИЗАЙН ВАШОГО ДОМУ У 3D').should('exist');
    });

    it('displays the course description', () => {
        cy.contains('Цей курс навчить Вас основам 3D-моделювання').should('exist');
        cy.contains('без професійних навичок').should('exist');
    });

    it('contains a start button that links to the start page', () => {
        cy.get('.startBtn').should('exist').should('have.attr', 'href', '/start');
    });
});
