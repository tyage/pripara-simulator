import 'babel-polyfill';
import generateScenario from './scenario';

const width = 360;
const height = 640;

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

  items.forEach(item => {
    item.step();
    item.draw(ctx);
  });

  if (currentScenario.done === false) {
    currentScenario = scenario.next();
    window.requestAnimationFrame(step);
  }
};
step();
