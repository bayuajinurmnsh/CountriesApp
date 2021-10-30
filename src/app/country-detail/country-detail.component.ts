import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COUNTRIES4 } from '../models/mock-countries';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() sendFlag ="";
  @Input() sendId = -1;

  @Output() newCountryDetailFlagEvent = new EventEmitter <string>();

  countryList= COUNTRIES4;

  backButton(value:string){
    this.newCountryDetailFlagEvent.emit(value)
  }
}