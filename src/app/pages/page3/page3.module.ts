import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3.component';
import { ContentComponent } from './content/content.component';
import {Page3RouteModule} from './page3-route.module';

@NgModule({
  declarations: [Page3Component, ContentComponent],
  imports: [
    CommonModule,
    Page3RouteModule
  ]
})
export class Page3Module { }
