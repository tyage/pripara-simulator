import Base from './base';
import { buttonPositionX, buttonPositionY } from '../config';

export default class SuccessText extends Base {
  constructor(x, y) {
    super(x, y);

    this.stepCount = 10;
  }

  draw(ctx) {
    ctx.fillStyle = 'blue';
    ctx.fillText('メチャいいね♡', buttonPositionX, buttonPositionY + 100);

    return this;
  }
}
