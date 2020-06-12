import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {ShoppingList} from '../shopping.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnChanges {
  @Input() newItem;

  ingradients = [];

  ngOnChanges(){
    if(this.newItem != undefined){
      this.ingradients.push(this.newItem);
    }
    else{
      return false;
    }
  }

}
