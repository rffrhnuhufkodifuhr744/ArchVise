import React from 'react';
import { mount } from '@cypress/react';
import SignUpPage from '../../src/components/SignUpPage/SignUpPage';
import '../../src/styles/global.css';

describe('SignUpPage Component', () => {
    beforeEach(() => {
        mount(<SignUpPage />);
    });

    it('should display the title "Sign up"', () => {
        cy.get('h1').contains('Sign up').should('exist');
    });

    it('should allow the user to type a username', () => {
        cy.get('input[name="username"]').type('testuser').should('have.value', 'testuser');
    });

    it('should allow the user to type a password', () => {
        cy.get('input[name="password"]').type('password123').should('have.value', 'password123');
    });

    it('should disable the submit button while loading', () => {
        cy.get('input[name="signup"]').should('not.be.disabled');
        cy.get('input[name="username"]').type('loadingTest');
        cy.get('input[name="password"]').type('loadingPassword');
        cy.get('form').submit();
        cy.get('input[name="signup"]').should('be.disabled');
    });

    it('should display a message if there is one', () => {
        cy.get('.message').should('not.exist');
    });

    it('should navigate to login when "Login" link is clicked', () => {
        cy.get('a').contains('Login').should('have.attr', 'href', '/login');
    });
});
