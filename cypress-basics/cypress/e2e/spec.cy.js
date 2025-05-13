it('my first test', () => {
    cy.visit('/sample-todo-app/')
    cy.contains('.container', 'LambdaTest Sample App')
    cy.get(':nth-child(5) > .done-false')
    cy.get('#sampletodotext')
        .type("new Item{enter}")
})

it.only('Add new todo', () => {
    cy.visit('/sample-todo-app/')
    cy.get('.list-unstyled > li')
        .should('have.length', 5)

    cy.get('.list-unstyled > li > input')
        .last()
        .check()

    cy.get('.list-unstyled > li > input')
        .last()
        .should('be.checked')

    cy.get('#sampletodotext')
        .should('have.attr', 'placeholder', 'Want to add more')
})