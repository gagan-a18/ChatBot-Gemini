import express, { Request, Response } from "express";
import router from "./routes/routes";
import dotenv from "dotenv";

dotenv.config();

const app: express.Application = express();
const port: Number = 3000;

app.use(express.json());
app.use('/domain/api/v1', router);


app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})