///<reference types = "cypress"/>

describe("Funcionalidades produto", () => {
  beforeEach(() => {
    cy.visit("/minha-conta/");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
    });
    cy.visit("/produtos/");
  });

  it.only("Adicionado produtos ao carrinho", () => {
    cy.addProduto("Atlas Fitness Tank", "M", "Blue", 4);
  });
});
