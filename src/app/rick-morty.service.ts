import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

export interface Character {
  name: string;
  image: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';
  private searchTermSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public searchTerm$: Observable<string> = this.searchTermSubject.asObservable();

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/character`).pipe(
      map((data: any) => data.results)
    );
  }

  getAllCharacters(): Observable<any[]> {
    return this.http.get(`${this.baseUrl}/character`).pipe(
      switchMap((data: any) => {
        const totalPages = data.info.pages;
        const pageRequests: Observable<any>[] = [];

        // Crear un array de observables para cada página de resultados
        for (let i = 2; i <= totalPages; i++) {
          pageRequests.push(this.http.get(`${this.baseUrl}/character?page=${i}`).pipe(
            map((pageData: any) => pageData.results)
          ));
        }

        // Realizar todas las llamadas a la API en paralelo y combinar los resultados
        return forkJoin([this.getCharacters(), ...pageRequests]).pipe(
          map((results: any[][]) => results.flat())
        );
      })
    );
  }

  getCharacter(characterId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/character/${characterId}`);
  }

  setSearchTerm(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }
}