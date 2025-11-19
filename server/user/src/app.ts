import express, { type Application } from "express";
import { config } from "./config/env.config";
import { requestLogger } from "./middlewares/requestLogger.middleware";
import { logger } from "./utils/logger.utils";

const app: Application = express();

app.use(requestLogger);

export default app;