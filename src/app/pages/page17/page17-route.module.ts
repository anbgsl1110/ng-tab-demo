import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page17Component} from './page17.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page17的时候显示Page17Component组件
    component: Page17Component
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
export class Page17RouteModule {

}
