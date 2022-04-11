import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WhoAreaComponent } from './who-area/who-area.component';
import { DrinksAreaComponent } from './drinks-area/drinks-area.component';
import { CheckAreaComponent } from './check-area/check-area.component';
import { WhoComponent } from './who/who.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoAreaComponent,
    DrinksAreaComponent,
    CheckAreaComponent,
    WhoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
