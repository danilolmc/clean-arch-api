export class ProductDTO {

    id: string;
    imgSrc: string;
    name: string;
    description: string;
    price: number;

    
    constructor(id: string, imgSrc: string, name: string, description: string, price: number){
        this.id = id;
        this.imgSrc = imgSrc;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}