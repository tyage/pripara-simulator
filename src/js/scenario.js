import { wait } from './utils';
import Circle from './items/circle';
import Button from './items/button';
import { width, height } from './config';

export default (function * () {
  let centerX = width / 2;
  let centerY = height / 2;

  yield (new Button(centerX, centerY)).moveTo(centerX, centerY, 150);
  yield (new Circle(10, 10)).moveTo(centerX, centerY, 100);
  yield * wait(50);
  yield (new Circle(10, 10)).moveTo(centerX, centerY, 100);
  yield (new Circle(10, 110)).moveTo(centerX, centerY, 100);
  yield * wait(200);
});
