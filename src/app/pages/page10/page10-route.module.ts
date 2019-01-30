import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page10Component} from './page10.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page10的时候显示Page10Component组件
    component: Page10Component
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
export class Page10RouteModule {

}
