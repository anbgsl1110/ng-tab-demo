import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page4Component } from './page4.component';
import { ContentComponent } from './content/content.component';
import {Page4RouteModule} from './page4-route.module';

@NgModule({
  declarations: [Page4Component, ContentComponent],
  imports: [
    CommonModule,
    Page4RouteModule
  ]
})
export class Page4Module { }
