import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TreeGridComponent} from './tree-grid.component';
import {TreeGridRouteModule} from './tree-grid-route.module';
import {MainComponent} from "./content/main.component";
import {LeftControlComponent} from "./content/left-control/left-control.component";
import {ListComponent} from "./content/right-control/list/list.component";
import {TreeComponent} from "./content/left-control/tree/tree.component";
import {RightControlComponent} from "./content/right-control/right-control.component";
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations: [TreeGridComponent, MainComponent, LeftControlComponent, RightControlComponent, TreeComponent, ListComponent],
  imports: [
    CommonModule,
    TreeGridRouteModule,
    NgZorroAntdModule,
  ]
})
export class TreeGridModule { }
