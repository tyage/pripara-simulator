import Base from './base';
import { width, height } from '../config';

export default class SuccessText extends Base {
  constructor(x = width + Math.random() * width, y = Math.random() * height) {
    super(x, y);

    this.speedX = -10;
    this.stepCount = -this.x / this.speedX;
    this.fontSize = 20 + Math.random() * 10;
  }

  draw(ctx) {
    ctx.save();

    ctx.font = `${this.fontSize}px "TakaoPGothic"`;
    ctx.shadowColor = 'black';
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 3;
    ctx.fillStyle = 'white';
    ctx.fillText('いいね♡', this.x, this.y);

    ctx.restore();
  }
}
