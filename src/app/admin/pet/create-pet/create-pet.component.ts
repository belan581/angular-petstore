import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {

  pet = {
    "category": {
      "id": 3,
    },
    "id": 0,
    "name": "string",
    "photourl": "string",
    "price": 0,
    "status": true,
    "tag": {
      "id": 2,
      "name": "string"
    }
  }

  submitted = false;

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  savePet(): void {
    const data = {
      name: this.pet.name,
      photourl: this.pet.photourl,
      price: this.pet.price,
      status: this.pet.status,
      category:{
        id:2
      },
      tag:{
        id:3
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
