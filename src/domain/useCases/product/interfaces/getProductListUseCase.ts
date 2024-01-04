import { ProductList } from "@domain/product/productList";

export interface IGetProductListUseCase {
    execute(): ProductList;
}