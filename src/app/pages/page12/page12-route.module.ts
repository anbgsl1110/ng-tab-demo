import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page12Component} from './page12.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page12的时候显示Page12Component组件
    component: Page12Component
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
export class Page12RouteModule {

}
