import { Component, OnInit, Input, OnChanges, DoCheck } from '@angular/core';
import {ShoppingList} from '../shopping.model'
import { ShoppingListService } from '../shoppinglist.serveice';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements DoCheck{


  constructor(private shoppingListService: ShoppingListService){}
  ingradients;
  isActiveListitems = false;

  ngDoCheck(){
      if(this.shoppingListService.ingradients.length > 0){
        this.isActiveListitems = true;
        this.ingradients = this.shoppingListService.ingradients;
      }else{
        this.isActiveListitems = false;
      }
  }

  onSelectIngradientList(ingradient){
    this.shoppingListService.selectedItem.next(ingradient);
    
  }

}
