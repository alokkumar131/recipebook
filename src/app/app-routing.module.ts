import { ShoppinglistSelectComponent } from './shopping/shoppinglist-select/shoppinglist-select.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipeSelectComponent } from './recipes/recipe-select/recipe-select.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingComponent } from './shopping/shopping.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const appRoutes : Routes = [
  {path:'', redirectTo:'/recipes', pathMatch:'full'},
   {path:'recipes', component:RecipesComponent, children:[
     {path:'', component: RecipeSelectComponent},
     {path:':id', component:RecipeDetailComponent},
     {path:':id/edit', component:RecipeEditComponent},
   ]},
   {path:'shopping-list', component: ShoppingComponent, children:[
      {path:'', component: ShoppinglistSelectComponent},
      {path:'list-items', component: ShoppingListComponent}
   ]
}
]

@NgModule({
    imports:[
      RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]
  })
export class ApproutingModule{

}