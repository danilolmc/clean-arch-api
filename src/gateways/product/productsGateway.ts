import { ProductList } from '@domain/product/productList';
import { IProductsGateway } from '../interfaces/productsGateway';
import { productList } from '@infra/fakeDB/db';
import { Product } from '@domain/product/product';

export class ProductsGateway implements IProductsGateway {

    getProductList(): ProductList {
        return new ProductList(productList.list);
    }

    searchProduct(name: string): ProductList {

        const product = productList.list.filter(product => product.name.includes(name));

        return new ProductList(product);
    }

    addProduct(product: Product) {
        productList.list.push(product);
        return product
    }
} 