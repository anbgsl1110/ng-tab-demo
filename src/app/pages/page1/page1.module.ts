import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [Page1Component, ContentComponent],
  imports: [
    CommonModule
  ]
})
export class Page1Module { }
