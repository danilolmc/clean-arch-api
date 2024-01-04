import { Product } from "@domain/product/product";

export interface IAddProductUseCase {
    execute(product: Product): Product;
}