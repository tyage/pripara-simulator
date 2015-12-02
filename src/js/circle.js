export default class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;

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
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

    return this;
  }
}
