import Base from './base';
import { buttonPositionX, buttonPositionY } from '../config';

export default class Circle extends Base {
  constructor(x, y, radius = 25) {
    super(x, y);
    this.radius = radius;
  }

  onStepEnd() {
    super.onStepEnd();

    this.isFail = true;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

    return this;
  }

  onMouseDown(x, y) {
    let distanceX = buttonPositionX - this.x;
    let distanceY = buttonPositionY - this.y;
    if (Math.pow(distanceX, 2) + Math.pow(distanceY, 2) < Math.pow(this.radius, 2)) {
      this.isSuccess = true;
    }
  }

  onMouseUp(x, y) {
  }
}
