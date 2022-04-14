import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { MenuAreaComponent } from './menu-area/menu-area.component';
import { OrderAreaComponent } from './order-area/order-area.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserAreaComponent,
    MenuAreaComponent,
    OrderAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
