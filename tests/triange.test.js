// Import the Triangle class from the shapes module
const { Triangle } = require('../Develop/lib/shapes');

// Describe the behavior of the Triangle class
describe('Triangle Class', () => {
    // Test case to ensure that the render method of Triangle generates correct SVG output
    test('Triangle render method generates correct SVG output', () => {
        // Create a new Triangle instance with a blue color
        const triangle = new Triangle('blue');
        // Call the render method to generate SVG output
        const svgOutput = triangle.render();
        // Assert that the generated SVG output matches the expected value
        expect(svgOutput).toEqual('<polygon points="50,50 150,50 100,150" fill="blue" />');
    });

});
