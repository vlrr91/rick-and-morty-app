import { Component, Output, EventEmitter, OnChanges, Input } from '@angular/core';

@Component({
    selector: 'rm-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
    @Input() totalItems: number;
    @Input() currentPage: number;
    @Input() pages: number;
    @Output() prevPage: EventEmitter<string> = new EventEmitter<string>();
    @Output() nextPage: EventEmitter<string> = new EventEmitter<string>();

    info: string = "";

    constructor() {}

    ngOnChanges(): void {
      this.displayInfoPagination();
    }

    onPrev(): void {
        this.prevPage.emit('PREV');
    }

    onNext(): void {
        this.nextPage.emit('NEXT');
    }

    displayInfoPagination() {
      const charactersPerPage = Math.ceil(this.totalItems / this.pages);
      const lastCharacter = this.validateLastCharacter(charactersPerPage);
      const initialCharacter = lastCharacter - (charactersPerPage - 1);

      this.info = `${initialCharacter} - ${lastCharacter} de ${this.totalItems}`;
    }

    validateLastCharacter(charactersPerPage: number): number {
      const lastCharacter = charactersPerPage * this.currentPage;
      return lastCharacter < this.totalItems ? lastCharacter : this.totalItems;
    }
}
