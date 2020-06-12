import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedItem:boolean = true;

  selectedNav(nav:boolean){
    this.selectedItem = nav;
    console.log(this.selectedItem)
  }
  

}
