export default class Base {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.speedX = 0;
    this.speedY = 0;
    this.stepCount = 0;
    this.isFinish = false;
  }

  moveTo(x, y, stepCount) {
    this.speedX = (x - this.x) / stepCount;
    this.speedY = (y - this.y) / stepCount;
    this.stepCount = stepCount;

    return this;
  }

  step() {
    if (this.stepCount > 0) {
      this.x += this.speedX;
      this.y += this.speedY;
      --this.stepCount;
    } else {
      this.isFinish = true;
    }

    return this;
  }

  draw(ctx) {
    return this;
  }

  onMouseDown(x, y) {
  }

  onMouseUp(x, y) {
  }
}
