import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page15Component } from './page15.component';
import { ContentComponent } from './content/content.component';
import {Page15RouteModule} from './page15-route.module';

@NgModule({
  declarations: [Page15Component, ContentComponent],
  imports: [
    CommonModule,
    Page15RouteModule
  ]
})
export class Page15Module { }
