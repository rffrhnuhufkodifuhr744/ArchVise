import React from 'react';
import BeginingOfCourse from '../../src/components/BeginingOfCourse';
import '../../src/components/BeginingOfCourse.module.css';

describe('BeginingOfCourse Component', () => {
    beforeEach(() => {
        cy.mount(<BeginingOfCourse />);
    });

    it('renders the header with correct text', () => {
        cy.get('h1').contains('Уроки Blender 3D для початківців').should('be.visible');
    });

    it('displays introductory text about Blender', () => {
        cy.get('.infoContainer').within(() => {
            cy.contains('Blender – професійне вільне та відкрите програмне забезпечення').should('be.visible');
        });
    });

    it('renders the list of hotkeys with the correct items', () => {
        const hotkeys = [
            'ПКМ – виділити',
            "Shift + A - додати об'єкт",
            'Х — видалити',
            'Пробіл - здійснити пошук за функціями',
            'Ctrl + S - зберегти файл',
            'F12 - зробити рендеринг',
            'Esc – зупинити рендеринг',
            'F3 – зберегти рендеринг',
            'Ctrl + Z - скасувати',
            'Ctrl + Shift + Z - повернути дію',
            'Shift + D - дублювати',
            'M - перемістити на шар',
            'Ctrl + M - віддзеркалити',
            'Alt+A — програти анімацію',
        ];

        hotkeys.forEach((key) => {
            cy.get('.listHotKeys').contains(key).should('exist');
        });
    });

    it('checks that the main table contains correct information', () => {
        cy.get('.infoTable').within(() => {
            cy.contains('Blender Foundation').should('exist');
            cy.contains('Windows 7, 10, 8, XP, Vista').should('exist');
            cy.contains('Безкоштовно').should('exist');
            cy.contains('Присутня').should('exist');
            cy.contains('2024-07-16').should('exist');
            cy.contains('678933').should('exist');
        });
    });
});
