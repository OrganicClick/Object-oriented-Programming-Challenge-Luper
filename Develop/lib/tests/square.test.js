// Import the Square class from the shapes module
const { Square } = require('../lib/shapes');

// Describe the behavior of the Square class
describe('Square Class', () => {
    // Test case to ensure that the render method of Square generates correct SVG output
    test('Square render method generates correct SVG output', () => {
        // Create a new Square instance with a green color
        const square = new Square('green');
        // Call the render method to generate SVG output
        const svgOutput = square.render();
        // Assert that the generated SVG output matches the expected value
        expect(svgOutput).toEqual('<rect x="50" y="50" width="100" height="100" fill="green" />');
    });

});
