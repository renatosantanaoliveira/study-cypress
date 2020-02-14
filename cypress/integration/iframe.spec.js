/// <reference types="Cypress" />

describe('Work with iframes', () => {
    before(() => {
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })

    it('Deve preenchet p campo de texto', () => {
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            
            cy.wrap(body).find('#tfield')
                .type('Funciona?')
                .should('have.value', 'Funciona?')
        })
    })

    it('Deve testar frame diretamente', () => {
        cy.visit('http://www.wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        
        Cypress.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
        })
    })
})