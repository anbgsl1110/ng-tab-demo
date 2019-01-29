import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import { HeaderComponent } from './layout/header/header/header.component';
import { SidebarComponent } from './layout/header/sidebar/sidebar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouteReuseStrategy} from "@angular/router";
import {SimpleReuseStrategy} from "./service/SimpleReuseStrategy";
import { TabComponent } from './common/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
