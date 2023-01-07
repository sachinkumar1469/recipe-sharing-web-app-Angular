import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const route:Routes = [
    {path:'shopping',component:ShoppingListComponent},
    {path:'',component:RecipesComponent,children:[
        {path:':recipeId',component:RecipeDetailComponent},
    ]},
]

@NgModule({
    imports:[
        RouterModule.forRoot(route)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutes{

}