import { Recipe } from '../recipes/recipe.model'
import { Subject } from 'rxjs';
import { EventEmitter } from '@angular/core';




export class RecipeService {
  recipes : Recipe[] = [
    {'name':'Chiken kurma', 'imagepath':'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG', 'description':'This is simply a test', ingradients:[{'name':'Chiken', 'quantity':1}] },
    {'name':'Mutton rice', 'imagepath':'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG', 'description':'This is simply a test', ingradients:[{'name':'Chiken', 'quantity':1}] },
    {'name':'Veg Kolhapuri', 'imagepath':'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG', 'description':'This is simply a test', ingradients:[{'name':'Chiken', 'quantity':1}] },
  ];


  constructor() { }
  editIndex
  editRecipe = new Subject<any>();

  getRecipe(id){
         return this.recipes[id];
  }

  addRecipe(recipe){
     this.recipes.unshift(recipe);
     console.log(this.recipes);
  }
  onEditRecipe(){
    return this.editIndex;
  }
  updateRecipe(recipe, i){
    console.log(i)
    this.recipes[i] = recipe
    console.log(this.recipes)
  }

}
