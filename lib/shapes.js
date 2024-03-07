// Define a base class for shapes with a constructor that accepts a color
class Shape {
    constructor(color) {
        this.color = color; // Set the color property
    }
}

// Define a class for circles that extends the Shape class
class Circle extends Shape {
    constructor(color) {
        super(color); // Call the constructor of the parent class
    }

    // Define a method to render the circle as an SVG string
    render() {
        return `<circle cx="100" cy="100" r="50" fill="${this.color}" />`;
    }
}

// Define a class for triangles that extends the Shape class
class Triangle extends Shape {
    constructor(color) {
        super(color); // Call the constructor of the parent class
    }

    // Define a method to render the triangle as an SVG string
    render() {
        return `<polygon points="50,50 150,50 100,150" fill="${this.color}" />`;
    }
}

// Define a class for squares that extends the Shape class
class Square extends Shape {
    constructor(color) {
        super(color); // Call the constructor of the parent class
    }

    // Define a method to render the square as an SVG string
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

// Export the Circle, Triangle, and Square classes
module.exports = { Circle, Triangle, Square };
