///<reference types="cypress" />
import { faker } from "@faker-js/faker";
let emailFaker = faker.internet.email();
let senhaFaker = faker.internet.password();
let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
describe("Fazendo Pre cadastro", () => {
  beforeEach(() => {
    cy.visit("/minha-conta/");
    cy.fixture('perfil').then((dados)=>{
      cy.login(dados.usuario,dados.senha)
    })
  });

});

