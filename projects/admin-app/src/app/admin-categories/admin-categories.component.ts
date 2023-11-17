import { Component, OnInit } from '@angular/core';
import { CrudCategoriesService } from '../services/crudCategories.service';
import { Category } from '../models/category.model';

import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit{

  categories: Category[] = [];
  constructor(
    private crudCategoriesService:CrudCategoriesService,
    private formBuilder:FormBuilder
    ){}

    formCategory!: FormGroup

  ngOnInit(): void {

    this.formBuilder.group({
      categoryName: ['', Validators.required]
    })

    this.crudCategoriesService.getCategories().subscribe((res:Category[])=>{
      this.categories = res;
    });
  }

}
