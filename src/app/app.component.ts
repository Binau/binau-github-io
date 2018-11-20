import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'binau-github-io';

  ngOnInit(): void {
    if ((window as any).Worker) {
      const myWorker = new Worker('assets/worker1.js');
      myWorker.postMessage([5, 3]);
    }

  }


}
