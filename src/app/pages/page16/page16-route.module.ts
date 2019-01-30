import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page16Component} from './page16.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page16的时候显示Page16Component组件
    component: Page16Component
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
export class Page16RouteModule {

}
