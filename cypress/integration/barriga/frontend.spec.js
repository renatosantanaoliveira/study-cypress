/// <reference types="Cypress" />

import loc from '../../support/locators'
import '../../support/commandsConta'

describe('Should test at a functional level', () => {
    before(() => {
        cy.login('renato@santana','santana')
    })

    beforeEach(() => {
        cy.resetApp()
        cy.get(loc.MENU.HOME).click()
    })
    
    it()
})