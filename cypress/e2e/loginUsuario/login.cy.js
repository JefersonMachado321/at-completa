/// <reference types="cypress" />
import LoginPage from "../../support/page_objects/login.page";
class FazendoLogin {
  fazendoLogin() {
    describe("Funcionalidade login", () => {
      beforeEach(() => {
        cy.visit("/minha-conta/");
      });

      it.only("Fazendo login com sucesso", () => {
        LoginPage.fazerLogin();
      });
    });
  }
}
export default new FazendoLogin();
