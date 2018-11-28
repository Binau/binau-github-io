import {Component, EventEmitter, Input, OnDestroy, OnInit} from '@angular/core';
import {Worker1InApi} from '../../../../../webworker/api/worker1-in.api';
import {Worker1OutApi} from '../../../../../webworker/api/worker1-out.api';
import {WebWorkerService} from '../../../service/web-worker.service';

@Component({
  selector: 'app-count-with-ww',
  templateUrl: './count-with-ww.component.html',
  styleUrls: ['./count-with-ww.component.css']
})
export class CountWithWwComponent implements OnInit, OnDestroy {

  @Input() enabled: boolean;
  public currentNb = 0;
  private myWorker: Worker;
  private currentInterval;

  constructor(
    private webWorkerService: WebWorkerService,
  ) {
  }

  public ngOnInit() {

    // Chargement du worker
    this.myWorker = new Worker('./assets/worker1.js');
    this.myWorker.onmessage = this.onWorker1Message.bind(this);

    // Abonnement aux evenements
    this.webWorkerService.startEvent.subscribe(() => this.startWebWorker());
    this.webWorkerService.stopEvent.subscribe(() => this.stopWebWorker());
    this.webWorkerService.resetEvent.subscribe(() => this.resetWebWorker());

  }

  public ngOnDestroy(): void {
    if (this.myWorker) this.myWorker.terminate();
    if (this.currentInterval) clearInterval(this.currentInterval);
  }

  private startWebWorker() {
    if (this.enabled) {
      this.postWorker1({
        start: true
      });
    }
  }

  private stopWebWorker() {
    this.postWorker1({
      stop: true
    });
  }

  private resetWebWorker() {
    this.postWorker1({
      reset: true
    });
  }

  private postWorker1(bean: Worker1InApi) {
    this.myWorker.postMessage(bean);
  }

  private onWorker1Message(event: MessageEvent) {
    //
    const data: Worker1OutApi = event.data;
    this.currentNb = data.currentNb;
  }

}
