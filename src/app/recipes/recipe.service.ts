import { EventEmitter, Injectable } from "@angular/core";
import Ingredient from "../shared/ingredients.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    private recipes:Recipe[] = [
        new Recipe("Burger","Burger is made up of 'bun' and 'pototo","https://wallpapercave.com/wp/wp1929458.jpg",[new Ingredient("bun",5),new Ingredient("potato",10)]),
        new Recipe("Protein Shake","Burger is made up of 'bun' and 'pototo","https://wallpapercave.com/wp/wp1929458.jpg",[new Ingredient("Whey Protien",1800), new Ingredient("Banana",70)]),
    ];

    public recipeSelected = new EventEmitter<Recipe>()

    getRecipe():Recipe[]{
        return this.recipes.slice();
    }
}