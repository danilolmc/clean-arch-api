import { Product } from '@domain/product/product';
import { CustomProductError } from '@errors/product';
import { ProductsGateway } from '@gateways/product/productsGateway';
import { AddProductListUseCase } from '@useCases/product/addProduct/addProduct';
import { GetProductListUseCase } from '@useCases/product/getProductList/getProductList';
import { SearchProductUseCase } from '@useCases/product/searchProduct/searchProduct';
import { HttpStatus } from '@utils/http_status';
import { Request, Response } from 'express';
import { AddProductType, IProductControler, SearchProductParams } from './interfaces/productController';
import {
    handleBodyAddProduct,
    handleAddedProduct,
    handleFoundProduct,
    handleInvalidParam,
    handleNotFoundProduct,
    handleProductExpetions,
    handleProductListResult
} from './handlers/product/productHandlers';
import { ProductDTO } from '@controllers/dto/productDTO';


export class ProductController implements IProductControler {

    getProductList(_: Request, res: Response) {

        try {
            const getProductListUseCase = new GetProductListUseCase(new ProductsGateway());
            const productList = getProductListUseCase.execute();
            handleProductListResult(productList, res)
        } catch (error) {


            if (error instanceof CustomProductError) {

                handleProductExpetions(error, res);

                return;
            }

            res.status(HttpStatus.InternalServerError).send(error)
        }
    }


    searchProduct(req: Request<SearchProductParams>, res: Response) {

        try {

            const productName = req.params.productName;

            handleInvalidParam(productName);

            const searchProductUseCase = new SearchProductUseCase(new ProductsGateway());
            const product = searchProductUseCase.execute(productName);

            handleNotFoundProduct(product);
            handleFoundProduct(product, res);

        } catch (error) {

            if (error instanceof CustomProductError) {

                handleProductExpetions(error, res);

                return;
            }

            res.status(HttpStatus.InternalServerError).send(error)
        }

    }


    addProduct(request: Request<any, any, ProductDTO>, res: Response) {
        try {
            const productData: AddProductType = request.body;

            handleBodyAddProduct(request.body);

            const addProductUseCase = new AddProductListUseCase(new ProductsGateway());

            const product = new Product(productData.id, productData.imgSrc, productData.name, productData.description, productData.price);

            const addedProduct = addProductUseCase.execute(product);

            console.log('addedProduct')
            handleAddedProduct(addedProduct, res)
            
        } catch (error) {
            console.log('addedProduct')


            if (error instanceof CustomProductError) {

                handleProductExpetions(error, res);

                return;
            }

            res.status(HttpStatus.InternalServerError).send(error)
        }
    }

}



export default new ProductController();