import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page8Component} from './page8.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page8的时候显示Page8Component组件
    component: Page8Component
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
export class Page8RouteModule {

}
