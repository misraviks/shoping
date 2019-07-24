import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
public name:string;
public description:string;
public imagePath:string;
public ingredients:Ingredient[];
/**
 *Recipe Model contains name description and  imagepath
 */
    constructor(name:string,desc:string,imagePath:string,ingredients:Ingredient[]) {
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;    
        this.ingredients=ingredients;
    }

}