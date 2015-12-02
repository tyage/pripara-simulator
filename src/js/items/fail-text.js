import Base from './base';
import { buttonPositionX, buttonPositionY } from '../config';

export default class SuccessText extends Base {
  constructor(x, y) {
    super(x, y);

    this.stepCount = 10;
  }

  draw(ctx) {
    ctx.font = '20px "TakaoPGothic"';
    ctx.fillStyle = 'purple';
    ctx.fillText('おしかったね', buttonPositionX - 45, buttonPositionY + 60);
  }
}
