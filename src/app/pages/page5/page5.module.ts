import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page5Component } from './page5.component';
import { ContentComponent } from './content/content.component';
import {Page5RouteModule} from './page5-route.module';

@NgModule({
  declarations: [Page5Component, ContentComponent],
  imports: [
    CommonModule,
    Page5RouteModule
  ]
})
export class Page5Module { }
