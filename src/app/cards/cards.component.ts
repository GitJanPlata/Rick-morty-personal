import { Component, OnInit } from '@angular/core';
import { RickMortyService, Character } from '../rick-morty.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  characters: Character[] = [];

  constructor(private rickMortyService: RickMortyService) { }

  ngOnInit() {
    this.rickMortyService.getAllCharacters().subscribe((data: Character[]) => {
      this.characters = data;
    });
  }
}