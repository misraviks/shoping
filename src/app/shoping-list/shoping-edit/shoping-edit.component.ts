import { Component, OnInit, ViewChild, ElementRef, Output,EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoping-edit',
  templateUrl: './shoping-edit.component.html',
  styleUrls: ['./shoping-edit.component.css']
})
export class ShopingEditComponent implements OnInit {
  @ViewChild('inputName') nameEntry:ElementRef;
  @ViewChild('inputAmount') amountEntry:ElementRef;
  @Output('addIngredient') addIngredients=new EventEmitter<Ingredient>();
  
  constructor() { }

  ngOnInit() {
  }

  onAdd()
  {
    const ingredient:Ingredient= new  Ingredient(this.nameEntry.nativeElement.value, this.amountEntry.nativeElement.value);
    this.addIngredients.emit(ingredient);
  }


}
