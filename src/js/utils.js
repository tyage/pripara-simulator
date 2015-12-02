import Circle from './items/circle';
import Button from './items/button';
import { width, height, buttonPositionX, buttonPositionY } from './config';

let createButton = (wait) => {
  let button = new Button(buttonPositionX, buttonPositionY);
  button.moveTo(buttonPositionX, buttonPositionY, wait);
  return button;
}

// angle: 0 - 1
let createCircle = angle => {
  let distance = 100;
  let x = buttonPositionX + distance * Math.cos(Math.PI * 2 * angle);
  let y = buttonPositionY - distance * Math.sin(Math.PI * 2 * angle);
  let circle = new Circle(x, y);
  circle.moveTo(buttonPositionX, buttonPositionY, 100);
  return circle;
};

let wait = seconds => {
  let list = [];
  for (let i = 0; i < seconds; ++i) {
    list.push(false);
  }
  return list;
};

let clearCanvas = ctx => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
};

export { createButton, createCircle, wait, clearCanvas };
