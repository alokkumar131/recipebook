import { Router, ActivatedRoute } from '@angular/router';
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
 
 constructor(private recipeService : RecipeService, 
  private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
     this.recipes = this.recipeService.recipes;
  }
  onAddNew(){
         this.router.navigate(['new'],{relativeTo:this.route});
  }
  // onSelectRecipe(id){
  //    this.router.navigate(['../recipes', id],{relativeTo:this.route, [routerLinkActive]:'active'});
  // } 


}
