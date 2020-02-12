/// <reference types="Cypress" />

before(() => {
    cy.visit('http://www.wcaquino.me/cypress/componentes.html')
})

beforeEach(() =>{
    cy.reload()
})