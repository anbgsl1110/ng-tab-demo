import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page11Component } from './page11.component';
import { ContentComponent } from './content/content.component';
import {Page11RouteModule} from './page11-route.module';

@NgModule({
  declarations: [Page11Component, ContentComponent],
  imports: [
    CommonModule,
    Page11RouteModule
  ]
})
export class Page11Module { }
