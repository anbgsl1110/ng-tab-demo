import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page20Component } from './page20.component';
import { ContentComponent } from './content/content.component';
import {Page20RouteModule} from './page20-route.module';

@NgModule({
  declarations: [Page20Component, ContentComponent],
  imports: [
    CommonModule,
    Page20RouteModule
  ]
})
export class Page20Module { }
