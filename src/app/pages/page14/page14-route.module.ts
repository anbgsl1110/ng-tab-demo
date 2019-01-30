import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page14Component} from './page14.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page14的时候显示Page14Component组件
    component: Page14Component
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
export class Page14RouteModule {

}
