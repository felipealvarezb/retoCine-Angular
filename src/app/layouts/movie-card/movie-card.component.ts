import { Component, OnInit } from '@angular/core';
import { Movie } from 'projects/admin-app/src/app/models/movie.model';
import { CrudMoviesService } from 'projects/admin-app/src/app/services/crud-movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit{

  movies: Movie[] = [];
  constructor( private crudMoviesService:CrudMoviesService ){}

  ngOnInit(): void {
    this.crudMoviesService.getMovies().subscribe((res:Movie[]) => {
      this.movies = res;
    })
  }
}
