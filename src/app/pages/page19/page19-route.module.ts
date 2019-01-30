import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page19Component} from './page19.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page19的时候显示Page19Component组件
    component: Page19Component
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
export class Page19RouteModule {

}
