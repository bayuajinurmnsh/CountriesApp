import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { COUNTRIES, COUNTRIES2 } from '../models/mock-countries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() newHomeFlagEvent = new EventEmitter<Array<any>>();
  
  //cx : any[]= COUNTRIES
  //list country and sort by population
  countryListByPopulation = COUNTRIES.sort((a, b) => b.population - a.population);

  //list country and sort by total area
  countryListByArea = COUNTRIES2.sort((a, b) => b.totalArea - a.totalArea);


  //send flag and id 
  setFlag(value:string, id:number){
    this.newHomeFlagEvent.emit([value,id])
  }

}
