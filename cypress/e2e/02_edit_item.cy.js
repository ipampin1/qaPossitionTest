
const viewports = {
    desktop: { width: 1280, height: 800 },
    tablet: { width: 768, height: 1024 },
    mobile: { width: 375, height: 667 }
};

describe('Edit an existing Item', () => {
    beforeEach(() => {
        const device = Cypress.env('device') || 'desktop';
        cy.viewport(viewports[device].width, viewports[device].height);
        // visit home page with selected device
        cy.visitHome();
    });

    it(`Edit one item from the list and save`, () => {

        const itemNum = 2 // item to edit on the list
        const updateCTA = `#content > div:nth-child(1) > div > ul > li:nth-child(${itemNum}) > div > div > div:nth-child(2) > p` // cta to get text from
        const editedText = ' - Edited text'
        cy.visitHome();
        cy.get(updateCTA)
            // get the text of the item to edit
            .invoke('text')
            .then((text) => {
                // edit X item on the list
                cy.editItem(itemNum);
                // add new text
                cy.addText(text + editedText);
                cy.contains('Update Item').click()
                // check new text is present
                cy.get(updateCTA).contains(editedText);
                // put text back to original
                cy.editItem(itemNum);
                cy.addText(text);
                cy.contains('Update Item').click()
            });
    });
});
