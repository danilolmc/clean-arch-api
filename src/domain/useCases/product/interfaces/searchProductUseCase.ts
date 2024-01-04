import { ProductList } from "@domain/product/productList";

export interface ISearchProductUseCase {
    execute(productName: string): ProductList;
}