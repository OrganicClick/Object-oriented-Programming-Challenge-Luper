// Import the Inquirer library for handling user input
const inquirer = require('inquirer');

// Define a function to prompt the user for input
async function getUserInput() {
    // Use Inquirer to prompt the user with a series of questions
    const userInput = await inquirer.prompt([
        // Prompt for text input for the logo (up to three characters)
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to three characters):'
        },
        // Prompt for text color input (color keyword or hexadecimal number)
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (color keyword or hexadecimal number):'
        },
        // Prompt for shape selection (circle, triangle, or square)
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        // Prompt for shape color input (color keyword or hexadecimal number)
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (color keyword or hexadecimal number):'
        }
    ]);

    return userInput; // Return the user input as an object
}

// Export the getUserInput function for use in other parts of the application
module.exports = { getUserInput };
