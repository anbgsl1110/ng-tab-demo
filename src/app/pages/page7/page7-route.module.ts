import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page7Component} from './page7.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page7的时候显示Page7Component组件
    component: Page7Component
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
export class Page7RouteModule {

}
