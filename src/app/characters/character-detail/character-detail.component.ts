import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

import { DataService } from "../data.service";
import { ICharacter } from '../../shared/interfaces/character';

@Component({
  selector: 'rm-character',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit, OnDestroy {
  character: ICharacter;
  characterSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');

    this.characterSubscription = this.dataService.getCharacterById(id).subscribe(
      character => this.character = character,
      err => console.log(`Error: ${err}`)
    );
  }

  onBack(): void {
    this.location.back();
  }

  ngOnDestroy(): void {
    this.characterSubscription.unsubscribe();
  }
}
