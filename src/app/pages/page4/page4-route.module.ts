import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page4Component} from './page4.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page4的时候显示Page4Component组件
    component: Page4Component
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
export class Page4RouteModule {

}
