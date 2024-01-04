import { ExeptionKeys } from "@controllers/product/handlers/product/productExeptionsDefinitions";
import { HttpStatus } from "@utils/http_status";

export class CustomProductError extends Error {
    name!: ExeptionKeys;
    errorData: any;
    status: HttpStatus;

    constructor(errorName: ExeptionKeys, status: HttpStatus, errorData?: any, message?: string) {
        super(message);
        this.name = errorName;
        this.errorData = errorData;
        this.status = status
    }
}