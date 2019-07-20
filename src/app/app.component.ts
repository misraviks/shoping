import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoping';
  viewRecipe:boolean=true;
  viewCart:boolean=false;
  
  recipeShown()
  {
    this.viewRecipe=true;
    this.viewCart=false;
  }
  cartShown()
  {
    this.viewRecipe=false;
    this.viewCart=true;
  }
}
