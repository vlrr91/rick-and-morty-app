import { Component, Input } from '@angular/core';
import { ICharacter } from './character';

@Component({
    selector: 'rm-characters',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent {
    errorMessage: string = '';
    @Input() characters: ICharacter[];

    constructor() {}

}