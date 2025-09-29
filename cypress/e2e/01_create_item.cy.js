const viewports = {
    desktop: { width: 1280, height: 800 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 667 }
};

describe(`Create new Item`, () => {
    let device;
    beforeEach(() => {
        device = Cypress.env('device') || 'desktop';
        cy.viewport(viewports[device].width, viewports[device].height);
        cy.visitHome();
    });

    it(`Create a new generic item and check it is shown in items list`, () => {
        const text = `Testing Creation of new item then it is deleted`;
        cy.createDeleteItem(text);
    });
});
