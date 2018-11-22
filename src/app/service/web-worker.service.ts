import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class WebWorkerService {


  public startEvent = new EventEmitter<void>();
  public stopEvent = new EventEmitter<void>();

  constructor() {
  }


  public start(): void {
    this.startEvent.emit();
  }

  public stop(): void {
    this.stopEvent.emit();
  }
}
