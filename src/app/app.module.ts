import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { DetailsMovieComponent } from './pages/details-movie/details-movie.component';
import { CinemasComponent } from './pages/cinemas/cinemas.component';
import { DetailsCinemaComponent } from './pages/details-cinema/details-cinema.component';
import { SubscriptionFormComponent } from './subscription-form/subscription-form.component';
import { MovieCardComponent } from './layouts/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    DetailsMovieComponent,
    CinemasComponent,
    DetailsCinemaComponent,
    SubscriptionFormComponent,
    MovieCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
