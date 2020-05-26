import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";

import { ICharacter } from "../../shared/interfaces/character";
import { DataService } from "../data.service";

@Component({
  selector: 'rm-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit, OnDestroy {
  totalNumberCharacters: number;
  currentPage: number;
  pages: number;
  next: string;
  prev: string;
  characters: ICharacter[];
  resolvedDataSubscription: Subscription;

  constructor(private characterService: DataService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.resolvedDataSubscription = this.route.data.subscribe(
      data => this.updateCharactersAndInfoPagination(data.resolvedData)
    );
  }

  updateCharactersAndInfoPagination(data): void {
    const {count, pages, next, prev, charactersPerPage} = data;
    const currentPage = +this.route.snapshot.paramMap.get('number');

    this.characters = charactersPerPage;
    this.currentPage = currentPage;
    this.totalNumberCharacters = count;
    this.pages = pages;
    this.next = next;
    this.prev = prev;
  }

  changePage(event): void {
    if (event === 'NEXT' && this.next !== null) {
      const nextPage = `${this.currentPage + 1}`;
      this.router.navigate(['characters/pages', nextPage]);
    } else if (event === 'PREV' && this.prev !== null) {
      const prevPage = `${this.currentPage - 1}`;
      this.router.navigate(['characters/pages', prevPage]);
    } else {
      return;
    }
  }

  selectCharacter(id: number): void {
    this.router.navigate(['/characters', id]);
  }

  ngOnDestroy(): void {
    this.resolvedDataSubscription.unsubscribe();
  }
}
