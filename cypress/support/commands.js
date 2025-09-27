// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// --  homepage  commands--
// visit home page
Cypress.Commands.add('visitHome', () => {
    cy.visit(`/`);
});

// upload file from fixtures folder
Cypress.Commands.add('uploadFile', (cta, fileName) => {
    cy.fixture(fileName).as('myfixture');
    cy.get(cta, { force: true }).selectFile('@myfixture');
});

// add text to text area
Cypress.Commands.add('addText', (text) => {
    cy.get('#content > div:nth-child(2) > div > div > form > div:nth-child(3) > div > textarea')
        .clear()
        .type(text);
});

// press CTA button 
Cypress.Commands.add('submitCTA', (ctaText) => {
    cy.contains(ctaText).click();
});

// press edit button on X item of the list
Cypress.Commands.add('editItem', (itemIndex) => {
    cy.get(`#content > div:nth-child(1) > div > ul > li:nth-child(${itemIndex}) > div > div > div.btn-group.pull-right > button:nth-child(1)`).click();
});

Cypress.Commands.add('deleteItem', () => {
    cy.get(`#content > div:nth-child(1) > div > ul > li:nth-child(13) > div > div > div.btn-group.pull-right > button:nth-child(2)`).click();
    cy.contains('Yes, delete it!').click();
});

Cypress.Commands.add('createDeleteItem', (text) => {
    cy.uploadFile('#inputImage', 'alf_320x320.jpg');
    cy.addText(text);
    cy.submitCTA('Create Item');
    cy.contains(text).should('exist');
    cy.deleteItem();
})