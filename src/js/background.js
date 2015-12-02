import { buttonPositionX, buttonPositionY, buttonRadius, width, height } from './config';

let drawButton = ctx => {
  ctx.save();

  ctx.translate(buttonPositionX, buttonPositionY);

  // 一番外のふち
  ctx.strokeStyle = '#ca31cd';
  ctx.lineWidth = 7;
  ctx.beginPath();
  ctx.arc(0, 0, buttonRadius, 0, Math.PI * 2, false);
  ctx.stroke();

  // 一つ中にあるふち
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(0, 0, buttonRadius, 0, Math.PI * 2, false);
  ctx.stroke();

  // 一番中のふち
  let grad = ctx.createLinearGradient(0, 0, 0, buttonRadius * 2);
  grad.addColorStop(0, '#a77518');
  grad.addColorStop(1, '#f3e244');
  ctx.strokeStyle = grad;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, buttonRadius, 0, Math.PI * 2, false);
  ctx.stroke();

  ctx.restore();
};

let drawStage1 = ctx => {
  ctx.save();

  drawButton(ctx);

  // 下部のテキスト
  ctx.font = '25px "TakaoPGothic"';
  ctx.fillStyle = '#37ade1';
  ctx.fillText('画面をおしてね！', width / 2 - 80, height - 30);

  ctx.restore();
};

let drawCommonBackground = ctx => {
  // TODO: ゲージ
};

export { drawStage1, drawCommonBackground };
