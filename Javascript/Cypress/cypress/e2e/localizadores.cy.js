/// <reference types="cypress" />
describe('Localizadores', () => {
    it('Tipos de localizadores',()=>{
        cy.visit("www.facebook.com")

        //Localizador por Tagname
        cy.get('input')

        //Localizador por ID
        cy.get('#email')

        //Localizador por Clase
        cy.get('.inputtext')

        //Localizador por Atributo
        cy.get('[autofocus]')
        
        //Localizador por Atributo y valor
        cy.get('[autofocus="1"]')

        //Combinar localizadores
        cy.get('input#email')
        cy.get('input[autofocus]')

    });
});