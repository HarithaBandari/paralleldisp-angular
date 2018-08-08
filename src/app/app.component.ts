import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'module1';
  private data=""
  // getData(data){
  //  
  // }
  eventHandler(value:string) {
    //Some code
   this.data+=value;
   console.log(this.data);
}}
