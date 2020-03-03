/// <reference types="Cypress" />

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('Fixtures tests', function() {
        cy.fixture('userData').as('usuario').then(() => {
            cy.get('#formSobrenome').type(this.usuario.nome)
        })
    })
})