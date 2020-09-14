import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pageb1Component } from './pageb1/pageb1.component';
import { Pageb2Component } from './pageb2/pageb2.component';
import { PagebComponent } from './pageb/pageb.component';
import {RouterModule} from '@angular/router';
import {PagebRoutingModule} from './pageb-routing.module';



@NgModule({
  declarations: [Pageb1Component, Pageb2Component, PagebComponent],
  imports: [
    CommonModule,
    RouterModule,
    PagebRoutingModule,
  ]
})
export class PagebModule { }
