
export class Product implements Product {
    private _id: string;
    private _imgSrc: string;
    private _name: string;
    private _description: string;
    private _price: number;

    constructor(id: string, imgSrc: string, name: string, description: string, price: number) {
        this._id = id;
        this._imgSrc = imgSrc;
        this._name = name;
        this._price = price;
        this._description = description;
    }

    public get id(): string {
        return this._id;
    }
    
    public set id(value: string) {
        this._id = value;
    }
    
    public get imgSrc(): string {
        return this._imgSrc;
    }
    
    public set imgSrc(value: string) {
        this._imgSrc = value;
    }
    
    public get name(): string {
        return this._name;
    }
    
    public set name(value: string) {
        this._name = value;
    }
    
    public get description(): string {
        return this._description;
    }
    
    public set description(value: string) {
        this._description = value;
    }
    
    public get price(): number {
        return this._price;
    }
    
    public set price(value: number) {

        if(value < 0){
            throw new Error('Invalid price');
        }
        
        this._price = value;
    }
}