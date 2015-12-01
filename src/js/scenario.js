import { wait } from './utils';
import Circle from './circle';

export default (function * () {
  yield (new Circle(10, 10, 10)).moveTo(100, 100);
  yield * wait(10);
  yield (new Circle(10, 10, 10)).moveTo(100, 100);
});
