import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { ContentComponent } from './content/content.component';
import {Page2RouteModule} from "./page2-route.module";

@NgModule({
  declarations: [Page2Component, ContentComponent],
  imports: [
    CommonModule,
    Page2RouteModule
  ]
})
export class Page2Module { }
