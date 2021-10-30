import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countriesApp';

  homeShow:boolean = true;
  allCountriesShow:boolean = false;
  countryDetailShow:boolean = false;

  /*untuk menangkap dari mana detail country di klik
  jika dari home maka flag akan di set sebagai home , 
  apabila dari all countries maka di set sebagai all countries, 
  id digunakan untuk menampilkan data yang sesuai dengan yg di klik users */

  backButtonString:string="";



  sendFlag : string="";
  sendId : number=-1;

  changeStatus(value:string){
    if(value=="home"){
      this.homeShow=true;
      this.allCountriesShow=false;
      this.countryDetailShow=false;
      this.sendFlag="";
      this.sendId=-1;
    }   
    if(value=="allcountries"){
      this.allCountriesShow=true;
      this.countryDetailShow=false;
      this.homeShow=false;

      this.sendFlag="";
      this.sendId=-1;
    }   
  }

  setFlag(flagAndId: any[]){ 
    this.sendFlag = flagAndId[0];
    this.sendId = flagAndId[1];

    this.homeShow=false;
    this.allCountriesShow=false;
    this.countryDetailShow=true;
  }

  backButton(value:string){
    if(value=="flagHome"){
      this.changeStatus("home")
    }   
    if(value=="flagAllCountries"){
      this.changeStatus("allcountries")
    }
  }

}
