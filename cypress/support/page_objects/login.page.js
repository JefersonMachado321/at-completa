class LoginPage {
  fazerLogin() {
    let dadosPerfil;
    cy.fixture("perfil").then((dados) => {
      dadosPerfil = dados;
      cy.get("#username").type(dadosPerfil.usuario);
      cy.get("#password").type(dadosPerfil.senha);
      cy.get(".woocommerce-form > .button").click();
    });
  }
}
export default new LoginPage();
