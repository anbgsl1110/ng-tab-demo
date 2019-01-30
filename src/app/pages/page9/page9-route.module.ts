import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page9Component} from './page9.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page9的时候显示Page9Component组件
    component: Page9Component
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
export class Page9RouteModule {

}
