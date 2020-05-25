import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaginationService } from "../shared/components/pagination/pagination.service";
import { Pagination } from "../shared/interfaces/pagination";

@Component({
  selector: 'rm-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  infoPagination: Pagination;

  constructor(private paginationService: PaginationService,
              private router: Router) { }

  ngOnInit(): void {
    this.paginationService.paginationChange$.subscribe(
      info => this.infoPagination = info
    );
  }

  changePage(event): void {
    const { next, page, prev } = this.infoPagination;
    console.log(this.infoPagination);
    if (event === 'NEXT' && next !== null) {
      const nextPage = `${page + 1}`;
      this.router.navigate(['characters/pages', nextPage]);
    } else if (event === 'PREV' && prev !== null) {
      const prevPage = `${page - 1}`;
      this.router.navigate(['characters/pages', prevPage]);
    } else {
      return;
    }
  }
}
