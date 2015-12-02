import 'babel-polyfill';
import generateScenario from './scenario';
import { width, height } from './config';

let gameWindow = document.getElementById('game-window');
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

gameWindow.appendChild(canvas);
canvas.width = width;
canvas.height = height;

let clear = ctx => {
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);
};

let scenario = generateScenario();
let currentScenario = scenario.next();
let items = [];
let step = () => {
  clear(ctx);

  while (true) {
    // current scenario is wait
    if (currentScenario.value === false || currentScenario.done) {
      break;
    }

    let item = currentScenario.value;
    items.push(item);

    currentScenario = scenario.next();
  }

  items.forEach((item, i) => {
    if (item.isFinish) {
      items.splice(i, 1);
      return;
    }

    item.step();
    item.draw(ctx);
  });

  if (currentScenario.done === false) {
    currentScenario = scenario.next();
    window.requestAnimationFrame(step);
  }
};
step();
