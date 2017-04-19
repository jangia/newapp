import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {

  @Input() cars;

  @Output() onSelectCar = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectedCarClick(car){
    this.onSelectCar.emit(car);
  }

}
