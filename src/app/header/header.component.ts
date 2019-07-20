import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector:'app-header',
templateUrl :'./header.component.html'
})
export class HeaderComponent
{
    @Output() showCart =   new EventEmitter();
    @Output() showRecipe = new EventEmitter();
    collapsed = true;

    onRecipeClick()
    {
        this.showRecipe.emit();
    }
    onListClick()
    {
        this.showCart.emit();
    }

}
