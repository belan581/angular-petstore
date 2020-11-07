import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { AppPetComponent } from './app-pet/app-pet.component'; //Importación de la clase del componente app-pet

const routes: Routes = [
  { path: 'pets', component:AppPetComponent,  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }