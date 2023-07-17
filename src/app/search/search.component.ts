import { Component, OnInit } from '@angular/core';
import { RickMortyService, Character } from '../rick-morty.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchResults: Character[] = [];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit() {
    this.rickMortyService.searchTerm$.subscribe(searchTerm => {
      this.filterResults(searchTerm);
    });
  }

  filterResults(searchTerm: string) {
    this.rickMortyService.getAllCharacters().subscribe((data: Character[]) => {
      if (data && data.length > 0) {
        const filteredResults = data.filter((character: Character) =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        this.searchResults = filteredResults;
      } else {
        this.searchResults = [];
      }
    });
  }
}