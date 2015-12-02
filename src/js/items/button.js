import Circle from './circle';

export default class Button extends Circle {
  constructor(x, y, radius = 25) {
    super(x, y, radius);

    this.isClicked = false;
  }

  onStepEnd() {
    super.onStepEnd();

    this.isFail = false;
  }

  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);

    // 一番外のふち
    ctx.strokeStyle = '#ca31cd';
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();

    // 一つ中にあるふち
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();

    // 一番中のふち
    let grad = ctx.createLinearGradient(0, 0, 0, this.radius * 2);
    grad.addColorStop(0, '#a77518');
    grad.addColorStop(1, '#f3e244');
    ctx.strokeStyle = grad;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    ctx.stroke();

    ctx.restore();
  }

  onMouseDown(x, y) {
    this.isClicked = true;
  }

  onMouseUp(x, y) {
    this.isClicked = false;
  }
}
