import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page2Component } from './page2.component';
import { ContentComponent } from './content/content.component';
import {Page2RouteModule} from "./page2-route.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations: [Page2Component, ContentComponent],
  imports: [
    CommonModule,
    Page2RouteModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class Page2Module { }
