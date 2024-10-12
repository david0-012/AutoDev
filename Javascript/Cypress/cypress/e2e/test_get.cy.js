describe('usando_get',() =>{
    it('validando_boton_buscar_con_google',()=>{
        cy.visit('https://www.google.com/')
        cy.get('.gNO89b').should('be.enabled')//valida que el boton buscar este habilitado
    })
    it.only('encontrando_barras_de_busqueda',()=>{//.only solo ejecuta este test
        cy.visit('https://www.google.com/')
        cy.get('.RNNXgb')
    })
})