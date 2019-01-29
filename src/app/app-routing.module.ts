import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: 'page1',
    loadChildren: './pages/page1/page1.module#Page1Module',
    data: {
      title: '页面1',
      isRemove: true
    }
  },
  {
    path: 'page2',
    loadChildren: './pages/page2/page2.module#Page2Module',
    data: {
      title: '页面2',
      isRemove: true
    }
  },
  {
    path: 'page3',
    loadChildren: './pages/page3/page3.module#Page3Module',
    data: {
      title: '页面3',
      isRemove: true
    }
  },
  {
    path: 'tree-grid',
    loadChildren: './pages/tree-grid/tree-grid.module#TreeGridModule',
    data: {
      title: 'tree-grid',
      isRemove: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
