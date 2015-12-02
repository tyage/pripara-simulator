import 'babel-polyfill';
import generateScenario from './scenario';
import { width, height } from './config';
import { clearCanvas } from './utils';
import SuccessText from './items/success-text';
import FailText from './items/fail-text';
import Iine from './items/iine-text';
import { drawStage1, drawCommonBackground } from './background';

let gameWindow = document.getElementById('game-window');
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');

gameWindow.appendChild(canvas);
canvas.width = width;
canvas.height = height;

let scenario = generateScenario();
let currentScenario = scenario.next();
let items = [];
let score = 0;

// auto iine
let isAuto = false;
document.getElementById('auto-iine-value').addEventListener('change', e => {
  isAuto = e.target.checked;
  return false;
});

canvas.addEventListener('mousedown', e => {
  items.forEach(item => {
    item.onMouseDown();
  });
});

let step = () => {
  let isSuccess = false;
  let isFail = false;

  clearCanvas(ctx);

  // fetch all items of current scenario
  while (true) {
    // current scenario is wait
    if (currentScenario.value === false || currentScenario.done) {
      break;
    }

    let item = currentScenario.value;
    items.push(item);

    currentScenario = scenario.next();
  }

  // step items and draw
  items.forEach((item, i) => {
    if (isAuto) {
      item.onMouseDown();
    }
    if (item.isSuccess) {
      isSuccess = true;
    }
    if (item.isFail) {
      isFail = true;
    }
    if (item.isEnd || item.isFail || item.isSuccess) {
      items.splice(i, 1);
      return;
    }

    item.step();
    item.draw(ctx);
  });

  if (isSuccess) {
    items.push(new SuccessText());
    score += 800;
    for (let i = 0, l = Math.random() * 3; i < l; ++i) {
      items.push(new Iine());
    }
  } else if (isFail) {
    items.push(new FailText());
  }

  // TODO: draw a background of current stage
  drawStage1(ctx);
  drawCommonBackground(ctx, score);

  if (currentScenario.done === true) {
    window.clearInterval(timer);
    return;
  }

  currentScenario = scenario.next();
};
let timer = window.setInterval(() => {
  step();
}, 30);
