import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute } from '@angular/router';

import { DataService } from "../data.service";
import { ICharacter } from '../../shared/interfaces/character';

@Component({
  selector: 'rm-character',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character: ICharacter;
  notFound: boolean;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const resolvedData = this.route.snapshot.data['resolvedData'];
    if (resolvedData) {
      this.notFound = false;
      this.character = resolvedData;
    } else {
      this.notFound = true;
    }
  }

  onBack(): void {
    this.location.back();
  }
}
