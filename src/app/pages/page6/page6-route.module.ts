import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page6Component} from './page6.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page6的时候显示Page6Component组件
    component: Page6Component
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
export class Page6RouteModule {

}
