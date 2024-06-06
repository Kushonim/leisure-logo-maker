const { Triangle, Circle, Square } = require('./shapes.js');

function generateSVG({ text, textColor, shape, shapeColor }) {
  let shapeElement;
  switch (shape) {
    case 'Triangle':
      shapeElement = new Triangle(shapeColor);
      break;
    case 'Circle':
      shapeElement = new Circle(shapeColor);
      break;
    case 'Square':
      shapeElement = new Square(shapeColor);
      break;
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shapeElement.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

module.exports = generateSVG;
