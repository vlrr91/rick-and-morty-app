import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICharacter } from "../../shared/interfaces/character";
import { DataService } from "../data.service";
import { PaginationService } from "../../shared/components/pagination/pagination.service";

@Component({
  selector: 'rm-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {
  characters: ICharacter[];

  constructor(private characterService: DataService,
              private route: ActivatedRoute,
              private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        const page = params.get('number');
        if (isNaN(+page)) {
          this.updateCharactersAndInfoPagination(1);
        } else {
          this.updateCharactersAndInfoPagination(+page);
        }
      }
    );
  }

  updateCharactersAndInfoPagination(page): void {
    this.characterService.getDataApi(page).subscribe(
      response => {
        const { count, pages, next, prev, charactersPerPage } = response;
        this.characters = charactersPerPage;
        this.paginationService.setInfoPagination({
          count,
          pages,
          page: +page,
          next,
          prev
        });
      }
    )
  }
}
