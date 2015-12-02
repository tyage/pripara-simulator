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

let getMousePosition = e => {
  let rect = canvas.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  return [x, y];
};
canvas.addEventListener('mousedown', e => {
  let [x, y] = getMousePosition(e);
  items.forEach(item => {
    item.onMouseDown(x, y);
  });
});
canvas.addEventListener('mouseup', e => {
  let [x, y] = getMousePosition(e);
  items.forEach(item => {
    item.onMouseUp(x, y);
  });
});

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
