import { Product } from "@domain/product/product";
import { IProductsGateway } from "@gateways/interfaces/productsGateway";
import { IAddProductUseCase } from "../interfaces/addProductUseCase";

export class AddProductListUseCase implements IAddProductUseCase{

    constructor(private gateway: IProductsGateway) { }

    execute(product: Product): Product {
        return this.gateway.addProduct(product)
    }
}