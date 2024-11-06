import { defineConfig } from 'cypress';
import codeCoverage from '@cypress/code-coverage/task';

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            codeCoverage(on, config);
            return config;
        },
    },
    component: {
        setupNodeEvents(on, config) {
            codeCoverage(on, config);
            return config;
        },
        specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}', // Укажите путь к вашим компонентным тестам
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
        baseUrl: 'http://localhost:9000',
    },
});
