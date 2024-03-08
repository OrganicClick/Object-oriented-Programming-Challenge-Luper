// Import Shape classes and getUserInput function and import fs module to generate SVG logo
const fs = require('fs');
const { Circle, Triangle, Square } = require('./Develop/lib/shapes.js');
const { getUserInput } = require('./Develop/lib/userInput.js');

// Main function to generate SVG based on user input
async function generateSVG() {
    try {
        // Get user input
        const userInput = await getUserInput();

        // Create shape instance based on user selection
        let shape;
        switch (userInput.shape) {
            case 'Circle':
                shape = new Circle(userInput.shapeColor);
                break;
            case 'Triangle':
                shape = new Triangle(userInput.shapeColor);
                break;
            case 'Square':
                shape = new Square(userInput.shapeColor);
                break;
            default:
                console.error('Invalid shape selection');
                return;
        }

        // Generate SVG content
        const svgContent = shape.render();

        // Write SVG content to file
        fs.writeFile('logo.svg', svgContent, (err) => {
            if (err) {
                console.error('Error writing SVG to file:', err);
            } else {
                console.log('SVG file saved successfully!');
            }
        });
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the generateSVG function to start the application
generateSVG();
