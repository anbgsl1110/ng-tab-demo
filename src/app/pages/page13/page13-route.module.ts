import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page13Component} from './page13.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page13的时候显示Page13Component组件
    component: Page13Component
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
export class Page13RouteModule {

}
