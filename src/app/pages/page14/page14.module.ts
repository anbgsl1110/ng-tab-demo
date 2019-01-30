import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page14Component } from './page14.component';
import { ContentComponent } from './content/content.component';
import {Page14RouteModule} from './page14-route.module';

@NgModule({
  declarations: [Page14Component, ContentComponent],
  imports: [
    CommonModule,
    Page14RouteModule
  ]
})
export class Page14Module { }
