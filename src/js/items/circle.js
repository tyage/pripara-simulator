import Base from './base';

export default class Circle extends Base {
  constructor(x, y, radius = 25) {
    super(x, y);
    this.radius = radius;

    this.speedX = 0;
    this.speedY = 0;
    this.stepCount = 0;
    this.isFinish = false;
    this.isClicked = false;
  }

  draw(ctx) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

    return this;
  }

  onMouseDown(x, y) {
    let distanceX = x - this.x;
    let distanceY = y - this.y;
    if (Math.pow(distanceX, 2) + Math.pow(distanceY, 2) < Math.pow(this.radius, 2)) {
      // clicked!
      this.isClicked = true;
    }
  }

  onMouseUp(x, y) {
    this.isClicked = false;
  }
}
