import { Component, OnInit } from '@angular/core';

import { CharactersHomeService } from './characters-home.service';
import { ICharacter } from '../characters-list/character';

@Component({
    selector: 'rm-characters-home',
    templateUrl: './characters-home.component.html',
    styleUrls: ['./characters-home.component.scss']
})
export class CharactersHomeComponent implements OnInit{
    private characters: ICharacter[];
    private numberCharacters: number;
    private pages: number;
    private currentPage: number = 1;
    
    constructor(private appService: CharactersHomeService) {}

    ngOnInit(): void {
        this.appService.getData(this.currentPage).subscribe({
            next: data => {
                this.characters = data.results;
                this.pages = data.info.pages;
                this.numberCharacters = data.info.count;
            },
            error: err => console.log(`Error: ${err.message}`)
        });
    }

    onSelectPage(page: string): void {
        if (page === 'PREV' && this.currentPage > 1) {
            this.currentPage -= 1;
        } else if (page === 'NEXT') {
            this.currentPage += 1;
        }

        this.characters = [];
        this.appService.getData(this.currentPage).subscribe({
            next: data => {
                this.characters = data.results;
                this.pages = data.info.pages;
            },
            error: err => console.log(`Error: ${err.message}`)
        });
    }
}