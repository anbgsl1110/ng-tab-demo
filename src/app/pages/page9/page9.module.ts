import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page9Component } from './page9.component';
import { ContentComponent } from './content/content.component';
import {Page9RouteModule} from './page9-route.module';

@NgModule({
  declarations: [Page9Component, ContentComponent],
  imports: [
    CommonModule,
    Page9RouteModule
  ]
})
export class Page9Module { }
