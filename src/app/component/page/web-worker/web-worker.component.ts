import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {ArrayUtils} from '../../../tools/array.utils';
import {WebWorkerService} from '../../../service/web-worker.service';

@Component({
  selector: 'app-web-worker',
  templateUrl: './web-worker.component.html',
  styleUrls: ['./web-worker.component.css']
})
export class WebWorkerComponent implements OnInit {

  public erreur: string;
  public nbCount = 1;
  public started = false;
  public enabledWw = true;
  public enabledSw = true;

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

  public reset() {
    this.webWorkerService.resetEvent.emit();
  }

  public switchEnabledWw() {
    this.enabledWw = !this.enabledWw;
  }

  public switchEnabledSw() {
    this.enabledSw = !this.enabledSw;
  }

}
