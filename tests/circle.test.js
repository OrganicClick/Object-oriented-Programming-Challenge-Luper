// Import the Circle class from the shapes module
const { Circle } = require('../Develop/lib/shapes');

// Describe the behavior of the Circle class
describe('Circle Class', () => {
    // Test case to ensure that the render method of Circle generates correct SVG output
    test('Circle render method generates correct SVG output', () => {
        // Create a new Circle object with specified properties
        const circle = new Circle('red', 'Circle Text', 'black');

        // Call the render method to generate SVG output
        const svgOutput = circle.render();

        // Assert that the generated SVG output matches the expected value
        expect(svgOutput).toEqual(`
            <circle cx="100" cy="100" r="50" fill="red" /> <!-- Circle element -->
            <text x="100" y="100" fill="black">Circle Text</text> <!-- Text element -->
        `);
    });
});
