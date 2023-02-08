/// <reference types="Cypress" />

describe("gallery test", () =>{

  it("login test", () =>{
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("koralovo@gmail.com");
    cy.get("#password").type("gari12345");
    cy.get("button").click();
    // cy.get(".nav-link").should("have.length",4);
    // cy.url().should("not.contain", "/login");
    // cy.get(".nav-link").eq(3).click();


  });

  it("login test with incorrect email", () =>{
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("korlvo@gmail.com");
    cy.get("#password").type("gari12345");
    cy.get("button").click();
  });

  it("login test with incorrect password", () =>{
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("koralovo@gmail.com");
    cy.get("#password").type("gari12");
    cy.get("button").click();
  });

  it("login without email", () =>{
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type(" ");
    cy.get("#password").type("gari12345");
    cy.get("button").click()
  });

  it("login without password", () =>{
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type("koralovo@gmail.com");
    cy.get("#password").type(" ");
    cy.get("button").click();
  });

  it("login without credentials", () =>{
    cy.visit("/");
    cy.get(".nav-link").eq(1).click();
    cy.get("#email").type(" ");
    cy.get("#password").type(" ");
    cy.get("button").click();
  });
});