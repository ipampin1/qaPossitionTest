const viewports = {
    desktop: { width: 1280, height: 800 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 667 }
};

describe('Check input text field max length', () => {
    beforeEach(() => {
        const device = Cypress.env('device') || 'desktop';
        cy.viewport(viewports[device].width, viewports[device].height);
        cy.visitHome();
    });

    it(`Test input text max length`, () => {
        const longText = `More than 300 characters: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
        const shortText = `Few characters`;
        cy.uploadFile('#inputImage', 'alf_320x320.jpg');
        // add short text and check button is enabled, then add long text and check button is disabled
        cy.addText(shortText);
        cy.contains('Create Item').should('not.be.disabled');
        cy.addText(longText);
        cy.contains('Create Item').should('be.disabled');
    });
});
