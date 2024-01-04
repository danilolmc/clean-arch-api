import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { setupLogs } from 'middlewares/morgan.middleware';
import { setupRoutes } from './routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger_output.json'

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());

setupLogs(app)
setupRoutes(app);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Server running at http:localhost:${port}`)
})