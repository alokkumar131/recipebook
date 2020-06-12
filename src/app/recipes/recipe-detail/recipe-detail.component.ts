import { Component, Input, OnChanges, OnInit,  AfterContentInit, DoCheck } from '@angular/core';
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements  DoCheck{

   isItemSelected: boolean = false;
   constructor(private recipeService: RecipeService){}
   singleRecipeItem;

   ngDoCheck(){
      this.recipeService.getSelectedRecipe.subscribe((recipe)=>{
         this.singleRecipeItem = recipe;
      });
      console.log(this.singleRecipeItem);
      if(this.singleRecipeItem === undefined){
         this.isItemSelected = false;
      }else{
         this.isItemSelected = true;
      }
   }





}
