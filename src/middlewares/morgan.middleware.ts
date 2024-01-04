
import morgan from "morgan";
import { logger } from "@infra/log/logger";
import { Application } from "express";

const stream = {
    write: (message: any) => {
        logger.info(message)
    },
};

const skip = () => {
    const env = process.env.NODE_ENV || "development";
    return env !== "development";
};

const morganMiddleware = morgan(
    ":remote-addr :method :url :status :res[content-length] - :response-time ms",
    { stream, skip }
);



export function setupLogs(app: Application) {
    console.log(process.env.AWS_CLOUDWATCH_GROUP)
    app.use(morganMiddleware)
}