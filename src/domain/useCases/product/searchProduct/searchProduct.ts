import { IProductsGateway } from "@gateways/interfaces/productsGateway";
import { ISearchProductUseCase } from "../interfaces/searchProductUseCase";
import { ProductList } from "@domain/product/productList";

export class SearchProductUseCase implements ISearchProductUseCase {

    constructor(private gateway: IProductsGateway) { }

    execute(productName: string): ProductList {
        return this.gateway.searchProduct(productName);
    }
}