/// <reference types="Cypress" />

describe("gallery test", () =>{
    
    it("register test", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifra12345");
        cy.get("#password-confirmation").type("sifra12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test without First Name", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
    
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifra12345");
        cy.get("#password-confirmation").type("sifra12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test without Last Name", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifra12345");
        cy.get("#password-confirmation").type("sifra12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test without email", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        
        cy.get("#password").type("sifra12345");
        cy.get("#password-confirmation").type("sifra12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test without password", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        
        cy.get("#password-confirmation").type("sifra12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test without confirm password", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifra12345");
        
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test without accepted terms and conditions", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifra12345");
        cy.get("#password-confirmation").type("sifra12345");
        
        cy.get("button").click();
    });

    it("register test with incorrect email form", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemailyahoo.com");
        cy.get("#password").type("sifra12345");
        cy.get("#password-confirmation").type("sifra12345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test with incorrect password-less than 8 chars", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifra1");
        cy.get("#password-confirmation").type("sifra1");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test with incorrect password-no digits", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifrasifra");
        cy.get("#password-confirmation").type("sifrasifra");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test with incorrect password-no chars", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("1234512345");
        cy.get("#password-confirmation").type("1234512345");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

    it("register test with incorrect confirm password", () =>{
        cy.visit("/");
        cy.get(".nav-link").eq(2).click();
        cy.url().should("contain", "/register");
        cy.get("#first-name").type("test");
        cy.get("#last-name").type("test");
        cy.get("#email").type("testemail@yahoo.com");
        cy.get("#password").type("sifra12345");
        cy.get("#password-confirmation").type("sifra1234555");
        cy.get(":checkbox").check();
        cy.get("button").click();
    });

});

    
    
