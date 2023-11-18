import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { CrudCinemasService } from '../services/crud-cinemas.service';
import { Cinema } from '../models/cinema.model';

@Component({
  selector: 'app-admin-cinemas',
  templateUrl: './admin-cinemas.component.html',
  styleUrls: ['./admin-cinemas.component.css']
})
export class AdminCinemasComponent implements OnInit{

  cinemaForm = new FormGroup({
    cinemaName: new FormControl(""),
    city: new FormControl(""),
    address: new FormControl("")
  });

  cinemas: Cinema[] = []

  constructor( private crudCinemasService:CrudCinemasService ){}

  ngOnInit(): void {
      this.crudCinemasService.getCinemas().subscribe((res:Cinema[]) => {
        this.cinemas = res;
      })
  }

  onSubmitCreate(){
  }

  onSubmitUpdate(cinemaId:string | undefined){}

  onSubmitDelete(cinemaId:string | undefined){}

}
