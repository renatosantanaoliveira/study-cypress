/// <reference types="Cypress" />

describe('Esperas...', () => {
    before(() => {
        cy.visit('http://www.wcaquino.me/cypress/componentes.html')
    })
    
    beforeEach(() =>{
        cy.reload()
    })

    it('Deve aguardar elemento estar disponível', () =>{
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('funciona')
    })

    it('Usar os retrys', () =>{
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo')
            .should('exist')
            .type('funciona')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')

        cy.get('#lista li span')
            .should('contain', 'Item 2')
    })

    it.only('Uso do timeout', () => {
        cy.get('#buttonDelay').click()
        // cy.get('#novoCampo', {timeout: 1000}).should('exist')
        cy.get('#novoCampo').should('exist')

        cy.get('#buttonListDOM').click()

        // evitar de usar porque ele força com que aguarde sem verificar a aplicação, como se fosse thread sleep do selenium
        // cy.wait(5000)

        // para correção do cenário melhor usar o timeout, direto no get da validação, que o time sera um setado o máximo que ele aguarda e se acabar antes do tempo segue com os testes
        // cy.get('#lista li span', {timeout: 30000})
        //     .should('contain', 'Item 2')

        cy.get('#lista li span',)
            .should('have.length', 1)
        cy.get('#lista li span',)
            .should('have.length', 2)
    })
})