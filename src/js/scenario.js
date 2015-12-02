import { wait, createCircle, createButton } from './utils';
import { width, height, buttonPositionX, buttonPositionY } from './config';

let baseStep = 33;

export default (function * () {
  yield createButton(500);

  // ほんとにスペシャルなパーティーのはじまりは
  yield createCircle(1 / 8);
  yield * wait(baseStep);
  yield createCircle(0 / 8);
  yield * wait(baseStep);
  yield createCircle(7 / 8);
  yield * wait(baseStep);
  yield createCircle(6 / 8);
  yield * wait(baseStep);
  yield createCircle(5 / 8);
  yield * wait(baseStep);
  yield createCircle(4 / 8);
  yield * wait(baseStep);
  yield createCircle(3 / 8);
  yield * wait(baseStep);

  // あぁ〜^
  yield createCircle(0 / 8);
  yield createCircle(4 / 8);
  yield * wait(baseStep / 2);
  yield createCircle(0 / 8);
  yield createCircle(4 / 8);
  yield * wait(baseStep / 2);
  yield createCircle(1 / 8);
  yield createCircle(3 / 8);
  yield createCircle(6 / 8);
  yield * wait(baseStep);

  // どきどきしちゃうような魔法
  yield createCircle(4 / 8);
  yield * wait(baseStep);
  yield createCircle(6 / 8);
  yield * wait(baseStep);
  yield createCircle(0 / 8);
  yield * wait(baseStep);
  yield createCircle(1 / 8);
  yield createCircle(3 / 8);
  yield createCircle(6 / 8);

  yield * wait(200);
});
