import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page10Component } from './page10.component';
import { ContentComponent } from './content/content.component';
import {Page10RouteModule} from './page10-route.module';

@NgModule({
  declarations: [Page10Component, ContentComponent],
  imports: [
    CommonModule,
    Page10RouteModule
  ]
})
export class Page10Module { }
