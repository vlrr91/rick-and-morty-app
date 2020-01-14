import { Component, OnInit } from '@angular/core';
import { CharacterDetailService } from './character-detail.service';
import { ICharacter } from '../characters-list/character';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'rm-character',
    templateUrl: './character-detail.component.html',
    styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
    private character: ICharacter;
    
    constructor(
        private characterDetailService: CharacterDetailService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        const id = +this.route.snapshot.paramMap.get('id');

        this.characterDetailService.getCharacter(id).subscribe({
            next: character => this.character = character,
            error: err => console.log(`Error: ${err.message}`)
        });
    }

    onBack(): void {
        this.router.navigate(['/characters']);
    }
}