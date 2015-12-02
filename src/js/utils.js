import { width, height } from './config';

let wait = (seconds) => {
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

export { wait, clearCanvas };
