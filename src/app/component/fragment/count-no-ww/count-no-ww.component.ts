import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Worker1OutApi} from '../../../../../webworker/api/worker1-out.api';
import {WebWorkerService} from '../../../service/web-worker.service';

@Component({
  selector: 'app-count-no-ww',
  templateUrl: './count-no-ww.component.html',
  styleUrls: ['./count-no-ww.component.css']
})
export class CountNoWwComponent implements OnInit, OnDestroy {

  @Input() enabled: boolean;
  public currentNb = 0;
  public countNb = 0;
  private currentImmediate;
  private currentInterval;

  constructor(
    private webWorkerService: WebWorkerService,) {
  }

  public ngOnInit() {

    this.currentInterval = setInterval(() => {
      this.currentNb = this.countNb;
    }, 200);

    // Abonnement aux evenements
    this.webWorkerService.startEvent.subscribe(() => this.startWebWorker());
    this.webWorkerService.stopEvent.subscribe(() => this.stopWebWorker());
    this.webWorkerService.resetEvent.subscribe(() => this.resetWebWorker());
  }

  ngOnDestroy(): void {
    if (this.currentInterval) clearInterval(this.currentInterval);
  }

  private startWebWorker() {
    if (this.enabled) {
      if (this.currentImmediate) this.stopWebWorker();
      this.countNb = 0;
      this.doCount();
    }
  }

  private stopWebWorker() {
    clearTimeout(this.currentImmediate);
    this.currentImmediate = null;
  }

  private resetWebWorker() {
    this.countNb = 0;
  }

  private doCount() {
    this.countNb++;
    this.currentImmediate = setTimeout(this.doCount.bind(this), 0);
  }
}
