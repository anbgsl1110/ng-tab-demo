import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page18Component } from './page18.component';
import { ContentComponent } from './content/content.component';
import {Page18RouteModule} from './page18-route.module';

@NgModule({
  declarations: [Page18Component, ContentComponent],
  imports: [
    CommonModule,
    Page18RouteModule
  ]
})
export class Page18Module { }
