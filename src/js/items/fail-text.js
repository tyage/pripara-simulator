import ResultText from './result-text';

export default class FailText extends ResultText {
  constructor(x, y) {
    super(x, y);

    this.text = 'おしかったね';
    this.color = 'purple';
  }
}
