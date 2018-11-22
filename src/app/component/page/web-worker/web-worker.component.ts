import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {Worker1InApi} from '../../../../../webworker/api/worker1-in.api';
import {Worker1OutApi} from '../../../../../webworker/api/worker1-out.api';
import {ArrayUtils} from '../../../tools/array.utils';
import {WebWorkerService} from '../../../service/web-worker.service';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit {

  public erreur: string;
  public nbCount = 20;
  public started = false;


  public get loopCount(): number[] {
    return ArrayUtils.arrayFor(this.nbCount);
  }

  constructor(
    private webWorkerService: WebWorkerService,) {
  }

  public ngOnInit() {
    // Verification compatibilité
    if (!(window as any).Worker) {
      return this.erreur = 'Votre version de navigateur est obsolete et ne peut pas utilier les web workers. Veuillez telecharger une version de navigateur à jour.';
    }

  }

  public start(): void {
    this.started = true;
    this.webWorkerService.startEvent.emit();
  }
  public stop(): void {
    this.webWorkerService.stopEvent.emit();
    this.started = false;
  }


}
