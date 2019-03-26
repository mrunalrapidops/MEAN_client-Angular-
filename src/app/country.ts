export class Country {
    public _id?:string;
    public name:string;
    public capital :string;

     constructor(name,capital){
        this.name=name;
        this.capital=capital;
    }  
    /* constructor(id,name,capital){
        this._id= id;
        this.name=name;
        this.capital=capital;
    } */ 
}
