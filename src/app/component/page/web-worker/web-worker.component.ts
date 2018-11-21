import {Component, OnDestroy, OnInit} from '@angular/core';
import {Worker1InApi} from '../../../../../webworker/api/worker1-in.api';
import {Worker1OutApi} from '../../../../../webworker/api/worker1-out.api';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit {

  public erreur: string;
  public currentNb = 0;

  private myWorker: Worker;

  constructor() {
  }

  public ngOnInit() {
    // Verification compatibilité
    if (!(window as any).Worker) {
      return this.erreur = 'Votre version de navigateur est obsolete et ne peut pas utilier les web workers. Veuillez telecharger une version de navigateur à jour.';
    }

  }

}
