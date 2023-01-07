import { Ingredients } from "../shared/ingredients.model";

export class Recipe{
    public name:string;
    public description:string;
    public imageUrl:string;
    public id:number;
    public ingridents:Ingredients[]

    constructor(name:string,desc:string,img:string,id:number,ing:Ingredients[]){
        this.name = name;
        this.description = desc;
        this.imageUrl = img;
        this.id = id;
        this.ingridents = ing;
    }
}