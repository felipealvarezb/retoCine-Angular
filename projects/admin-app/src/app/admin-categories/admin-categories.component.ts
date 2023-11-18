import { Component, OnInit } from '@angular/core';
import { CrudCategoriesService } from '../services/crud-categories.service';
import { Category } from '../models/category.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit{
  
  categoryName = new FormControl("");

  categories: Category[] = [];
  constructor( private crudCategoriesService:CrudCategoriesService ){}

  ngOnInit(): void {
    this.crudCategoriesService.getCategories().subscribe((res:Category[])=>{
      this.categories = res;
    });
  }

  onSubmitCreate(){
    if (this.categoryName.value?.trim() === "") {
      alert("Please enter a category name");
      return;
    }

    const newCategory: Category = {
      categoryName: this.categoryName.value ?? ''
    };

    this.crudCategoriesService.createCategory(newCategory).subscribe(
      (res) => {

        console.log("Category added successfully", res);

        this.crudCategoriesService.getCategories().subscribe((categories: Category[]) => {
          this.categories = categories;
        });

        this.categoryName.setValue("");
      },
      (error) => {
        console.error("Error adding category", error);
      }
    );
  }

  onSubmitUpdate(categoryId: string | undefined){

    const updatedCategory: Category = {
      _id:categoryId,
      categoryName: this.categoryName.value ?? ''
    };

    this.crudCategoriesService.updateCategory(categoryId ?? '', updatedCategory).subscribe(
      (res) => {
        console.log("Category updated successfully", res);

        this.crudCategoriesService.getCategories().subscribe((categories: Category[]) => {
          this.categories = categories;
        });

        this.categoryName.setValue("");
      },
      (error) => {
        console.error("Error deleting category", error);
      }
    );
  }

  onSubmitDelete(categoryId: string | undefined){
    const confirmDelete = confirm("Are you sure you want to delete this category?");
  
    if (!confirmDelete) {
      return;
    }

    this.crudCategoriesService.deleteCategory(categoryId ?? '').subscribe(
      (res) => {
        
        console.log("Category deleted successfully", res);
  
        this.crudCategoriesService.getCategories().subscribe((categories: Category[]) => {
          this.categories = categories;
        });
      },
      (error) => {
        console.error("Error deleting category", error);
      }
    );
  }
}
