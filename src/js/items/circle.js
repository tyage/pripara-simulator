import Base from './base';
import { buttonPositionX, buttonPositionY } from '../config';

export default class Circle extends Base {
  constructor(x, y, radius = 25, stopCount = 10) {
    super(x, y);
    this.radius = radius;
    this.stopCount = stopCount;

    // phase1: 中心に移動
    // phase2: 止まる
    this.phase = 1;
  }

  onStepEnd() {
    if (this.phase === 1) {
      this.phase = 2;
      this.stepCount = this.stopCount;
      this.speedX = 0;
      this.speedY = 0;
    } else {
      super.onStepEnd();
      this.isFail = true;
    }
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }

  onMouseDown(x, y) {
    let distanceX = buttonPositionX - this.x;
    let distanceY = buttonPositionY - this.y;
    if (Math.pow(distanceX, 2) + Math.pow(distanceY, 2) < Math.pow(this.radius * 2, 2)) {
      this.isSuccess = true;
    }
  }

  onMouseUp(x, y) {
  }
}
