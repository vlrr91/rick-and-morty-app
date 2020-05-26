import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { DataService } from "../data.service";
import { ICharacter } from '../../shared/interfaces/character';

@Component({
  selector: 'rm-character',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: ICharacter;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.character = this.route.snapshot.data['resolvedData'];
  }

  onBack(): void {
    this.location.back();
  }
}
