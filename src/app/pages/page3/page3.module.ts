import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3Component } from './page3.component';
import { ContentComponent } from './content/content.component';
import {Page3RouteModule} from './page3-route.module';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [Page3Component, ContentComponent],
  imports: [
    CommonModule,
    Page3RouteModule,
    ReactiveFormsModule,
    FormsModule,
    NgZorroAntdModule
  ]
})
export class Page3Module { }
