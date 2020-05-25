import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pagination } from "../../interfaces/pagination";

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  infoPagination: Pagination;

  private paginationSubject$ = new Subject<Pagination>();
  paginationChange$ = this.paginationSubject$.asObservable();

  setInfoPagination({ count, pages, page, prev, next }) {
    this.infoPagination = {
      count,
      pages,
      page,
      prev,
      next
    };
    this.paginationSubject$.next(this.infoPagination);
  }
}
