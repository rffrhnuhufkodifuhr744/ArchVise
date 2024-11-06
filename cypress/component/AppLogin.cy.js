// cypress/components/AppLogin.cy.js

import React from 'react';
import { mount } from '@cypress/react';
import AppLogin from '../../src/components/AppLogin/AppLogin';
import '../../src/styles/global.css'; // Import global styles if needed

// Mock the useLogin hook
const mockUseLogin = (overrides) => {
    const mockLogin = cy.stub();
    cy.stubReactHook('useLogin').returns({
        login: mockLogin,
        loading: false,
        error: '',
        ...overrides,
    });
    return mockLogin;
};

describe('AppLogin Component', () => {
    it('should display login form with Username and Password fields', () => {
        mount(<AppLogin />);
        cy.get('input[type="text"]').should('exist').and('have.attr', 'required');
        cy.get('input[type="password"]').should('exist').and('have.attr', 'required');
    });

    it('should show an error when login fails with invalid credentials', () => {
        const mockLogin = mockUseLogin({ error: 'Invalid credentials' });

        mount(<AppLogin />);
        cy.get('input[type="text"]').type('wrongUsername');
        cy.get('input[type="password"]').type('wrongPassword');
        cy.get('form').submit();

        cy.wrap(mockLogin).should('be.calledWith', 'wrongUsername', 'wrongPassword');
        cy.get('.error').should('contain.text', 'Invalid credentials');
    });

    it('should disable the login button when loading is active', () => {
        mockUseLogin({ loading: true });

        mount(<AppLogin />);
        cy.get('input[type="submit"]').should('be.disabled');
    });

    it('should navigate to Sign Up page when the link is clicked', () => {
        mount(<AppLogin />);
        cy.get('.signupLink a').click();
        cy.location('pathname').should('eq', '/signup');
    });
});
