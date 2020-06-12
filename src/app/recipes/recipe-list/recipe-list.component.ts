import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
import { HashLocationStrategy } from '@angular/common';
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes : Recipe[] = [];
 
 constructor(private recipeService : RecipeService){}

  ngOnInit(){
     this.recipes = this.recipeService.recipes;
  }

  onSelectRecipe(recipe){
    this.recipeService.getSelectedRecipe.emit(recipe)
    console.log(recipe)
  } 


}
