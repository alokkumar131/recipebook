import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model'



export class RecipeService {
  recipes : Recipe[] = [
    new Recipe('Chiken kurma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG'),
    new Recipe('Mutton kurma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG'),
    new Recipe('prawn kurma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG')
  ];

  singleRecipe;

  constructor() { }

  getSelectedRecipe = new EventEmitter<any>();
  // getSelectListRecipe(recipe){
  //       this.singleRecipe = recipe;
  //       console.log(this.singleRecipe);
  // }


}
