/// <reference types="cypress" />
import LoginPage from "../../support/page_objects/login.page";
describe("Funcionalidade login", () => {
  beforeEach(() => {
    cy.visit("/minha-conta/");
  });

  it.only("Fazendo login com sucesso", () => {
    LoginPage.fazerLogin();
  });
});
