import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes : Recipe[] = [
    new Recipe('Chiken kurma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG'),
    new Recipe('Chiken kurma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG'),
    new Recipe('Chiken kurma', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Chicken_Korma.JPG')
  ];



}
