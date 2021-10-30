import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { COUNTRIES3 } from '../models/mock-countries';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output () newAllCountriesFlagEvent = new EventEmitter <Array<any>>();
  
  //list country
  countryList= COUNTRIES3;

  //send flag and id  from index of country
  setFlag(value:string, id:number){
    this.newAllCountriesFlagEvent.emit([value,id])
  }

}
