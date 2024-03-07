// Import Shape classes and getUserInput function
const { Circle, Triangle, Square } = require('./lib/shapes');
const { getUserInput } = require('./lib/userInput');

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
        console.log('Generated SVG:', svgContent);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the generateSVG function to start the application
generateSVG();
