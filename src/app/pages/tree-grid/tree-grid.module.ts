import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeGridComponent} from './tree-grid.component';
import {ContentComponent} from './content/content.component';
import {TreeGridRouteModule} from './tree-grid-route.module';

@NgModule({
  declarations: [TreeGridComponent, ContentComponent],
  imports: [
    CommonModule,
    TreeGridRouteModule
  ]
})
export class TreeGridModule { }
