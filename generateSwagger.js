const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Clean Arch product API',
      description: 'Clean Architecure API for product domain'
    },
    host: 'localhost:3333'
  };

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes.ts'];

swaggerAutogen(outputFile, endpointsFiles, doc);
