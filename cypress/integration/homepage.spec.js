import { cyan } from "@mui/material/colors";

describe("renders them homepage", () => {
  it("renders correctly", () => {
    cy.visit("/view=full&sort_by=tasks&by_order=desc&per_page=10");
    cy.get("#container").should("exist");
  });

  it("allows the search and sorting to be used", () => {
    cy.visit("/view=full&sort_by=tasks&by_order=desc&per_page=10");
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
    cy.get('#mui-1').clear();
    cy.get('.makeStyles-search-5').click();
    /* ==== End Cypress Studio ==== */
  });
});
