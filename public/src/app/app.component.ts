import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  goldFromService: Number;

  constructor(private _httpService: HttpService){
    this.goldFromService = this._httpService.getCoin();
  }

  updateservicegold(something){
    this._httpService.savegold(2);
    this.goldFromService= this._httpService.getCoin();
  }
  
  // ngOnInit will run when the component is initialized, after the constructor method.
  EarnedGold: number;
  randNum: number;
  // building: string;
  activities: string;
  TotalGold: number;

  ngOnInit(){
    this.EarnedGold = 0;
    this.TotalGold = 0;
    this.activities = "Nothing Happened Yet";
    // this.getTasksFromService();
  }

  onButtonClick(building: String): void {
    this.EarnedGold = this.calculateGold(building);
    console.log(this.EarnedGold);
    this.TotalGold += this.EarnedGold;
    this.activities = "One Add Worked";

    // let observable = this.calculateGold(building);
    // observable.subscribe(data => console.log(data));

  }

    calculateGold(building: String): number {
      let EarnedGold;
      if (building == "casino"){
        EarnedGold = Math.floor( (Math.random()  * 2 ) + 1);
      }
      else if (building == "farm") {
        EarnedGold = 5;
        console.log("Woop WOppp")
      }
      else if (building == "cave"){
        
      }
      else if (building == "house"){
    
      }
      return EarnedGold;
    }

  // getTasksFromService(){
  //   let observable = this._httpService.getTasks();
  //   observable.subscribe(data => console.log("Got our tasks!", data));
  // }
}
