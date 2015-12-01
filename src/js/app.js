import Circle from './circle';

const width = 360;
const height = 640;

let gameWindow = document.getElementById('game-window');
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

gameWindow.appendChild(canvas);
canvas.width = width;
canvas.height = height;

let step = () => {
  window.requestAnimationFrame(step);
};
step();
