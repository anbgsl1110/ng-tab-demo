import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page19Component } from './page19.component';
import { ContentComponent } from './content/content.component';
import {Page19RouteModule} from './page19-route.module';

@NgModule({
  declarations: [Page19Component, ContentComponent],
  imports: [
    CommonModule,
    Page19RouteModule
  ]
})
export class Page19Module { }
