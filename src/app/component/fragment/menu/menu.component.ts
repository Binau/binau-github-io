import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  public ngOnInit() {
  }

  public onClickLogo() {
    this.router.navigate(['']);
  }

  public onClickAccueil() {
    this.router.navigate(['']);
  }

  public onClickMultiScreen() {
    this.router.navigate(['/multi-ecran']);
  }

  public onCLickWebWorker() {
    this.router.navigate(['/web-worker']);
  }
}
