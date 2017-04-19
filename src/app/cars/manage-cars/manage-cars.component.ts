import { Component, OnInit } from '@angular/core';
import {Car} from "../models/car";
import {CARS} from "../mocks/car-mock";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.css']
})
export class ManageCarsComponent implements OnInit {

  public cars: Car[] = CARS;
  public selectedCar: Car;

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.carsService.getCars()
      .subscribe(
        res => this.cars = res,
        ()=> {});
  }

  onSelectCarFun(car){
    this.selectedCar = car;
  }

}
