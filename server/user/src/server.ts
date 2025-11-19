import app from "./app";
import { config } from "./config/env.config";
import { logger } from "./utils/logger.utils";

app.listen(config.get("PORT"), () => {
  logger.info(
    `Server is running on port http://localhost:${config.get("PORT")}`
  );
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
