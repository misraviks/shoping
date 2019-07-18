import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {NgModel} from '@angular/forms'
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShopingEditComponent } from './shoping-list/shoping-edit/shoping-edit.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShopingListComponent,
    ShopingEditComponent,
    NgModel
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
