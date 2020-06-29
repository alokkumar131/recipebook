import { ApproutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { DropDownDirective } from './drop-down.directive';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeSelectComponent } from './recipes/recipe-select/recipe-select.component';
import { ShoppingListService } from './shopping/shoppinglist.serveice';
import { ShoppinglistSelectComponent } from './shopping/shoppinglist-select/shoppinglist-select.component';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropDownDirective,
    RecipeEditComponent,
    RecipeSelectComponent,
    ShoppinglistSelectComponent
  ],
  imports: [
    BrowserModule,
    ApproutingModule,
    FormsModule
  ],
  providers: [RecipeService, ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
