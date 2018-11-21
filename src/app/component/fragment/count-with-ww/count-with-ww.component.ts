import {Component, OnDestroy, OnInit} from '@angular/core';
import {Worker1InApi} from '../../../../../webworker/api/worker1-in.api';
import {Worker1OutApi} from '../../../../../webworker/api/worker1-out.api';

@Component({
  selector: 'app-count-with-ww',
  templateUrl: './count-with-ww.component.html',
  styleUrls: ['./count-with-ww.component.css']
})
export class CountWithWwComponent implements OnInit, OnDestroy {
  public currentNb = 0;
  private myWorker: Worker;

  constructor() {
  }

  public ngOnInit() {

    // Chargement du worker
    this.myWorker = new Worker('./assets/worker1.js');
    this.myWorker.onmessage = this.onWorker1Message.bind(this);

  }

  public ngOnDestroy(): void {
    if (this.myWorker) this.myWorker.terminate();

  }


  private startWebWorker() {
    this.postWorker1({
      start: true
    });
  }

  private stopWebWorker() {
    this.postWorker1({
      stop: true
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