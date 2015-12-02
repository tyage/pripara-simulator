import { wait } from './utils';
import Circle from './circle';
import { width, height } from './config';

export default (function * () {
  let centerX = width / 2;
  let centerY = height / 2;

  yield (new Circle(centerX, centerY, 10)).moveTo(centerX, centerY, 150);
  yield (new Circle(10, 10, 10)).moveTo(centerX, centerY, 100);
  yield * wait(50);
  yield (new Circle(10, 10, 10)).moveTo(centerX, centerY, 100);
  yield (new Circle(10, 110, 10)).moveTo(centerX, centerY, 100);
  yield * wait(100);
});
