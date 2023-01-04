export class Recipe{
    public name:string;
    public description:string;
    public imageUrl:string;
    public id:number;

    constructor(name:string,desc:string,img:string,id:number){
        this.name = name;
        this.description = desc;
        this.imageUrl = img;
        this.id = id;
    }
}