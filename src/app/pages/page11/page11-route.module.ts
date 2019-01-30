import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page11Component} from './page11.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page11的时候显示Page11Component组件
    component: Page11Component
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
export class Page11RouteModule {

}
