import { ProductDTO } from "@controllers/dto/productDTO"
import { Request, Response } from "express"

export interface SearchProductParams {
    productName: string
}

export type AddProductType = ProductDTO;

export interface IProductControler {
    getProductList(request?: Request, response?: Response): void
    searchProduct(request: Request<SearchProductParams>, response: Response): void
    addProduct(request: Request<any, any, AddProductType>, response: Response): void

}
