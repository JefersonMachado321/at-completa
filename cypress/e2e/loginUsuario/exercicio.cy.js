/// <reference types = "cypress"/>

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC Ok
        Para fazer um pedido de 4 produtos OK
        Fazendo a escolha dos produtos OK
        Adicionando ao carrinho OK
        Preenchendo todas opções no checkout OK
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/minha-conta/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 
    });


})
