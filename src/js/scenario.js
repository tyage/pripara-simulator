import { wait } from './utils';
import Circle from './items/circle';
import Button from './items/button';
import { width, height, buttonPositionX, buttonPositionY } from './config';

export default (function * () {
  yield (new Button(buttonPositionX, buttonPositionY)).moveTo(buttonPositionX, buttonPositionY, 150);
  yield (new Circle(10, 10)).moveTo(buttonPositionX, buttonPositionY, 100);
  yield * wait(50);
  yield (new Circle(10, 10)).moveTo(buttonPositionX, buttonPositionY, 100);
  yield (new Circle(10, 110)).moveTo(buttonPositionX, buttonPositionY, 100);
  yield * wait(200);
});
