import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('Recipe1','Description of Recipe1','https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg'),
    new Recipe('Recipe2','Description of Recipe2','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg  ')
   ];
  constructor() { }

  ngOnInit() {
  }
  onSelectRecipe(recipe:Recipe)
  {
    this.recipeWasSelected.emit(recipe);
  }

}
