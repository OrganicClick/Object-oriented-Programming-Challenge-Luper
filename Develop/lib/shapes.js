class Circle extends Shape {
    // Constructor accepts color, text, and text color
    constructor(color, text, textColor) {
        super(color);
        this.text = text; // Set the text property
        this.textColor = textColor; // Set the text color property
    }

    // Render method includes circle and text elements
    render() {
        return `
            <circle cx="100" cy="100" r="50" fill="${this.color}" /> <!-- Circle element -->
            <text x="100" y="100" fill="${this.textColor}">${this.text}</text> <!-- Text element -->
        `;
    }
}

class Triangle extends Shape {
    // Constructor accepts color, text, and text color
    constructor(color, text, textColor) {
        super(color);
        this.text = text; // Set the text property
        this.textColor = textColor; // Set the text color property
    }

    // Render method includes polygon and text elements
    render() {
        return `
            <polygon points="50,50 150,50 100,150" fill="${this.color}" /> <!-- Polygon element -->
            <text x="50" y="50" fill="${this.textColor}">${this.text}</text> <!-- Text element -->
        `;
    }
}

class Square extends Shape {
    // Constructor accepts color, text, and text color
    constructor(color, text, textColor) {
        super(color);
        this.text = text; // Set the text property
        this.textColor = textColor; // Set the text color property
    }

    // Render method includes rectangle and text elements
    render() {
        return `
            <rect x="50" y="50" width="100" height="100" fill="${this.color}" /> <!-- Rectangle element -->
            <text x="50" y="50" fill="${this.textColor}">${this.text}</text> <!-- Text element -->
        `;
    }
}
