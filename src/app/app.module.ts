import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserAreaComponent } from './user-area/user-area.component';
import { MenuAreaComponent } from './menu-area/menu-area.component';
import { OrderAreaComponent } from './order-area/order-area.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { StatisticsAreaComponent } from './statistics-area/statistics-area.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAreaComponent,
    MenuAreaComponent,
    OrderAreaComponent,
    DashboardComponent,
    AdminComponent,
    StatisticsAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
