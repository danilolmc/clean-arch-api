import { Product } from "@domain/product/product";
import { ProductList } from "@domain/product/productList";

export interface IProductsGateway {

    getProductList(): ProductList;
    searchProduct(name: string): ProductList;
    addProduct(product: Product): Product;
} 