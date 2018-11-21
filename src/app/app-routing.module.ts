import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilComponent} from './component/page/accueil/accueil.component';
import {MultiScreenComponent} from './component/page/multi-screen/multi-screen.component';
import {WebWorkerComponent} from './component/page/web-worker/web-worker.component';

const routes: Routes = [
  {path: '', component: AccueilComponent},
  {path: 'multi-ecran', component: MultiScreenComponent},
  {path: 'web-worker', component: WebWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
