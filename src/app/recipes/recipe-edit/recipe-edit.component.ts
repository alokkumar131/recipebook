import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild, DoCheck, OnDestroy, AfterViewInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
  @ViewChild('recipeForm', {static:false}) recipeForm;
  @ViewChild('quantity', {static:false}) quantity;
  @ViewChild('ingradientname', {static:false}) ingradientname;


  id:number;
  recipe;
  name:string;
  imagepath:string;
  description: string;
  ingradients:any[];
  ingradientIndex;
  isInvalidIngradient= true;
  igname:string=""
  qty:string=""
  updatedIngradient={};


  editingMode = false;

  constructor(private recipeService: RecipeService,private router:Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params
    .subscribe((params: Params)=>{
         this.id = params['id'];
         this.initForm();
      });
  }

private initForm(){
  this.recipe = this.recipeService.recipes[this.id];
  this.name = this.recipe.name;
  this.imagepath = this.recipe.imagepath;
  this.description = this.recipe.description;
  this.ingradients = this.recipe.ingradients;
}
onEditIngradient(ingradient, i){
   this.editingMode = true;
   this.ingradientIndex = +i;
   this.recipeForm.form.patchValue({
    ingradientname: ingradient.name,
    quantity: ingradient.quantity
   })

}
onUpdate(ingradientname, quantity){

  if(this.editingMode){
    console.log(ingradientname, quantity);
    this.ingradients[this.ingradientIndex] = {name:ingradientname, quantity:quantity}
    console.log(this.ingradients);
    this.quantity.reset();
    this.ingradientname.reset();
    this.editingMode = false;
  }else{
    console.log(ingradientname, quantity);
    this.ingradients.unshift({name:ingradientname, quantity:quantity})
    this.quantity.reset();
    this.ingradientname.reset();
    this.editingMode = false;
  }

}
onDelete(){
  this.ingradients.splice(this.ingradientIndex, 1);
  this.editingMode = false;
  this.quantity.reset();
  this.ingradientname.reset();
  this.editingMode = false;
}
onClear(){
  if(this.editingMode){
    this.quantity.reset();
    this.ingradientname.reset();
    this.editingMode = false;
  }

}
onSubmit(recipeForm:NgForm){
  let formData = recipeForm.value;
  console.log(formData.name)
  this.updatedIngradient['name'] = formData.name;
  this.updatedIngradient['imagepath'] = formData.imagepath;
  this.updatedIngradient['description'] = formData.description;
  this.updatedIngradient['ingradients'] = this.ingradients;
  console.log(this.updatedIngradient);
  this.recipeService.updateRecipe(this.updatedIngradient, this.id);
  this.router.navigate(['../'], {relativeTo:this.route})
  

}


  

}
