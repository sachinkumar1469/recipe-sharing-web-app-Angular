import { Injectable } from "@angular/core";
import Ingredient from "../shared/ingredients.model";


@Injectable()
export class ShoppingListService{
    private ingredients:Ingredient[]=[
        new Ingredient("Apple",5),
        new Ingredient("Tomatos",10)
    ];

    getIngridents():Ingredient[]{
        return this.ingredients.slice();
    }

    onAddNewIngrident(ingrident:Ingredient):void{
        this.ingredients.push(ingrident);
    }
}