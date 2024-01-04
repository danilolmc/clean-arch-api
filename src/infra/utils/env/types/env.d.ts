declare namespace NodeJS {
    interface ProcessEnv {
        AWS_CLOUDWATCH_GROUP?: string;
        AWS_CLOUDWATCH_STREAM?: string;
        AWS_ACCESS_KEY_ID?: string;
        AWS_SECRET_ACCESS_KEY?: string;
        AWS_REGION?: string;
        AWS_CLOUDWATCH_ENDPOINT?: string;
        PORT?: string;
    }
}