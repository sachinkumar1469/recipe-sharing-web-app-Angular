import Ingredient from "../shared/ingredients.model";

export class Recipe{
    public name:string;
    public description:string;
    public image:string;
    public ingridents:Ingredient[];
    public id:number;
    constructor(name:string,description:string,image:string,ingrident:Ingredient[]){
        this.name = name;
        this.description = description;
        this.image = image;
        this.ingridents=ingrident;
        this.id=Math.floor(Math.random()*10);
    }
}
