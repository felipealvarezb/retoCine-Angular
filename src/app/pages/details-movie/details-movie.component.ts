import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Movie } from 'projects/admin-app/src/app/models/movie.model';
import { CrudMoviesService } from 'projects/admin-app/src/app/services/crud-movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit{

  movie: Movie | undefined;
  categoryNames: String[] = [];
  actorNames: String[] = [];
  directorNames: String[] = [];
  
  constructor( 
    private crudMoviesService:CrudMoviesService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.crudMoviesService.getMovieById(id).subscribe(
        (res: Movie) => {
          this.movie = res;
          this.categoryNames = res.categories.map(category => category.categoryName);
          this.actorNames = res.actors.map(actor => actor.actorName);
          this.directorNames = res.directors.map(director => director.directorName);
        },
        (error) => {
          console.error('Error al cargar detalles de la película:', error);
        }
      );
    }
  }

}
