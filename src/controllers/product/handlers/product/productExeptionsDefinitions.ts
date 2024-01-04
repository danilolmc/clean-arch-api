import { HttpStatus } from "@utils/http_status";
import { Response } from "express";

const ProductExeptions = ['InvalidSearch', 'NotFoundProduct', 'InvalidAddProduct'] as const;

type ResponseData = {
    message: string
    error: string,
    data: any
};

type HandlerParams = {
    status: HttpStatus,
    responseData: ResponseData,
    responseObject: Response
}

export type ExeptionKeys = typeof ProductExeptions[number]
export type Handler = (params: HandlerParams) => void


export const Exceptions = new Map<ExeptionKeys, Handler>([
    ['NotFoundProduct', (params: HandlerParams) => {
        params.responseObject.status(params.status).send({
            ...params.responseData
        })
    }],
    ['InvalidSearch', (params: HandlerParams) => {
        params.responseObject.status(HttpStatus.BadRequest).json({
            ...params.responseData
        })
    }],
    ['InvalidAddProduct', (params: HandlerParams) => {
        params.responseObject.status(HttpStatus.BadRequest).json({
            ...params.responseData
        })
    }]
]);
