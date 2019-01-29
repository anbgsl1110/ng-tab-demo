import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TreeGridComponent} from './tree-grid.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /treegrid的时候显示TreeGridComponent组件
    component: TreeGridComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class TreeGridRouteModule {

}
