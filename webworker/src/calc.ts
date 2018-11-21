export class Calc {

  public countNb = 0;
  private currentImmediate;

  public start() {
    console.log('Start WW');

    if (this.currentImmediate) this.stop();
    this.doCount();
  }

  public stop() {
    console.log('Stop WW');
    clearTimeout(this.currentImmediate);
    this.currentImmediate = null;
  }

  private doCount() {
    console.log('.');
    this.countNb++;
    this.currentImmediate = setTimeout(this.doCount.bind(this), 0);
  }

}
