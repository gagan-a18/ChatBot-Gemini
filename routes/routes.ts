import express, { Request, Response } from "express";
import textOnly from "../middleware/chat";

const router: express.Router = express.Router();

router.route('/').post(textOnly);

export default router;


