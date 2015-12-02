import { wait, createCircle, createButton } from './utils';
import { width, height, buttonPositionX, buttonPositionY } from './config';

export default (function * () {
  yield createButton(150);
  yield createCircle(0);
  yield * wait(50);
  yield createCircle(1 / 8);
  yield createCircle(1 / 4);
  yield * wait(200);
});
