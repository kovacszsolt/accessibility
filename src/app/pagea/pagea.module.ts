import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagea1Component } from './pagea1/pagea1.component';
import { Pagea2Component } from './pagea2/pagea2.component';
import { PageaComponent } from './pagea/pagea.component';
import {RouterModule} from '@angular/router';
import {PageaRoutingModule} from './pagea-routing.module';



@NgModule({
  declarations: [Pagea1Component, Pagea2Component, PageaComponent],
  imports: [
    CommonModule,
    RouterModule,
    PageaRoutingModule
  ]
})
export class PageaModule { }
