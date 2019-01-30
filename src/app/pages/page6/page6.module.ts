import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page6Component } from './page6.component';
import { ContentComponent } from './content/content.component';
import {Page6RouteModule} from './page6-route.module';

@NgModule({
  declarations: [Page6Component, ContentComponent],
  imports: [
    CommonModule,
    Page6RouteModule
  ]
})
export class Page6Module { }
