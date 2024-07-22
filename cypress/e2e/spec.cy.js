
describe('Name Selection Test', () => {
  it('Types name, selects dropdown choice, and verifies history log', () => {
    const testName = 'Sydney';
    const selectedOption = 'This is me'; 

    // Visit the page where the name input and dropdown are located
    cy.visit('http://192.168.68.64:8080'); // Replace with your app's URL

    // Type your name into the input field
    cy.get('input[name="name"]').type(testName);

    // Select the dropdown option
    cy.get('select[name="options"]').select(selectedOption);

    // Click a button to confirm the selection (if applicable)
    cy.get('button[type="submit"]').click();

    // Verify the history log
    cy.get('.history-log').should('have.length.gt', 0).then((logs) => {
      // Check the number of tries
      expect(logs.length).to.equal(1); 

      // Check if the correct name is in the history log
      cy.wrap(logs[0]).should('contain.text', testName); 
    });
  });
});