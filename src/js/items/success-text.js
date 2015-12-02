import Base from './base';
import { buttonPositionX, buttonPositionY } from '../config';

export default class SuccessText extends Base {
  constructor(x, y) {
    super(x, y);

    this.stepCount = 10;
  }

  draw(ctx) {
    ctx.save();

    ctx.font = '20px "TakaoPGothic"';
    ctx.fillStyle = '#e13e70';
    ctx.fillText('メチャいいね♡', buttonPositionX - 45, buttonPositionY + 60);

    ctx.restore();
  }
}
