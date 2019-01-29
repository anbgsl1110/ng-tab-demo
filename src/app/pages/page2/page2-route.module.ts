import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page2Component} from './page2.component';
export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page2的时候显示Page2Component组件
    component: Page2Component
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
export class Page2RouteModule {
}
