import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './app-pet.component.html',
  styleUrls: ['./app-pet.component.css']
})
export class AppPetComponent implements OnInit {

  pets: any;
  currentPet = null;
  currentIndex = -1;
  name = '';

  constructor(private petService: PetService) { }

  ngOnInit(): void {
    this.retrievePets();
  }

  retrievePets(): void {
    this.petService.getAll()
      .subscribe(
        data => {
          this.pets = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
