import express, { Request, Response } from "express";
import router from "./routes/routes";
import dotenv from "dotenv";
import { createAiModel } from "./genAiModel/createAiModel";

dotenv.config();

const app: express.Application = express();
const port: Number = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use('/domain/api/v1', router);

app.listen(port, () => {
    createAiModel();
    console.log(`Server is listening on http://localhost:${port}`);
})