import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Movie } from 'projects/admin-app/src/app/models/movie.model';
import { CrudMoviesService } from 'projects/admin-app/src/app/services/crud-movies.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit{

  movie: Movie | undefined;
  trailerUrl$: Observable<SafeResourceUrl | undefined> = of(undefined);
  
  constructor( 
    private crudMoviesService:CrudMoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.crudMoviesService.getMovieById(id).subscribe(
        (res: Movie) => {
          this.movie = res;
          if (this.movie.trailer) {
            this.trailerUrl$ = of(this.sanitizer.bypassSecurityTrustResourceUrl(this.movie.trailer));
          }
        },
        (error) => {
          console.error('Error al cargar detalles de la película:', error);
        }
      );
    }
  }

}
