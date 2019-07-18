import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[]=[
    new Recipe('Test Recipe','Test Desc','https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg'),
    new Recipe('Test Recipe','Test Desc','https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg')
   ];
  constructor() { }

  ngOnInit() {
  }

}
