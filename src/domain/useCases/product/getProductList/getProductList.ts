import { ProductList } from "@domain/product/productList";
import { IProductsGateway } from "@gateways/interfaces/productsGateway";
import { IGetProductListUseCase } from "@useCases/product/interfaces/getProductListUseCase";

export class GetProductListUseCase implements IGetProductListUseCase{

    constructor(private gateway: IProductsGateway) { }

    execute(): ProductList {
        return this.gateway.getProductList();
    }
}