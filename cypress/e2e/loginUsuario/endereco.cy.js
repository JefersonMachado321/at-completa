import EnderecoPage from "../../support/page_objects/endereco.page";
const dadosEndereco = require("../../fixtures/endereco.json");
describe("Fazendo cadastro endereco", () => {
  beforeEach(() => {
    cy.visit("/minha-conta/");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
  });

  it("Pre cadastro - EndereçoDeFaturamento ", () => {
    EnderecoPage.EndereçoDeFaturamento(
      dadosEndereco[0].nome,
      dadosEndereco[0].sobrenome,
      dadosEndereco[0].empresa,
      dadosEndereco[0].pais,
      dadosEndereco[0].endereco,
      dadosEndereco[0].casa,
      dadosEndereco[0].cidade,
      dadosEndereco[0].estado,
      dadosEndereco[0].cep,
      dadosEndereco[0].telefone,
      dadosEndereco[0].email
    );
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });

  it.only("Pre cadastro - Endereço de entrega", () => {
    EnderecoPage.EndereçoDeEntrega(
        dadosEndereco[1].nome,
        dadosEndereco[1].sobrenome,
        dadosEndereco[1].empresa,
        dadosEndereco[1].pais,
        dadosEndereco[1].endereco,
        dadosEndereco[1].casa,
        dadosEndereco[1].bairro,
        dadosEndereco[1].estado,
        dadosEndereco[1].cep,
    );
    
    cy.get(".woocommerce-message").should(
      "contain",
      "Endereço alterado com sucesso."
    );
  });
});
