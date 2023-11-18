import { Component, OnInit } from '@angular/core';
import { CrudDirectorService } from '../services/crud-directors.service';
import { Director } from '../models/director.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-admin-directors',
  templateUrl: './admin-directors.component.html',
  styleUrls: ['./admin-directors.component.css']
})
export class AdminDirectorsComponent implements OnInit{

  directorName = new FormControl("");

  directors: Director[] = [];

  constructor(private crudDirectorsService:CrudDirectorService){}

  ngOnInit(): void {
      this.crudDirectorsService.getDirectors().subscribe((res:Director[]) => {
        this.directors = res;
      });
  }

  onSubmitCreate(){
    if (this.directorName.value?.trim() === "") {
      alert("Please enter a director name");
      return;
    }

    const newDirector: Director = {
      directorName: this.directorName.value ?? ''
    };

    this.crudDirectorsService.createDirector(newDirector).subscribe(
      (res) => {

        console.log("Director added successfully", res);

        this.crudDirectorsService.getDirectors().subscribe((res:Director[]) => {
          this.directors = res;
        });

        this.directorName.setValue("");
      },
      (error) => {
        console.error("Error adding director", error);
      }
    )

  }

  onSubmitUpdate( directorId:string | undefined ){

    const updatedDirector: Director = {
      _id:directorId,
      directorName: this.directorName.value ?? ''
    };

    this.crudDirectorsService.updateDirector(directorId ?? '', updatedDirector).subscribe(
      (res) => {

        console.log("Director updated successfully", res);

        this.crudDirectorsService.getDirectors().subscribe((res:Director[]) => {
          this.directors = res;
        });

        this.directorName.setValue("");
      },
      (error) => {
        console.error("Error updating director", error);
      }
    )
  }

  onSubmitDelete( directorId:string | undefined) {

    const confirmDelete = confirm("Are you sure you want to delete this director?");
  
    if (!confirmDelete) {
      return;
    }

    this.crudDirectorsService.deleteDirector(directorId ?? '').subscribe(
      (res) => {

        console.log("Director deleted successfully", res);

        this.crudDirectorsService.getDirectors().subscribe((res:Director[]) => {
          this.directors = res;
        });

        this.directorName.setValue("");
      },
      (error) => {
        console.error("Error deleting director", error);
      }
    )
  }

}
