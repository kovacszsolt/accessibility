import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Pagea1Component} from './pagea1/pagea1.component';
import {Pagea2Component} from './pagea2/pagea2.component';
import {PageaComponent} from './pagea/pagea.component';


const routes: Routes = [
  {
    path: '',
    component: PageaComponent,
    children: [

      {
        path: 'pagea1',
        component: Pagea1Component
      },
      {
        path: 'pagea2',
        component: Pagea2Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageaRoutingModule {
}
