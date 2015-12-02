import Base from './base';

export default class Circle extends Base {
  constructor(x, y, radius) {
    super(x, y);
    this.radius = radius;

    this.speedX = 0;
    this.speedY = 0;
    this.stepCount = 0;
    this.isFinish = false;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

    return this;
  }
}
