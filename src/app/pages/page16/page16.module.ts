import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page16Component } from './page16.component';
import { ContentComponent } from './content/content.component';
import {Page16RouteModule} from './page16-route.module';

@NgModule({
  declarations: [Page16Component, ContentComponent],
  imports: [
    CommonModule,
    Page16RouteModule
  ]
})
export class Page16Module { }
