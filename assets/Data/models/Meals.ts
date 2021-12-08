class Meals {

id:string
categoryId:string[]
title:string
affordability:string
complexity:string
imageUrl:string
duration:number
 ingredients:string[]
 steps:string[]
 isGlutenFree:boolean
isVegan:boolean
isVegetarian:boolean
isLactoseFree:boolean


    constructor(id:string,categoryId:string[],title:string,affordability:string,complexity:string,imageUrl:string,duration:number, ingredients:string[],steps:string[],isGlutenFree:boolean,isVegan:boolean,isVegetarian:boolean,isLactoseFree:boolean){
this.id=id;
this.categoryId=categoryId;
this.title=title;
this.affordability=affordability
this.complexity=complexity;
this.imageUrl=imageUrl;
this.duration=duration;
this.ingredients=ingredients;
this.steps=steps;
this.isGlutenFree=isGlutenFree;
this.isVegan=isVegan;
this.isVegetarian=isVegetarian;
this.isLactoseFree=isLactoseFree
    }
}
export default Meals