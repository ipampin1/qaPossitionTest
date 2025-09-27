const viewports = {
    desktop: { width: 1280, height: 800 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 667 }
};

describe(`Delete newly created item`, () => {
    beforeEach(() => {
        const device = Cypress.env('device') || 'desktop';
        cy.viewport(viewports[device].width, viewports[device].height);
        cy.visitHome();
    });

    it('Remove a created item and check it was removed', () => {
        const text = `Testing delete item with Cypress`;
        cy.createDeleteItem(text);
        // check text is not present after deletion
        cy.contains(text).should('not.exist');
    });
});