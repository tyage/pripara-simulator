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
    ctx.save();

    ctx.translate(this.x, this.y);

    // 一番外のふち
    ctx.fillStyle = '#e8132e';
    ctx.beginPath();
    ctx.arc(0, 0, this.radius + 5, 0, Math.PI * 2, false);
    ctx.fill();

    // 一つ中にあるふち
    ctx.fillStyle = '#fb7592';
    ctx.beginPath();
    ctx.arc(0, 0, this.radius + 2, 0, Math.PI * 2, false);
    ctx.fill();

    // 真ん中
    let grad = ctx.createLinearGradient(0, 0, 0, this.radius * 2);
    grad.addColorStop(0, '#fefffd');
    grad.addColorStop(1, '#eb688d');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2, false);
    ctx.fill();

    // ハート refs: http://www.endo-yuta.com/2011/06/html5-canvas.html
    grad = ctx.createLinearGradient(0, 0, 0, this.radius * 2);
    grad.addColorStop(0, '#f0c4d1');
    grad.addColorStop(1, '#df83a0');
    ctx.fillStyle = grad;
    ctx.scale(0.3, 0.3);
    ctx.translate(-72, -63);

    ctx.beginPath();
    ctx.moveTo(75,40);
    ctx.bezierCurveTo(75,37,70,25,50,25);
    ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
    ctx.bezierCurveTo(20,80,40,102,75,120);
    ctx.bezierCurveTo(110,102,130,80,130,62.5);
    ctx.bezierCurveTo(130,62.5,130,25,100,25);
    ctx.bezierCurveTo(85,25,75,37,75,40);
    ctx.fill();

    ctx.restore();
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
