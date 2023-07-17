import { Component, OnInit } from '@angular/core';
import { RickMortyService, Character } from '../rick-morty.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit() {
    this.rickMortyService.getAllCharacters().subscribe((data: Character[]) => {
      const allCharacters = data;

      if (allCharacters && allCharacters.length > 0) {
        for (let i = allCharacters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [allCharacters[i], allCharacters[j]] = [allCharacters[j], allCharacters[i]];
        }

        this.characters = allCharacters.slice(0, 8);
      }
    });
  }
}