import { logging } from 'protractor';
import { Component, Input, OnChanges, OnInit,  AfterContentInit, DoCheck } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements  OnInit, DoCheck{
   singleRecipeItem;
   id:number;
   isItemSelected:boolean= false;
   constructor(private router:Router, private route: ActivatedRoute, private recipeService: RecipeService){}

  ngDoCheck(){
     if(this.singleRecipeItem.length> 0){
        this.isItemSelected= true;
     }else{
        this.isItemSelected=false;
     }
  }
  onEdit(i){
     console.log(i)
     this.recipeService.editRecipe.next(i);
     //this.router.navigate(['edit'], {relativeTo: this.route});

  }

  ngOnInit(){
   this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      console.log(this.id)
      this.singleRecipeItem = this.recipeService.getRecipe(this.id);
      console.log(this.singleRecipeItem)
   })
  }


}
