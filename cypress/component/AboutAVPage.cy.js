// cypress/components/AboutAvPage.cy.js

import React from 'react';
import { mount } from '@cypress/react';
import AboutAvPage from '../../src/components/AboutAvPage/AboutAvPage';
import '../../src/styles/global.css'; // Import global styles if needed

describe('AboutAvPage Component', () => {
    beforeEach(() => {
        mount(<AboutAvPage />);
    });

    it('should display the page title', () => {
        cy.get('h1').contains('What is ArchVis Studio?').should('exist');
    });

    it('should display the course description', () => {
        cy.get('p')
            .contains('Simple and effective software for 3D modeling of architecture and interior design.')
            .should('exist');
    });

    it('should display all images', () => {
        cy.get('img').should('have.length', 10); // Checks for the presence of all images on the page
        cy.get('img[alt="Apartment Plan"]').should('exist');
        cy.get('img[alt="Cafe 1"]').should('exist');
        cy.get('img[alt="Bathroom"]').should('exist');
        cy.get('img[alt="Kitchen"]').should('exist');
    });

    it('should have the class aboutContainer', () => {
        cy.get('.aboutContainer').should('exist');
    });
});
