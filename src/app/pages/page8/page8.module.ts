import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page8Component } from './page8.component';
import { ContentComponent } from './content/content.component';
import {Page8RouteModule} from './page8-route.module';

@NgModule({
  declarations: [Page8Component, ContentComponent],
  imports: [
    CommonModule,
    Page8RouteModule
  ]
})
export class Page8Module { }
