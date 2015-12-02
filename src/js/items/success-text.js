import ResultText from './result-text';

export default class SuccessText extends ResultText {
  constructor(x, y) {
    super(x, y);

    this.text = 'メチャいいね♡';
    this.color = '#e13e70';
  }
}
