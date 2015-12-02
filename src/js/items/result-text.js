import Base from './base';
import { buttonPositionX, buttonPositionY } from '../config';

export default class ResultText extends Base {
  constructor(x = buttonPositionX, y = buttonPositionY + 60) {
    super(x, y);

    this.stepCount = 10;
    this.text = '';
    this.color = '';
    this.fontSize = 17;
    this.alpha = 0;
    this.speedY = -2;
  }

  step() {
    super.step();

    if (this.stepCount < 5) {
      // bigger & fadein
      this.fontSize += 0.2;
      this.alpha += 0.1;
    } else {
      // smaller & fadeout
      this.fontSize -= 0.2;
      this.alpha -= 0.1;
    }
  }

  draw(ctx) {
    ctx.save();

    ctx.font = `${this.fontSize}px "TakaoPGothic"`;
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(this.text, this.x, this.y);

    ctx.restore();
  }
}
