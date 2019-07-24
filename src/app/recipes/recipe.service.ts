import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService{
    recipeSelected =new EventEmitter<Recipe>();

    private recipes:Recipe[]=[
        new Recipe(
            'Paneer Tikka',
        'Paneer Tikka Masala',
        'https://upload.wikimedia.org/wikipedia/commons/c/c2/Paneer_Tikka_Masala.jpg',
        [
            new Ingredient('Paneer',250),
            new Ingredient('Bell Paper',1),
            new Ingredient('Large Tomato',1),
            new Ingredient('Large Onion',1),
        ]),
        new Recipe(
            'Murgh Musallam',
            'Tasty Murgh Musallam',
            'https://upload.wikimedia.org/wikipedia/commons/2/20/Murgh_Musallam.JPG',
            [
                new Ingredient('Chicken Full',1),
                new Ingredient('Egg',5),
                new Ingredient('Tomato',3),
                new Ingredient('Ginger',1),
                new Ingredient('Large Onion',4),
            ])
       ];

    getRecipe()
    {
        return this.recipes.slice();
    }   
}