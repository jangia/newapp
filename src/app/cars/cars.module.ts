import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import {FormsModule} from "@angular/forms";
import {CarsService} from "./cars.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ManageCarsComponent, CarsListComponent, CarDetailsComponent],
  providers: [
    CarsService
  ]
})
export class CarsModule { }
