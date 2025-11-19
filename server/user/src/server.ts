import app from "./app";
import { connectDb } from "./config/db.config";
import { config } from "./config/env.config";
import { connectRedis } from "./config/redis.config";
import { logger } from "./utils/logger.utils";

// connectDb()
//   .then(() => {
//     app.listen(config.get("PORT"), () => {
//       logger.info(
//         `Server is running on port http://localhost:${config.get("PORT")}`
//       );
//       logger.info("Connected to MongoDB");
//     });
//   })
//   .catch((err) => {
//     logger.error("Error connecting to MongoDB", err);
//   });

(async function startServer() {
  try {
    // db startup
    await connectDb();
    logger.info("Connected to MongoDB");

    // redis stratup
    await connectRedis();
    logger.info("Connected to Redis");

    // app startup
    app.listen(config.get("PORT"), () => {
      logger.info(
        `Server is running on port http://localhost:${config.get("PORT")}`
      );
    });
  } catch (error) {
    logger.error("Error starting server", error);
    process.exit(1);
  }
})();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
