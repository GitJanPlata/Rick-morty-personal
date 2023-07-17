import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: '', 
    redirectTo: 'register',
    pathMatch: 'full' 
  },
  { 
    path: '',  
    component: MainLayoutComponent, 
    children: [
      { path: 'cards', component: CardsComponent },
      { path: 'characters', component: CharactersComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'character/:id', component: DetailsComponent },
      { path: 'search', component: SearchComponent },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }