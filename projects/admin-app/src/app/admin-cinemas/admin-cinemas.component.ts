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

  cinemas: Cinema[] = [];

  constructor( private crudCinemasService:CrudCinemasService ){}

  ngOnInit(): void {
      this.crudCinemasService.getCinemas().subscribe((res:Cinema[]) => {
        this.cinemas = res;
      });
  }

  onSubmitCreate(){
    const newDirector: Cinema = {
      cinemaName: this.cinemaForm.value.cinemaName ?? '',
      city: this.cinemaForm.value.city ?? '',
      address: this.cinemaForm.value.address ?? ''
    };

    this.crudCinemasService.createCinema(newDirector).subscribe(
      (res) => {
        console.log("Cinema added succesfully");

        this.crudCinemasService.getCinemas().subscribe((res:Cinema[]) => {
          this.cinemas = res;
        });

        this.cinemaForm.setValue({
          cinemaName: "",
          city: "",
          address: ""
        });

      },
      (error) => {
        console.error("Error adding cinema", error);
      }
    )
  }

  onSubmitUpdate(cinemaId:string | undefined){}

  onSubmitDelete(cinemaId:string | undefined){
    const confirmDelete = confirm("Are you sure you want to delete this director?");
  
    if (!confirmDelete) {
      return;
    }

    this.crudCinemasService.deleteCinema(cinemaId ?? '').subscribe(
      (res) => {
        console.log("Cinema deleted succesfully");

        this.crudCinemasService.getCinemas().subscribe((res:Cinema[]) => {
          this.cinemas = res;
        });
      },
      (error) => {
        console.error("Error deleting cinema", error);
      }
    )
  }

}
