import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page13Component } from './page13.component';
import { ContentComponent } from './content/content.component';
import {Page13RouteModule} from './page13-route.module';

@NgModule({
  declarations: [Page13Component, ContentComponent],
  imports: [
    CommonModule,
    Page13RouteModule
  ]
})
export class Page13Module { }
