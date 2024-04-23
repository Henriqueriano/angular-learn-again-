import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './views/page-one/page-one.component';
import { PageTwoComponent } from './views/page-two/page-two.component';
import { PageTreeComponent } from './views/page-tree/page-tree.component';

const routes: Routes = [
  {
    path: 'pageOne',
    component: PageOneComponent
  },
  {
    path: 'pageTwo',
    component: PageTwoComponent
  },
  {
    path: 'pageTree',
    component: PageTreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
