import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './component/page/app/app.component';
import {MenuComponent} from './component/fragment/menu/menu.component';
import {AccueilComponent} from './component/page/accueil/accueil.component';
import { MultiScreenComponent } from './component/page/multi-screen/multi-screen.component';
import { WebWorkerComponent } from './component/page/web-worker/web-worker.component';
import { MsgPanelComponent } from './component/fragment/msg-panel/msg-panel.component';
import { CountWithWwComponent } from './component/fragment/count-with-ww/count-with-ww.component';
import { CountNoWwComponent } from './component/fragment/count-no-ww/count-no-ww.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {WebWorkerService} from './service/web-worker.service';
import { DebugComponent } from './component/fragment/debug/debug.component';

@NgModule({
  declarations: [
    // Components
    MenuComponent,
    // Pages
    AppComponent,
    AccueilComponent,
    MultiScreenComponent,
    WebWorkerComponent,
    MsgPanelComponent,
    CountWithWwComponent,
    CountNoWwComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
    WebWorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
