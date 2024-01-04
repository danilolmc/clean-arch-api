import { Product } from "./product";

export interface IProductList {
    isEmpty(): boolean;
    setEmpty(): void;
    length(): number;
    get list(): Product[];
}


export class ProductList implements IProductList {
    private _productList: Product[] = [];

    constructor(productList: Product[]) {
        this._productList = productList
    }

    isEmpty(): boolean {
        return this._productList.length == 0;
    }

    setEmpty() {
        this._productList = []
    }

    length(): number {
        return this._productList.length;
    }

    get list() {
        return this._productList
    }
}

