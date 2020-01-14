import { Component, Input, Output, OnInit, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'rm-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnChanges {
    @Input() totalPages: number;
    @Input() currentPage: number;
    @Input() numberCharacters: number;
    @Output() prevPage: EventEmitter<string> = new EventEmitter<string>();
    @Output() nextPage: EventEmitter<string> = new EventEmitter<string>();

    private info: string = "";
    private initial: number = 1;
    private end: number;
    private charactersForPage: number;

    constructor() {}

    ngOnChanges(): void {
        if (!this.end) {
            this.charactersForPage = Math.ceil(this.numberCharacters / this.totalPages);
            this.end = this.charactersForPage; 
            this.info = `${this.initial} - ${this.end} of ${this.numberCharacters}`;
        }
    }

    onPrev(): void {
        if (this.currentPage === 1) return;
        this.prevPage.emit('PREV');

        this.end = this.initial - 1;
        this.initial = this.end - this.charactersForPage + 1;
        this.info = `${this.initial} - ${this.end} de ${this.numberCharacters}`;
        
    }

    onNext(): void {
        if (this.currentPage === this.totalPages) return;
        this.nextPage.emit('NEXT');
    
        this.initial = this.end + 1;
        this.end = (this.currentPage + 1) * this.charactersForPage;

        if (this.end > this.numberCharacters) {
            this.info = `${this.initial} - ${this.numberCharacters} de ${this.numberCharacters}`;
        } else {
            this.info = `${this.initial} - ${this.end} of ${this.numberCharacters}`;
        }
    }
}