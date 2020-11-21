import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { PetService } from 'src/app/services/pet.service';
import { CategoryService } from 'src/app/services/category.service';
import { TagService } from 'src/app/services/tag.service';
//importar servicios de tag

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  categories: any;
  tags: any;

  pet = {
    "category": {
      "id": 0,
      "name":"string"
    },
    "id": 0,
    "name": "string",
    "photourl": "string",
    "price": 0,
    "status": true,
    "tag": {
      "id": 0,
      "name": "string"
    }
  }

  submitted = false;

  constructor(private petService: PetService,
              private categoryService: CategoryService,
              private tagService: TagService ) { }

  ngOnInit(): void {
    this.retrieveCategories();
    this.retrieveTags();
  }

  retrieveCategories(): void{
    this.categoryService.getAll()
      .subscribe(
        data => {
          this.categories=data;
          console.log(data);
          
        },
        error=>{
          console.error();
          
        }
        
      );
  }

  retrieveTags(): void{
    this.tagService.getAll()
      .subscribe(
        data => {
          this.tags=data;
          console.log(data);
          
        },
        error=>{
          console.error();
          
        }
        
      );
  }

  savePet(): void {
    const data = {
      name: this.pet.name,
      photourl: this.pet.photourl,
      price: this.pet.price,
      status: this.pet.status,
      category:{
        id:this.pet.category.id,
        name:this.pet.category.name
      },
      tag:{
        id: this.pet.tag.id,
        name:this.pet.tag.name
      }
    };

    this.petService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newPet(): void{
    this.submitted = false;
    this.pet = {
      "category": {
        "id": 0,
        "name":"string"
      },
      "id": 0,
      "name": "string",
      "photourl": "string",
      "price": 0,
      "status": true,
      "tag": {
        "id": 0,
        "name": "string"
      }
    }
    {

    }
  }


}
