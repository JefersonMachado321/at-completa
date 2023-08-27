///<reference types="cypress" />
import preCadrastoPage from "../../support/page_objects/pre-cadrasto.page";

describe("Fazendo Pre cadastro", () => {
  beforeEach(() => {
    cy.visit("/minha-conta/");
  });

  it("Fazendo Pre-Cadastro", () => {
    preCadrastoPage.Fazercadastro();
  });
});
