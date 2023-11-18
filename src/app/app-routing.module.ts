import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CinemasComponent } from './pages/cinemas/cinemas.component';
import { DetailsMovieComponent } from './pages/details-movie/details-movie.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'movies', component:MoviesComponent},
  {path: 'movie/:id', component:DetailsMovieComponent},
  {path: 'cinemas', component:CinemasComponent},
  {path: 'cinema', component:DetailsMovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
