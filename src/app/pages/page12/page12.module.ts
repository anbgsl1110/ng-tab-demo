import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page12Component } from './page12.component';
import { ContentComponent } from './content/content.component';
import {Page12RouteModule} from './page12-route.module';

@NgModule({
  declarations: [Page12Component, ContentComponent],
  imports: [
    CommonModule,
    Page12RouteModule
  ]
})
export class Page12Module { }
