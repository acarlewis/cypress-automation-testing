
cy.evilCode = {
    subValues: (a, b) => {
        return a - b ;
    },

    makeUniqueUsername: () => {
        return 'cypress-test-' + Cypress.moment().format("YYMMDD-HHmmss");
    },
    
    slowMyCode: (time) => {
        return Cypress.config('defaultCommandTimeout', time);
    }
}