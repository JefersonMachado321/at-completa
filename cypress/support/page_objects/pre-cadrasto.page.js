import { faker } from "@faker-js/faker";

class CadastroPage {
  Fazercadastro() {
    let nameFaker = faker.person.firstName().toLowerCase()
    let emailFaker = faker.internet.email(nameFaker);
    let senhaFaker = faker.internet.password();
    cy.get("#reg_email").type(emailFaker);
    cy.get("#reg_password").type(senhaFaker);
    cy.get(":nth-child(4) > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain",
     `Olá, ${nameFaker}`
    );
  }
}
export default new CadastroPage();
