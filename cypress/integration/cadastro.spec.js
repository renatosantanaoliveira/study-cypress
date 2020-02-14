/// <reference types="Cypress" />

describe('Register form', () => {
    before(() => {
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() =>{
        cy.reload()
    })

    it('New register with alert', () => {
        cy.get('#formNome').type('nome teste')
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Sobrenome eh obrigatorio')
        })
        cy.get('[data-cy=dataSobrenome]').type('sobrenome teste')
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Sexo eh obrigatorio')
        })
        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado').should('contain', 'Cadastrado')
        
    })
})