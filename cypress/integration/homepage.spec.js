import { cyan } from "@mui/material/colors";

describe("renders the homepage", () => {
  beforeEach(() => {
    cy.visit("/view=full&sort_by=tasks&by_order=desc&per_page=10");
  });

  it("renders correctly", () => {
    cy.get("#container").should("exist");
  });

  it("allows the search and sorting to be used, clicks on the buttons", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#mui-1").clear();
    cy.get("#mui-1").type("teste");
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".makeStyles-search-5").click();
    cy.get(".css-1ygcj2i-MuiTableCell-root > b").click();
    cy.get('[element="details"] > b').click();
    cy.get('[element="details"] > b').click();
    cy.get('[element="category"] > b').click();
    cy.get('[element="category"] > b').click();
    cy.get(".css-1ygcj2i-MuiTableCell-root > b").click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#mui-1").clear();
    cy.get(".makeStyles-search-5").click();
    /* ==== End Cypress Studio ==== */
  });

  it("finds a specific task 'Ir àsassasa compras'", () => {
    cy.findByText("Ir àsassasa compras").should("exist");
  });

  it("routes to the correct endpoint when sorting or searching", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[element="details"] > b').click();
    /* ==== End Cypress Studio ==== */
    cy.url().should("include", "sort_by=details");
    /* ==== Generated with Cypress Studio ==== */
    cy.get('[element="category"] > b').click();
    cy.url().should("include", "sort_by=category");
    cy.get(".css-1ygcj2i-MuiTableCell-root > b").click();
    cy.url().should("include", "sort_by=tasks");
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#mui-1").clear();
    cy.get("#mui-1").type("teste2");
    cy.get(".makeStyles-search-5").click();
    cy.url().should("include", "&search_by=teste2");
    /* ==== End Cypress Studio ==== */
  });

  it("expect 10 rows and 3 col, then get the hole table data ", () => {
    cy.get("#table-1>tbody>tr").should("have.length", 10);
    cy.get("#table-1>tbody>tr:eq(0)>th").should("have.length", 1);
    cy.get("#table-1>tbody>tr:eq(0)>td").should("have.length", 2);

    //get the hole table data
    cy.get("#table-1>tbody>tr").each(() => {});
  });
});
