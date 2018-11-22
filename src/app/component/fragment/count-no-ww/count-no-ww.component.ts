import {Component, OnInit} from '@angular/core';
import {Worker1OutApi} from '../../../../../webworker/api/worker1-out.api';
import {WebWorkerService} from '../../../service/web-worker.service';

@Component({
  selector: 'app-count-no-ww',
  templateUrl: './count-no-ww.component.html',
  styleUrls: ['./count-no-ww.component.css']
})
export class CountNoWwComponent implements OnInit {

  public currentNb = 0;
  public countNb = 0;
  private currentImmediate;

  constructor(
    private webWorkerService: WebWorkerService,) {
  }

  public ngOnInit() {

    setInterval(() => {
      this.currentNb = this.countNb;
    }, 100);

    // Abonnement aux evenements
    this.webWorkerService.startEvent.subscribe(() => this.startWebWorker());
    this.webWorkerService.stopEvent.subscribe(() => this.stopWebWorker());
  }

  private startWebWorker() {
    if (this.currentImmediate) this.stopWebWorker();
    this.doCount();
  }

  private stopWebWorker() {
    clearTimeout(this.currentImmediate);
    this.currentImmediate = null;
  }

  private doCount() {
    console.log('.');
    this.countNb++;
    this.currentImmediate = setTimeout(this.doCount.bind(this), 0);
  }
}
