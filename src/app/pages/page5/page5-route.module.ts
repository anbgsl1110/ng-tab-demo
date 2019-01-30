import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Page5Component} from './page5.component';


export const ROUTES: Routes = [
  {
    path: '', // 当访问 /page5的时候显示Page5Component组件
    component: Page5Component
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
export class Page5RouteModule {

}
