export class Recipe {
    public name:String;
    public imageUrl:String;
    public description:String;
    constructor(name:String,description:String,imageUrl:String) {
        this.name=name;
        this.description=description;
        this.imageUrl=imageUrl;
    }
}