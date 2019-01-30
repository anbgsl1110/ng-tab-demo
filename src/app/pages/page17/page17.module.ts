import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page17Component } from './page17.component';
import { ContentComponent } from './content/content.component';
import {Page17RouteModule} from './page17-route.module';

@NgModule({
  declarations: [Page17Component, ContentComponent],
  imports: [
    CommonModule,
    Page17RouteModule
  ]
})
export class Page17Module { }
