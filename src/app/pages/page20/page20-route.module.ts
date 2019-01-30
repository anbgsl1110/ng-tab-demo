import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page20Component} from './page20.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page20的时候显示Page20Component组件
    component: Page20Component
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
export class Page20RouteModule {

}
