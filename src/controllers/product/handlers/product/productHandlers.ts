import { ProductDTO } from "@controllers/dto/productDTO";
import { Product } from "@domain/product/product";
import { ProductList } from "@domain/product/productList";
import { HttpStatus } from "@utils/http_status";
import { Response } from "express";
import { Exceptions, Handler } from "./productExeptionsDefinitions";
import { CustomProductError } from "@errors/product";
import { AddProductType } from "@controllers/product/interfaces/productController";


export function handleNotFoundProduct(searchResult: ProductList) {

    if (searchResult.length() == 0) {
        throw new CustomProductError("NotFoundProduct", HttpStatus.OK, searchResult, 'Product not found',);
    }
}

export function handleFoundProduct(searchResult: ProductList, res: Response) {
    const productListDto = searchResult.list.map(({ id, imgSrc, name, description, price }: Product) => new ProductDTO(id, imgSrc, name, description, price))
    res.status(HttpStatus.OK).json(productListDto)
}

export function handleInvalidParam(param: string) {
    if (param === '') {
        throw new CustomProductError("InvalidSearch", HttpStatus.BadRequest, param, 'Invalid search term');
    }
}

export function handleProductListResult(products: ProductList, res: Response) {

    const productListDto = products.list.map(({ id, imgSrc, name, description, price }: Product) => new ProductDTO(id, imgSrc, name, description, price))

    const response_message = products.length() > 0 ? productListDto : { message: 'no product list found', productList: [] };

    res.status(HttpStatus.OK).json(response_message)
}

export function handleProductExpetions(params: CustomProductError, res: Response) {
    const handler = Exceptions.get(params.name) as Handler;

    handler({
        status: params.status,
        responseObject: res,
        responseData: {
            message: params.message,
            data: params.errorData,
            error: params.name
        }
    })

}

export function handleBodyAddProduct(body: AddProductType){
    
    const isValid = body.id && body.description !== '' && body.imgSrc !== '' && body.name !== '' && body.description !== '' && body.price >= 0; 

    if(!isValid){
        throw new CustomProductError("InvalidAddProduct", HttpStatus.BadRequest, body, 'Invalid request body for product');
    }
}

export function handleAddedProduct(product: AddProductType, res: Response) {
    const addedProduct = new ProductDTO(product.id, product.imgSrc, product.name, product.description, product.price)
    res.status(HttpStatus.OK).json(addedProduct);
}