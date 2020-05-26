import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PaginationComponent } from "./pagination/pagination.component";
import {NotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  declarations: [PaginationComponent, NotFoundComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonModule, PaginationComponent, NotFoundComponent]
})
export class SharedModule { }
