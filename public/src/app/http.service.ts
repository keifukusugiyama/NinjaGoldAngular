import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  ServiceGold: number;
  
  constructor() {
    this.ServiceGold = 0;
  }

  getCoin(){
    console.log("I got coin!");
    return this.ServiceGold;
  }

  savegold(num){
    this.ServiceGold += num;
    return this.ServiceGold;
  }

  // getTasks(){
  //   return this._http.get('/tasks');
  // }

}
