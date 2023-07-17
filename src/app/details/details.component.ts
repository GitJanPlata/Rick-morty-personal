import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character: any;

  constructor(private route: ActivatedRoute, private rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    const characterId = this.route.snapshot.paramMap.get('id');
    if (characterId !== null) {
      this.rickMortyService.getCharacter(characterId).subscribe((character: any) => {
        this.character = character;
      });
    }
  }
}