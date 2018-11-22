export class Calc {

  public countNb = 0;
  private currentImmediate;

  public start() {
    if (this.currentImmediate) this.stop();
    this.doCount();
  }

  public stop() {
    clearTimeout(this.currentImmediate);
    this.currentImmediate = null;
  }

  private doCount() {
    this.countNb++;
    this.currentImmediate = setTimeout(this.doCount.bind(this), 0);
  }

}
