/// <reference types="Cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'

describe('Should test at a functional level', () => {
    before(() => {
        cy.loginFast('a@a', 'a')
    })

    beforeEach(() => {
        cy.resetRest()
        cy.get(loc.MENU.HOME).click()
    })

    it.only('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Conta de teste')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')
    })

    it('Should update an account', () => {
        // cy.get(':nth-child(7) > :nth-child(2) > .fa-edit')
        cy.acessarMenuConta()

        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta para alterar')).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    })

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()

        cy.get(loc.CONTAS.NOME).type('Conta mesmo nome')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'code 400')
    })
})