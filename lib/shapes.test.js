import { Triangle, Circle, Square } from './shapes.js';

test('Triangle render method', () => {
  const shape = new Triangle();
  shape.setColor('blue');
  expect(shape.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method', () => {
  const shape = new Circle();
  shape.setColor('green');
  expect(shape.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
});

test('Square render method', () => {
  const shape = new Square();
  shape.setColor('red');
  expect(shape.render()).toBe('<rect x="70" y="20" width="160" height="160" fill="red" />');
});