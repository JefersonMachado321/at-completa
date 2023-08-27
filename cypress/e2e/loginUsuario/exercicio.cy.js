/// <reference types = "cypress"/>
import FazendoLogin from "../loginUsuario/login.cy";
import ProdutosCadastro from "../loginUsuario/produto.cy";
import PreenchendoEndereco from "../loginUsuario/endereco.cy";
import FazendoPreCastro from "../loginUsuario/pre-cadastro.cy";

describe("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    FazendoLogin.fazendoLogin();
    ProdutosCadastro.cadastrandoProduto();
    PreenchendoEndereco.preenchendoEndereco();
    FazendoPreCastro.preenchendoPreCastro();
  });
});
/*  Como cliente 
        Quero acessar a Loja EBAC Ok
        Para fazer um pedido de 4 produtos OK
        Fazendo a escolha dos produtos OK
        Adicionando ao carrinho OK
        Preenchendo todas opções no checkout OK
        E validando minha compra ao final */
