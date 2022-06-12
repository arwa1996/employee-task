/// <reference types="cypress" />
describe('Input form', () => {
  it('opens the site', () => {
    cy.visit('localhost:3001'); //this is the server that was started earlier
  });
  it('should open modal when user clicks on Add employee', () => {
    //get btn
    cy.get('#addEmployeeBtn').click();
    cy.get('.ant-modal').should('exist');
  });
  it('add employee modal should have input field and select field', () => {
    //get btn
    cy.get('.ant-input').should('exist');
    cy.get('.ant-select-selector').should('exist');
  });
  it('show alert messages when submitting empty fields', () => {
    //get btn
    cy.get('.ant-btn-primary > span').click();
    cy.get('.ant-notification-notice').should('exist');
  });
});
