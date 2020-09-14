import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Pageb1Component} from './pageb1/pageb1.component';
import {Pageb2Component} from './pageb2/pageb2.component';
import {PagebComponent} from './pageb/pageb.component';


const routes: Routes = [
  {
    path: '',
    component: PagebComponent,
    children: [

      {
        path: 'pageb1',
        component: Pageb1Component
      },
      {
        path: 'pageb2',
        component: Pageb2Component
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagebRoutingModule {
}
