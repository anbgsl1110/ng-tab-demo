import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'tree-grid', loadChildren: './pages/tree-grid/tree-grid.module#TreeGridModule', data: { title: 'tree-grid',isRemove: true }},
  { path: 'page1', loadChildren: './pages/page1/page1.module#Page1Module', data: {title: 'demo页面1', isRemove: true }},
  { path: 'page2', loadChildren: './pages/page2/page2.module#Page2Module', data: {title: 'demo页面2', isRemove: true }},
  { path: 'page3', loadChildren: './pages/page3/page3.module#Page3Module', data: {title: 'demo页面3', isRemove: true }},
  { path: 'page4', loadChildren: './pages/page4/page4.module#Page4Module', data: {title: 'demo页面4', isRemove: true }},
  { path: 'page5', loadChildren: './pages/page5/page5.module#Page5Module', data: {title: 'demo页面5', isRemove: true }},
  { path: 'page6', loadChildren: './pages/page6/page6.module#Page6Module', data: {title: 'demo页面6', isRemove: true }},
  { path: 'page7', loadChildren: './pages/page7/page7.module#Page7Module', data: {title: 'demo页面7', isRemove: true }},
  { path: 'page8', loadChildren: './pages/page8/page8.module#Page8Module', data: {title: 'demo页面8', isRemove: true }},
  { path: 'page9', loadChildren: './pages/page9/page9.module#Page9Module', data: {title: 'demo页面9', isRemove: true }},
  { path: 'page10', loadChildren: './pages/page10/page10.module#Page10Module', data: {title: 'demo页面10', isRemove: true }},
  { path: 'page11', loadChildren: './pages/page11/page11.module#Page11Module', data: {title: 'demo页面11', isRemove: true }},
  { path: 'page12', loadChildren: './pages/page12/page12.module#Page12Module', data: {title: 'demo页面12', isRemove: true }},
  { path: 'page13', loadChildren: './pages/page13/page13.module#Page13Module', data: {title: 'demo页面13', isRemove: true }},
  { path: 'page14', loadChildren: './pages/page14/page14.module#Page14Module', data: {title: 'demo页面14', isRemove: true }},
  { path: 'page15', loadChildren: './pages/page15/page15.module#Page15Module', data: {title: 'demo页面15', isRemove: true }},
  { path: 'page16', loadChildren: './pages/page16/page16.module#Page16Module', data: {title: 'demo页面16', isRemove: true }},
  { path: 'page17', loadChildren: './pages/page17/page17.module#Page17Module', data: {title: 'demo页面17', isRemove: true }},
  { path: 'page18', loadChildren: './pages/page18/page18.module#Page18Module', data: {title: 'demo页面18', isRemove: true }},
  { path: 'page19', loadChildren: './pages/page19/page19.module#Page19Module', data: {title: 'demo页面19', isRemove: true }},
  { path: 'page20', loadChildren: './pages/page20/page20.module#Page20Module', data: {title: 'demo页面20', isRemove: true }},
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
