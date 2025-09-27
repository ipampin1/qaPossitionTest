const viewports = {
    desktop: { width: 1280, height: 800 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 667 }
};

describe('Check text is displayed', () => {
    beforeEach(() => {
        const device = Cypress.env('device') || 'desktop';
        cy.viewport(viewports[device].width, viewports[device].height);
        cy.visitHome();
    });

    const textToCheck = 'Creators: Matt Duffer, Ross Duffer';
    it(`Check "${textToCheck}" text is displayed`, () => {
        cy.contains(textToCheck).should('be.visible');
    });
});
