import {Component, Output, EventEmitter, OnInit} from '@angular/core';

import { PaginationService } from "./pagination.service";
import { Pagination } from "../../interfaces/pagination";

@Component({
    selector: 'rm-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
    @Output() prevPage: EventEmitter<string> = new EventEmitter<string>();
    @Output() nextPage: EventEmitter<string> = new EventEmitter<string>();

    info: string = "";

    constructor(private paginationService: PaginationService) {}

    ngOnInit(): void {
      this.paginationService.paginationChange$.subscribe(
        infoPagination => this.displayInfoPagination(infoPagination)
      );
    }

    onPrev(): void {
        this.prevPage.emit('PREV');
    }

    onNext(): void {
        this.nextPage.emit('NEXT');
    }

    displayInfoPagination(infoPagination: Pagination) {
      const { count, pages, page, next } = infoPagination;
      const charactersPerPage = Math.ceil(count / pages);
      const lastCharacter = charactersPerPage * page;
      const initialCharacter = lastCharacter - (charactersPerPage - 1);

      this.info = `${initialCharacter} - ${next ? lastCharacter : count} de ${infoPagination.count}`;
    }
}
