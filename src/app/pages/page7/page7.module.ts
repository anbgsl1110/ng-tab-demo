import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page7Component } from './page7.component';
import { ContentComponent } from './content/content.component';
import {Page7RouteModule} from './page7-route.module';

@NgModule({
  declarations: [Page7Component, ContentComponent],
  imports: [
    CommonModule,
    Page7RouteModule
  ]
})
export class Page7Module { }
