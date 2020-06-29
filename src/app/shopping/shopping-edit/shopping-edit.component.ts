import {  
   Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shoppinglist.serveice';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('shoppingListForm', {static:false}) shoppingListForm;
  listItemSubscription:Subscription;
  editingMode = false;
  selectedIndex:number;
  ingradient;

  constructor(private router: Router, private route: ActivatedRoute, private shoppingListService: ShoppingListService) { }

  ngOnInit(){
    this.listItemSubscription = this.shoppingListService.selectedItem
    .subscribe((index)=>{
        this.editingMode= true;
        this.selectedIndex = +index;
        this.ingradient= this.shoppingListService.ingradients[this.selectedIndex];
        
        this.shoppingListForm.form.patchValue({
          name: this.ingradient.name,
          amount: this.ingradient.amount
        })
        
    })
  }
  ngOnDestroy(){
    this.listItemSubscription.unsubscribe();
    this.editingMode= false;
  }
  onAddIngradients(shoppingListForm: NgForm){
   this.router.navigate(['list-items'], {relativeTo:this.route})
    if(!this.editingMode){
     this.shoppingListService.addListItems(shoppingListForm.value);
     this.shoppingListForm.reset();
     this.editingMode = false;
    }
    else{
     this.shoppingListService.editListItems(this.selectedIndex ,shoppingListForm.value);
     this.shoppingListForm.reset();
     this.editingMode= false;
    }
     
   }
   onDelete(){

    this.shoppingListService.deleteListItems(this.selectedIndex);
    this.editingMode=false;
    this.shoppingListForm.reset();
    if(this.shoppingListService.ingradients.length === 0){
      this.router.navigate(['/shopping-list']);
    }
   
   }
   onClear(){
      this.shoppingListForm.reset();
   }


  }



