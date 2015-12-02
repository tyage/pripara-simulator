import Circle from './items/circle';
import { width, height, buttonPositionX, buttonPositionY } from './config';

// angle: 0 - 1
let createCircle = (angle, stepCount = 33) => {
  let distance = 150;
  let x = buttonPositionX + distance * Math.cos(Math.PI * 2 * angle);
  let y = buttonPositionY - distance * Math.sin(Math.PI * 2 * angle);
  let circle = new Circle(x, y);
  circle.moveTo(buttonPositionX, buttonPositionY, stepCount);
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
  ctx.fillStyle = 'rgb(253, 219, 246)';
  ctx.fillRect(0, 0, width, height);
};

export { createCircle, wait, clearCanvas };
