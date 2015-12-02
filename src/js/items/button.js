import Circle from './circle';

export default class Button extends Circle {
  constructor(x, y, radius = 25) {
    super(x, y, radius);

    this.isClicked = false;
  }

  draw(ctx) {
    ctx.fillStyle = this.isClicked ? 'red' : 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

    return this;
  }

  onMouseDown(x, y) {
    this.isClicked = true;
  }

  onMouseUp(x, y) {
    this.isClicked = false;
  }
}
