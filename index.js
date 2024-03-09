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
                shape = new Circle(userInput.shapeColor, userInput.text, userInput.textColor);
                break;
            case 'Triangle':
                shape = new Triangle(userInput.shapeColor, userInput.text, userInput.textColor);
                break;
            case 'Square':
                shape = new Square(userInput.shapeColor, userInput.text, userInput.textColor);
                break;
            default:
                console.error('Invalid shape selection');
                return;
        }

        // Generate SVG content wrapped within <svg> tags
        const svgContent = 
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                <style>
                    /* Define styles for the SVG elements */
                    text {
                        font-family: Arial, sans-serif;
                        font-size: 20px;
                        text-anchor: middle; /* Center the text horizontally */
                        dominant-baseline: central; /* Center the text vertically */
                }
                </style>
                ${shape.render()}
            </svg>;
        ;

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
