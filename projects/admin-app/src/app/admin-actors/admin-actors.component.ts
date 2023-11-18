import { Component, OnInit } from '@angular/core';
import { Actor } from '../models/actor.model'
import { FormControl } from '@angular/forms';
import { CrudActorService } from '../services/crud-actors.service';


@Component({
  selector: 'app-admin-actors',
  templateUrl: './admin-actors.component.html',
  styleUrls: ['./admin-actors.component.css']
})
export class AdminActorsComponent implements OnInit{

  actorName = new FormControl("");

  actors: Actor[] = []
  constructor( private crudActorService:CrudActorService ){}

  ngOnInit(): void {
      this.crudActorService.getActors().subscribe((res:Actor[]) => {
        this.actors = res;
      })
  }

  onSubmitCreate(){
    if (this.actorName.value?.trim() === "") {
      alert("Please enter a actor name");
      return;
    }

    const newActor: Actor = {
      actorName: this.actorName.value ?? ''
    };

    this.crudActorService.createActor(newActor).subscribe(
      (res) => {

        console.log("Actor added successfully", res);

        this.crudActorService.getActors().subscribe((actors: Actor[]) => {
          this.actors = actors;
        });

        this.actorName.setValue("");
      },
      (error) => {
        console.error("Error adding actor", error);
      }
    )
  }

  onSubmitUpdate(actorId: string | undefined){
    const updatedActor: Actor = {
      _id:actorId,
      actorName: this.actorName.value ?? ''
    };

    this.crudActorService.updateActor(actorId ?? '', updatedActor).subscribe(
      (res) => {
        console.log("Actor updated successfully", res);

        this.crudActorService.getActors().subscribe((actors: Actor[]) => {
          this.actors = actors;
        });

        this.actorName.setValue("");
      }
    )
  }

  onSubmitDelete(actorId: string | undefined){
    const confirmDelete = confirm("Are you sure you want to delete this actor?");
  
    if (!confirmDelete) {
      return;
    }

    this.crudActorService.deleteActor(actorId ?? '').subscribe(
      (res) => {
        console.log("Actor deleted successfully", res);

        this.crudActorService.getActors().subscribe((actors: Actor[]) => {
          this.actors = actors;
        });
      },
      (error) => {
        console.error("Error deleting actor");
      }
    )
  }
}
