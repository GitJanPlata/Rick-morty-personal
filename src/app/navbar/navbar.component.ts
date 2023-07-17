import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RickMortyService } from '../rick-morty.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = '';

  constructor(private rickMortyService: RickMortyService, private router: Router) {}

  search() {
    this.rickMortyService.setSearchTerm(this.searchTerm);
    this.router.navigate(['/search']);
  }
}