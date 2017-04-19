import { Injectable } from '@angular/core';
import {RequestOptions, Http, Headers} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CarsService {

  private carsUrl = 'http://127.0.0.1:8002/' + 'api/carmanager/cars/';  // URL to web api

  constructor(private http: Http) { }

  getCars(){
    let headers = new Headers({ 'Content-Type': 'application/json'});

    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.carsUrl , options)
                    .map(res => res.json());
  }

}
