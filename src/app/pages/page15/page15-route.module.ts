import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page15Component} from './page15.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page15的时候显示Page15Component组件
    component: Page15Component
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
export class Page15RouteModule {

}
