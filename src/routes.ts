import express, { Application } from "express";
import ProductController from './controllers/product';

const router = express.Router();


router.post('/products', ProductController.addProduct)
router.get('/products', ProductController.getProductList)
router.get('/products/:productName', ProductController.searchProduct)


export function setupRoutes(app: Application) {
    app.use(router)
}
