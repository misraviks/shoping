export class Recipe{
public name:string;
public description:string;
public imagePath:string;
/**
 *Recipe Model contains name description and  imagepath
 */
    constructor(name:string,desc:string,imagePath:string) {
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;    
    }

}