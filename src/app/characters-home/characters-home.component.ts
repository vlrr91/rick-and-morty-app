import { Component, OnInit } from '@angular/core';

import { DataService } from '../characters/data.service';
import { ICharacter } from '../shared/interfaces/character';

@Component({
    selector: 'rm-characters-home',
    templateUrl: './characters-home.component.html',
    styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit{
    characters: ICharacter[];
    numberCharacters: number;
    pages: number;
    currentPage: number = 1;

    constructor(private appService: DataService) {}

    ngOnInit(): void {
        // this.appService.getCharactersPerPage(this.currentPage).subscribe({
        //     next: data => {
        //         this.characters = data.results;
        //         this.pages = data.info.pages;
        //         this.numberCharacters = data.info.count;
        //     },
        //     error: err => console.log(`Error: ${err.message}`)
        // });
    }

    onSelectPage(page: string): void {
        if (page === 'PREV' && this.currentPage > 1) {
            this.currentPage -= 1;
        } else if (page === 'NEXT') {
            this.currentPage += 1;
        }

        this.characters = [];
        this.appService.getCharactersPerPage(this.currentPage).subscribe({
            next: data => {
                this.characters = data.results;
                this.pages = data.info.pages;
            },
            error: err => console.log(`Error: ${err.message}`)
        });
    }
}
