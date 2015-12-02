import Circle from './circle';

export default class Button extends Circle {
  draw(ctx) {
    ctx.fillStyle = this.isClicked ? 'red' : 'black';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

    return this;
  }
}
